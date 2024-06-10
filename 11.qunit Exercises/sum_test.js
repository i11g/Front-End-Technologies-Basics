const {sum} =require("./tests_functions.js") 

QUnit.module("sum functions tests", ()=> {
    QUnit.test("Adding two positive numbers", function(assert) {
        assert.equal(sum(2,3), 5, "Adding two positive numbers")
    })
})