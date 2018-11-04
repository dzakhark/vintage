<template>
  <div>
    <div class="container">
      <h1 class="title title--main">Contacts</h1>
      <contacts-info></contacts-info>
    </div>
    <div class="grey-bg">
      <div class="container">
        <contacts-offices></contacts-offices>
      </div>
    </div>
    <div class="green-bg green-bg--image">
      <div class="container">
        <contact-us></contact-us>
      </div>
    </div>
  </div>
</template>

<script>
import ContactsInfo from './ContactsInfo.vue';
import ContactsOffices from './ContactsOffices.vue';
import ContactsForm from '../form/ContactsForm.vue';
import ContactUs from './ContactUs.vue';

export default {
  name: 'Contacts',
  components: {
    ContactsInfo,
    ContactsOffices,
    ContactUs,
  },
};
</script>

<style lang="scss">
  @import "~@/assets/style/share/variables.scss";

  .contacts-link {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 5px;
    color: $green;
    font-weight: 600;
    text-decoration: none;

    &--tel {
      margin-top: 20px;
      font-size: 26px;
      font-weight: 300;
    }
  }
</style>
