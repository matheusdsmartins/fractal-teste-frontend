import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const req = function (path = '') {
  return axios.get(`https://api.punkapi.com/v2/beers${path}`)
}

Vue.use(Vuex)

const state = {
  beers: [],
  perPage: 25
}

const mutations = {
  SET_BEERS (state, value) {
    state.beers = value
  },
  SET_PERPAGE (state, value) {
    state.perPage = value
  }
}

const actions = {
  fetchBeers ({ commit }, perPage) {
    return new Promise((resolve, reject) => {
      req(`?per_page=${perPage}`).then((response) => {
        commit('SET_BEERS', response.data)
        resolve()
      })
    })
  },
  fetchBeersPaged ({ commit }, [page, perPage]) {
    return new Promise((resolve, reject) => {
      req(`?page=${page}&per_page=${perPage}`).then((response) => {
        commit('SET_BEERS', response.data)
        resolve()
      })
    })
  },
  fetchBeer ({ commit }, id) {
    req(`/${id}`).then((response) => {
      commit('SET_BEERS', response.data)
    })
  },
  fetchBeersSearch ({ commit }, [needle, perPage]) {
    return new Promise((resolve, reject) => {
      req(`?beer_name=${needle}&per_page=${perPage}`).then((response) => {
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
