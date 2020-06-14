const assert = require('chai').assert
const sum = require('../app').sum

describe('Sum', function () {
  it('sum is a function', function () {
    let result = sum
    assert.isFunction(result)
  })
  it('sum([1, 2, 3]) should return a number', function () {
    let result = sum([])
    assert.typeOf(result, 'number')
  })
  it('sum([1, 2, 3]) should return 6', function () {
    let result = sum([1, 2, 3])
    assert.equal(result, 6)
  })
  it('sum([1, 5, 10]) should return 16', function () {
    let result = sum([1, 5, 10])
    assert.equal(result, 16)
  })
  it('sum([]) should return 0', function () {
    let result = sum([])
    assert.equal(result, 0)
  })
})
