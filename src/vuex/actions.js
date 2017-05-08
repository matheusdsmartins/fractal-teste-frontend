import { req } from '@/utils/api'

export const actions = {
  fetchBeers ({ commit }, path) {
    return new Promise((resolve, reject) => {
      req(path).then((response) => {
        commit('SET_BEERS', response.data)
        resolve()
      })
    })
  }
}
