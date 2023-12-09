import { findActiveItem } from './utils'

describe('test utils for accordion', () => {
  it('should return empty object literal', () => {
    const state = {}
    const name = 'abc'
    expect(findActiveItem(state, name)).toEqual(false)
  })
  it('should return the value of the name prop in the obj, which is either true/false', () => {
    const state = { abc: false }
    const name = 'abc'
    expect(findActiveItem(state, name)).toEqual(false)
  })
  it('should return the value of the name prop in the obj, which is either true/false', () => {
    const state = { abc: false }
    const name = 'abc'
    expect(findActiveItem(state, name)).toEqual(false)
  })
})

// {abc: true, abc1: false}
