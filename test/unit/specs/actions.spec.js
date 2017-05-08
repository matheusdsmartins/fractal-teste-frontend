import { actions } from '@/vuex/actions'
import moxios from 'moxios'

/**
 * Helper for testing Actions
 * @param  {[type]}   action            [description]
 * @param  {[type]}   arg               [description]
 * @param  {[type]}   state             [description]
 * @param  {[type]}   expectedMutations [description]
 * @param  {Function} done              [description]
 * @return {[type]}                     [description]
 */
const testAction = (action, args, state, expectedMutations, done) => {
  let count = 0

  // Mock Commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[0]
    expect(mutation.type).to.equal(type)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++

    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, ...args).then(() => {
    // check if no mutations should have been dispatched
    if (expectedMutations.length === 0) {
      expect(count).to.equal(0)
      done()
    }
  })
}

describe('Vuex actions', () => {
  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install()
  })

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })
  it('fetchBeers', (done) => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: [
          { id: 1, name: 'Test', tagline: 'Test Tagline' }
        ]
      }).then(() => {
        done()
      })
    })
    const state = { beers: [] }
    testAction(actions.fetchBeers, '/', state, [
      { type: 'SET_BEERS' }
    ], done)
  })
})
