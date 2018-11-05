<template>
  <div class="contact-us">
    <h2 class="title">Contact Us</h2>
    <div class="grid-2">
      <div class="contact-us__form">
        <contact-form></contact-form>
      </div>
      <div class="contact-us__text">
        <p>
          Please tell us more about your request and give us info
          about your company and country
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '../form/ContactsForm.vue';

export default {
  name: 'ContactsForm',
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss">
  @import "~@/assets/style/share/variables.scss";

  .contact-us {
    padding: 90px 0 100px;

    &__text {
      padding-left: 35px;
      color: $grey-dark;
      font-weight: 600;
    }

    &__form {
      padding-right: 35px;
    }
  }

  @media (max-width: 850px) {
    .contact-us {

      &__text {
        padding-left: 0;
        padding-top: 50px;
      }

      &__form {
        padding-right: 0;
      }
    }
  }

  @media (max-width: 580px) {
    .contact-us {
      padding: 40px 0 50px;
    }
  }
</style>
