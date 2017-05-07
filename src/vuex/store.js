import Vue from 'vue'
import Vuex from 'vuex'
import { req } from '@/utils/api'

Vue.use(Vuex)

const state = {
  beers: [],
  totalItems: 234,
  perPage: 25
}

const mutations = {
  SET_BEERS (state, value) {
    state.beers = value
  },
  SET_PERPAGE (state, value) {
    state.perPage = value
  },
  SET_TOTALITEMS (state, value) {
    state.totalItems = value
  }
}

const actions = {
  fetchBeers ({ commit }, path) {
    return new Promise((resolve, reject) => {
      req(path).then((response) => {
        commit('SET_BEERS', response.data)
        resolve()
      })
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
