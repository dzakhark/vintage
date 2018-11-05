<template>
  <div>
    <div class="container">
      <h1 class="title title--main">Contacts</h1>
      <info></info>
    </div>
    <div class="grey-bg">
      <div class="container">
        <offices></offices>
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
import Info from './Info.vue';
import Offices from './Offices.vue';
import ContactUs from './ContactUs.vue';

export default {
  name: 'Contacts',
  components: {
    Info,
    Offices,
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
