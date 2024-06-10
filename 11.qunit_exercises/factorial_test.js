const {factorial} = require("./tests_functions") 

QUnit.module("factorial function tests", ()=> {
    QUnit.test("When the parameter is 15 return 120", function(assert) {
        assert.equal(factorial(5),120, "When the parameter is 15 return 120")
    })
    QUnit.test("When the parameter is 0 returns 1", function(assert) {
        assert.equal(factorial(0),1, "When the parameter is 0 returns 1" )
    })
    QUnit.test("When parameter is -1 returns 1", function(assert) {
        assert.equal(factorial(-1), 1, "When parameter is -1 returns 1")
    })
} )