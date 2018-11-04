<template>
  <div>
    <div class="container">
      <h1 class="title title--main">Contacts</h1>
      <contacts-info></contacts-info>
    </div>
  </div>
</template>

<script>
import ContactsInfo from './ContactsInfo.vue';

export default {
  name: 'Contacts',
  components: {
    ContactsInfo,
  },
};
</script>

<style lang="scss">
  @import "~@/assets/style/share/variables.scss";

  .contacts-link {
    display: inline-block;
    vertical-align: middle;
    color: $green;
    font-weight: 600;
    text-decoration: none;

    &--tel {
      margin-top: 27px;
      font-size: 26px;
      font-weight: 300;
    }
  }
</style>
