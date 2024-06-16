const {nthPrime} = require("./tests_functions.js") 

QUnit.module("nthPrime function tests", function() {
    QUnit.test("1th Prime", function(assert){
        assert.equal (nthPrime(1), 2, "1th Prime" )
    }),
    QUnit.test("second parameter", function(assert) {
        assert.equal(nthPrime(5), 11,"second parameter" )
    })
    QUnit.test("third parameter", function(assert){
        assert.equal(nthPrime(11),31,"third parameter")
    })
})