<template>
  <div>
    <label>
      {{ label }}
      <input :type="type" class="classes"/>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'ContactsForm',
    props: {
      id: String,
      label: String,
      type: String,
      name: String,
      placeholder: String
    }
  }
</script>

<style lang="scss">

</style>
