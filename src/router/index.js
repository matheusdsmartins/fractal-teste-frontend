import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Beers from '@/components/Beers'
import Beer from '@/components/Beer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/beers',
      name: 'Beers',
      component: Beers
    },
    {
      path: '/beers/:id',
      name: 'Beer',
      component: Beer
    },
    {
      path: '/beers/page/:paged',
      name: 'BeersPage',
      component: Beers
    }
  ]
})
