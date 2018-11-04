<template>
  <form class="form">
    <div class="form-group">
      <input type="text"
             id="name"
             name="name"
             class="form-control">
      <label for="name">Name</label>
    </div>
    <div class="form-group">
      <input type="text"
             id="phone"
             name="phone"
             class="form-control">
      <label for="phone">Phone</label>
    </div>
    <div class="form-group">
      <input type="email"
             id="email"
             name="email"
             class="form-control"
             autocomplete="off">
      <label for="email">E-mail</label>
    </div>
    <div class="checkbox-wrapper">
      <input type="checkbox" name="agree" id="agree" class="visibility-hidden custom-checkbox"/>
      <label for="agree">I agree the processing of personal data</label>
    </div>
    <button type="submit" class="btn btn--contact">
      Get it touch
    </button>
  </form>
</template>

<script>
  export default {
    name: 'ContactsForm',
    data() {
      return {
        contactUs: {
          name: '',
          phone: '',
          email: ''
        },
        sent: false
      }
    }
  }
</script>

<style lang="scss">

</style>
