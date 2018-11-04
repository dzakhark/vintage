<template>
  <div class="container offices">
    <div class="offices__info">
      <h2 class="title">Our Offices</h2>

      <tabs @selected="selected">
        <tab v-for="(office, index) in offices"
             :name="office.city"
             :selected="index === 0">
          <office-tab-content :office="office"></office-tab-content>
        </tab>
      </tabs>
    </div>
    <div class="office__map">
      {{ selectedOffice.location }}
    </div>
    <!--<GmapMap-->
      <!--:center="{lat:-10, lng:10}"-->
      <!--:zoom="7"-->
      <!--map-type-id="terrain"-->
      <!--:style="{width: '500px', height: '500px'}"-->
    <!--&gt;-->
    <!--</GmapMap>-->
  </div>
</template>

<script>
  import mapStyle from '../../assets/map/googleMapStyle.json'
  import Tabs from '../tabs/Tabs.vue'
  import Tab from '../tabs/Tab.vue'
  import OfficeTabContent from './OfficesTabContent.vue';

  export default {
    name: 'ContactsOffices',
    components: {
      Tabs,
      Tab,
      OfficeTabContent,
    },
    data() {
      return {
        mapOptions: [],
        offices: [
          {
            id: 1,
            city: 'Kyiv',
            name: 'Global Message Services Ukraine LLC',
            street: 'Kuiv, Stepan Bandera, 33',
            index: '02066',
            country: 'Ukraine',
            location: {lat:10, lng:10}
          },
          {
            id: 2,
            city: 'New York',
            name: 'Global Message Services Ukraine LLC',
            street: 'Kuiv, Stepan Bandera, 33',
            index: '02066',
            country: '1',
            location: {lat:9, lng:9}
          },
          {
            id: 3,
            city: 'Guangzhou',
            name: 'Global Message Services Ukraine LLC',
            street: 'Kuiv, Stepan Bandera, 33',
            index: '02066',
            country: '2',
            location: {lat:8, lng:8}
          },
          {
            id: 4,
            city: 'Barcelona',
            name: 'Global Message Services Ukraine LLC',
            street: 'Kuiv, Stepan Bandera, 33',
            index: '02066',
            country: '3',
            location: {lat:7, lng:7}
          }
        ],
        selectedOffice: {
          id: 1,
          city: 'Kyiv',
          name: 'Global Message Services Ukraine LLC',
          street: 'Kuiv, Stepan Bandera, 33',
          index: '02066',
          country: 'Ukraine',
          location: {lat:10, lng:10}
        }
      }
    },
    mounted() {
      console.log(mapStyle);
      this.mapOptions = mapStyle;
    },
    methods: {
      selected(office) {
        [this.selectedOffice] = this.offices.filter(o => o.city === office);
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/style/share/variables.scss";

  .offices {
    display: flex;
    color: white;

    &__info {
      width: 50%;
      padding: 100px 0 150px;
    }

    &__map {
      width: 50%;
    }
  }

</style>
