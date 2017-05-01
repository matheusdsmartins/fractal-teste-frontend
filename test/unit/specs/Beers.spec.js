import Vue from 'vue'
import Beers from '@/components/Beers'

describe('Beers.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Beers)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.test').textContent)
      .to.equal('Oi')
  })
})
