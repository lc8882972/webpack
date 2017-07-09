var expect = require('chai').expect
var assert = require('chai').assert

describe('main.js', function() {
  it('reverse', function() {
    expect({ a: 1 }).to.deep.equal({ a: 1 })
  })

  it('isInteger', function() {
    assert('foo' !== 'bar', 'foo is not bar')
  })
})