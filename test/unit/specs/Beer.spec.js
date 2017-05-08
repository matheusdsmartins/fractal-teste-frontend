import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/vuex/store'
import BootstrapVue from 'bootstrap-vue'
import Beer from '@/components/Beer'
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
        path: '/:id',
        name: 'Beer',
        component: Beer
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

describe('Beer.vue', () => {
  let vm, el
  beforeEach(() => {
    el = document.createElement('div')
    vm = initComponent()
    vm.$router.push({ name: 'Beer', params: { id: '1' } })
  })
  afterEach(() => {
    vm.$destroy()
  })
  it('should call getBeer when created', (done) => {
    let spy = sinon.spy(Beer.methods, 'getBeer')
    vm.$mount(el)
    vm.$nextTick(() => {
      spy.should.have.been.called
      done()
    })
  })
  it('should load only 1 beer to $store.state.beers when first created', () => {
    vm.$mount(el)
    vm.$nextTick(() => {
      setTimeout(() => {
        expect(vm.$store.state.beers.length).to.equal(1)
      }, 1000)
    })
  })
})
