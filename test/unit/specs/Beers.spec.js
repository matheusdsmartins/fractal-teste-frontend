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
    el: document.createElement('div'),
    router,
    store,
    render: h => h('router-view')
  })
}

describe('Beers.vue', () => {
  it('has a created hook', () => {
    expect(typeof Beers.created).to.be.equal('function')
  })
  it('should call getBeers when created', () => {
    let spy = sinon.spy(Beers.methods, 'getBeers')
    let vm = initComponent()
    vm.$nextTick(() => {
      spy.should.have.been.called
    })
  })
  it('should load 25 beers to $store.state.beers when first created', () => {
    let vm = initComponent()
    vm.$nextTick(() => {
      setTimeout(() => {
        expect(vm.$store.state.beers.length).to.equal(25)
      }, 1000)
    })
  })
})
