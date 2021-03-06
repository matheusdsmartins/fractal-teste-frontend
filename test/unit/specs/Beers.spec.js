import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/vuex/store'
import BootstrapVue from 'bootstrap-vue'
import Beers from '@/components/Beers'
import Icon from 'vue-awesome/components/Icon'

import { sync } from 'vuex-router-sync'

import 'vue-awesome/icons/eye'
import 'vue-awesome/icons/search'
import 'vue-awesome/icons/spinner'

function initComponent () {
  Vue.use(VueRouter)
  Vue.use(BootstrapVue)
  const router = new VueRouter({
    routes: [
      {
        path: '/',
        name: 'Beers',
        component: Beers
      }
    ]
  })
  sync(store, router)
  Vue.component('icon', Icon)
  return new Vue({
    template: '<router-view></router-view>',
    router,
    store
  })
}

describe('Beers.vue', () => {
  let vm, el
  beforeEach(() => {
    el = document.createElement('div')
    vm = initComponent()
    vm.$router.push({ name: 'Beers' })
  })
  afterEach(() => {
    vm.$destroy()
  })
  it('should call getBeers when created', (done) => {
    let spy = sinon.spy(Beers.methods, 'getBeers')
    vm.$mount(el)
    vm.$nextTick(() => {
      spy.should.have.been.called
      done()
    })
  })
  it('should load 25 beers to $store.state.beers when first created', () => {
    vm.$mount(el)
    vm.$nextTick(() => {
      setTimeout(() => {
        expect(vm.$store.state.beers.length).to.equal(25)
      }, 1000)
    })
  })
})
