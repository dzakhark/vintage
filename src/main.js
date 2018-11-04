import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAR7exfb_gqDVvkWrtILqe3BwttcLO3D3w'
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
