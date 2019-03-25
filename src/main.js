import Vue from 'vue'
import App from './App.vue'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD2-i1VhNKiam1KK__LKKHz1499rxASqWo',
    libraries: 'places'
  }
})

import GmapCluster from 'vue2-google-maps/dist/components/cluster'
Vue.component('GmapCluster', GmapCluster);

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead);

new Vue({
  el: '#app',
  render: h => h(App)
})
