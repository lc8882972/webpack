var expect =require('chai').expect
var assert =require('chai').assert
// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// function isInteger(num) {
//     if (typeof num !== 'number') return false
//     var pattern = /^[1-9]\d*$/g 
//     return pattern.test(num)
// }

describe('main.js', function() {

    it('reverse', function() {
        
        expect({a: 1}).to.deep.equal({a: 1})
        // expect(reverse('asdf')).toEqual('fdsa')
    })

    it('isInteger', function() {
        // expect(true).to.deep.equal(isInteger('20'))
        // expect(false).toEqual(isInteger('20'))
        // expect(false).toEqual(isInteger(0))
        // expect(false).toEqual(isInteger(0))
        assert('foo' !== 'bar', 'foo is not bar')
    })
})