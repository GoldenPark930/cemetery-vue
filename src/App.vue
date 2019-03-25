<template>
  <div id="app">
    
    <header-component :list="list" @find="find"></header-component>

    <main>
      <map-component :center="center" :list="list" @show="show"></map-component>
    </main>

    <modal-component v-if="modal" @close="modal = false">
      <template slot="header">{{ record.title }}</template>

      <div v-html="record.text"></div>
    </modal-component>

  </div>
</template>

<script>

import Modal from './components/Modal';
import Header from './components/Header';
import MapComponent from './components/Map';

export default {
  name: 'app',

  components: { 
    'modal-component': Modal, 
    'header-component': Header,
    'map-component': MapComponent 
  },

  data () {
    return {
      list: [],
      modal: false,
      center: { lat: 49.32652050000001, lng: 25.77126499999997 },
      record: {
        title: '',
        text: ''
      }
    }
  },

  created() {
    this.initList();
  },

  methods: {

    initList() {

      this.$http.get('/data.json').then(response => {
        this.list = response.body;
      }, response => {
        // error callback
      });
    },

    show(record) {
      this.record = record;
      this.modal = true;
    },

    find(record) {
      this.center = record.coords;
    },

    close() {
      this.modal = false;
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/style";
</style>
