const {sum} =require("./tests_functions.js") 

QUnit.module("sum functions tests", ()=> {
    QUnit.test("Adding two positive numbers", function(assert) {
        assert.equal(sum(2, 3), 5, "Adding two positive numbers")
    })
    QUnit.test("Adding two negative numbers", function(assert) {
        assert.equal(sum(-2,-3), -5, "Adding two negative numbers")
    })

    QUnit.test("Adding two floating point numbers", function (assert) {
        assert.equal(sum(0.3, 0.4), 0.7, "Adding two floating point numbers")
    })
    QUnit.test("Adding one positive and one negative number", function(assert) {
        assert.equal(sum(-3, 5), 2, "Adding one positive and one negative number")
    })
})