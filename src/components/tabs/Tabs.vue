<template>
  <div class="">
    <div class="tabs">
      <ul class="tabs__list">
        <li v-for="tab in tabs"
            :key="tab.name"
            class="tabs__item">
          <a :href="tab.name"
             class="tabs__link"
             :class="{'tabs__link--active': tab.isActive}"
             @click.prevent="selectedTab(tab)">{{ tab.name }}</a>
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectedTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
      this.$emit('selected', selectedTab.name);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/share/variables.scss";

  .tabs {

    &__list {
      display: flex;
      justify-content: flex-start;
      margin: 0 -10px;
      padding: 0;
      list-style: none;
    }

    &__link {
      display: inline-block;
      padding: 5px 10px;
      font-size: 11px;
      font-weight: 600;
      color: white;
      text-decoration: none;
      transition: color .2s ease;

      &:hover, &:focus {
        color: $green;
      }

      &--active {
        color: $green;
      }
    }
  }

  .is-active {
    color: #3db565;
  }
</style>
