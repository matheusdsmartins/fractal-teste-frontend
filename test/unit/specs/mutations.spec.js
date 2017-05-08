import { mutations } from '@/vuex/mutations'

const { SET_BEERS, SET_PERPAGE, SET_TOTALITEMS } = mutations

describe('Vuex mutations', () => {
  it('SET_BEERS should change state.beers', () => {
    // mock state
    const state = { beers: [] }
    // mock api
    const response = {
      'id': '1',
      'name': 'Teste',
      'tagline': 'Teste Tagline'
    }
    SET_BEERS(state, response)
    expect(state.beers).to.equal(response)
  })
  it('SET_PERPAGE should change state.perPage', () => {
    // mock state
    const state = { perPage: 25 }
    // new value
    const newValue = 50
    SET_PERPAGE(state, newValue)
    expect(state.perPage).to.equal(50)
  })
  it('SET_TOTALITEMS should change state.totalItems', () => {
    // mock state
    const state = { totalItems: 200 }
    // new value
    const newValue = 100
    SET_TOTALITEMS(state, newValue)
    expect(state.totalItems).to.equal(100)
  })
})
