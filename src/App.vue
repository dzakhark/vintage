<template>
  <div id="app">
    <contacts></contacts>
  </div>
</template>

<script>
import Contacts from './components/contacts/Contacts.vue';

export default {
  name: 'app',
  components: {
    Contacts,
  },
};
</script>

<style lang="scss">
  @import "assets/style/share/share";

  #app {
    font-family: 'SuisseIntl', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.8;
    color: $grey;
    overflow-x: hidden;
  }


</style>
