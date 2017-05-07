import Vue from 'vue'
import Router from 'vue-router'
import Beers from '@/components/Beers'
import Beer from '@/components/Beer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Beers',
      component: Beers
    },
    {
      path: '/:id',
      name: 'Beer',
      component: Beer
    },
    {
      path: '/page/:paged',
      name: 'BeersPage',
      component: Beers
    }
  ]
})
