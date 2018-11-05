<template>
  <div class="offices">
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
    <div class="offices__map-container">
      <GmapMap
        :center="selectedOffice.location"
        :zoom="15"
        :options="mapOptions"

        class="offices__map"
        map-type-id="terrain"
      >
        <gmap-marker
          :position="selectedOffice.location"
          :icon="{ url: require('@/assets/images/map-marker.png')}"
        >
        </gmap-marker>
      </GmapMap>
    </div>
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
        mapOptions: {disableDefaultUI: true},
        offices: [
          {
            id: 1,
            city: 'Kyiv',
            name: 'Global Message Services Ukraine LLC',
            street: 'Kuiv, Stepan Bandera, 33',
            index: '02066',
            country: 'Ukraine',
            location: {lat:50.431782, lng:30.516382}
          },
          {
            id: 2,
            city: 'New York',
            name: 'Global Message Services USA LLC',
            street: 'New York, 278 Spring St',
            index: '10013',
            country: 'USA',
            location: {lat:40.7, lng:-73.9}
          },
          {
            id: 3,
            city: 'Guangzhou',
            name: 'Global Message Services Chine LLC',
            street: 'Guangzhou, Bai Yun Da Dao Nan, 47',
            index: '510000',
            country: 'Chine',
            location: {lat:23.128994, lng:113.253250}
          },
          {
            id: 4,
            city: 'Barcelona',
            name: 'Global Message Services Ukraine LLC',
            street: 'Barcelona, Carrer de Sardenia, 25',
            index: '02066',
            country: 'Spain',
            location: {lat:41.390205, lng:2.154007}
          }
        ],
        selectedOffice: {
          id: 1,
          city: 'Kyiv',
          name: 'Global Message Services Ukraine LLC',
          street: 'Kuiv, Stepan Bandera, 33',
          index: '02066',
          country: 'Ukraine',
          location: {lat:50.431782, lng:30.516382}
        }
      }
    },
    mounted() {
      this.mapOptions = { ...this.mapOptions, styles: mapStyle };
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

    &__map-container {
      position: relative;
      width: 50%;
    }

    &__map {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 50vw;
    }
  }

  @media (max-width: 850px) {
    .offices {
      display: block;

      &__info {
        width: 100%;
        padding: 40px 0 20px;
      }

      &__map-container {
        position: relative;
        width: 100%;
        min-height: 350px;
      }

      &__map {
        left: -15px;
        height: 100%;
        width: 100vw;
      }
    }
  }
</style>
