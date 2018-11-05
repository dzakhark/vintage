<template>
  <div class="office">
    <h3 class="office__title">{{ office.name }}</h3>
    <div class="office__info">
      <p>{{ office.street }}</p>
      <p>{{ office.index }}</p>
      <p>{{ office.country }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficeTabContent',
  props: {
    office: Object,
  },
};
</script>

<style lang="scss" scoped>
  .office {
    &__title {
      font-size: 26px;
      font-weight: 400;
    }

    &__info {
      font-size: 11px;

      p {
        margin: 0;
      };
    }
  }
</style>
