<template>
  <form class="form" @submit.prevent="sendForm">
    <div class="form-group">
      <input type="text"
             id="name"
             name="name"
             v-model="form.name.val"
             @input="input('Name')"
             class="form-control"
             :class="{ 'error': form.name.errorText }">
      <label for="name">Name</label>
    </div>
    <span v-show="form.name.errorText" class="error-msg">
      {{ form.name.errorText }}
    </span>
    <div class="form-group">
      <input type="text"
             id="phone"
             name="phone"
             v-model="form.phone.val"
             @input="input('Phone')"
             class="form-control"
             :class="{ 'error': form.phone.errorText }">
      <label for="phone">Phone</label>
    </div>
    <span v-show="form.phone.errorText" class="error-msg">
      {{ form.phone.errorText }}
    </span>
    <div class="form-group">
      <input type="email"
             id="email"
             name="email"
             v-model="form.email.val"
             @input="input('Email')"
             class="form-control"
             :class="{ 'error': form.email.errorText }">
      <label for="email">E-mail</label>
    </div>
    <span v-show="form.email.errorText" class="error-msg">
      {{ form.email.errorText }}
    </span>
    <div class="checkbox-wrapper">
      <input type="checkbox" name="agree" id="agree" v-model="isPrivacyChecked" class="visibility-hidden custom-checkbox"/>
      <label for="agree">I agree the processing of personal data</label>
    </div>
    <span v-show="mainError" class="error-msg">
      {{ mainError }}
    </span>
    <button type="submit" class="btn btn--contact" :disabled="isSending">
      Get it touch
    </button>
  </form>
</template>

<script>
  import api from '@/api/api';

  export default {
    name: 'ContactsForm',
    data() {
      return {
        form: {
          name: {
            val: '',
            errorText: '',
            rule: /^([A-Za-zа-яА-Я]+[-]?[A-Za-zа-яА-Я]*[.]?[\s]?)+$/i,
          },
          phone: {
            val: '',
            errorText: '',
            rule: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
          },
          email: {
            val: '',
            errorText: '',
            rule: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          },
        },
        mainError: '',
        isPrivacyChecked: false,
        isFormValid: false,
        isSending: false,
      };
    },
    methods: {
      input(field) {
        this.mainError = '';
        const target = this.form[field.toLowerCase()];
        target.errorText = !target.val.match(target.rule) ? `${field} is not valid!` : '';
        this.isFormValid = target.errorText === '';
      },
      checkValidity() {
        this.isFormValid = true;
        Object.keys(this.form).forEach(field => {
          if (this.form.hasOwnProperty(field) && !this.form[field].val) {
            this.form[field].errorText = 'This field is required!';
          }
          this.isFormValid = this.isFormValid && this.form[field].errorText === '';
        });
        if (!this.isPrivacyChecked) {
          this.isFormValid = false;
          this.mainError = 'Please accept processing of personal data!';
        }
      },
      resetForm() {
        Object.keys(this.form).forEach(field => {
          this.form[field].val = '';
        });
      },
      async sendForm() {
        this.checkValidity();
        if (this.isFormValid) {
          this.isSending = true;
          const resp = await api.post('/post', {
            name: this.form.name.val,
            phone: this.form.phone.val,
            email: this.form.email.val,
          });
          console.log(resp);
          if (!resp) {
            this.mainError = 'Server error:('
          }
          this.resetForm();
          this.isSending = false;
        }
      },
    },
  };
</script>

<style lang="scss">

</style>
