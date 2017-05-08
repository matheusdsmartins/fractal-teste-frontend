import Vue from 'vue'
import Vuex from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'

Vue.use(Vuex)

const state = {
  beers: [],
  totalItems: 234,
  perPage: 25
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
