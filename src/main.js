// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import Icon from 'vue-awesome/components/Icon'

import store from './vuex/store'
import router from './router'

import { sync } from 'vuex-router-sync'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vue-awesome/icons/eye'
import 'vue-awesome/icons/search'
import 'vue-awesome/icons/spinner'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

sync(store, router)

Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
