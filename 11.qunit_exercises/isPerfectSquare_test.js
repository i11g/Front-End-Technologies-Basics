const {isPerfectSquare}=require ("./tests_functions.js") 

QUnit.module("testing of function is perfect square", ()=> {
    QUnit.test("parameter is 1", function(assert) {
        assert.equal(isPerfectSquare(1), true,"parameter is 1")
        // assert.ok(isPerfectSquare(1),"parameter is 1" )
    }) 
    QUnit.test("parameter is 4", function(assert) {
        assert.ok(isPerfectSquare(4), "paremert is 4")
    })
    QUnit.test("parameter is 9", function(assert) {
        assert.ok(isPerfectSquare(9), "parameter is 9")
    })
    QUnit.test("parameter is 16", function(assert){
        assert.ok(isPerfectSquare(16),"parameter is 16" )
    })
    QUnit.test("parameter is 2", function(assert){
        assert.notOk(isPerfectSquare(2), "parameter is 2")
    })
    QUnit.test("parameter is 15", function(assert){
        assert.notOk(isPerfectSquare(15), "parameter is 15")
    })
})