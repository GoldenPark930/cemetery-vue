<template>
  <header>
    <div class="container-fluid">
      <div class="row justify-content-end">

        <div class="col-12 p-0">
          <div class="wrap-site-name">
            <a href="#" class="logo">
              <img :src="require(`./../assets/img/logo.svg`)" />
            </a>
            <div class="site-name">Polskie Сmentarze na Ukrainie</div>
          </div>
          <div class="search-box">

            <form action="#" 
              v-on:submit.prevent 
              class="d-flex justify-content-end align-items-center">

              <vue-bootstrap-typeahead
                v-model="query"
                @hit="selected"
                :serializer="item => item.title"
                :data="list">

                <template slot="append">
                  <button type="button" class="btn btn-primary btn-white">
                    <img :src="require(`./../assets/img/icons/search.svg`)" />
                  </button>
                </template>

              </vue-bootstrap-typeahead>

            </form>
          </div>
        </div>

      </div>
    </div>
  </header>  
</template>

<script>
export default {
  name: 'header-component',

  props: {
    list: { type: Array, default: [] },
  },

  data () {
    return {
      query: ''
    }
  },

  methods: {
    selected: function(e) {
      this.$emit('find', e)
    }
  }
}
</script>

<style lang="scss">
input {
  outline: none;
}

.form-control:focus {
  box-shadow: none !important;
}

.btn-primary.btn-white {
  color: #fff;
  background: #fff;
  border-color: #fff;
  background-color: #fff;
}

.btn-primary.btn-white:not(:disabled):not(.disabled):active {
  color: #fff;
  background: #fff;
  border-color: #fff;
  background-color: #fff;
}
</style>
