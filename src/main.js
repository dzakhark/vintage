import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 700,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCqOt1M7ZJ0XIt-3HYQrg3DopRVNaq8bYA',
    disableDefaultUI: true,
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
