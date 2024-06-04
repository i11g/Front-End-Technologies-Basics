import { add, substract } from "../function.js" 

QUnit.module("Math operations", {
    beforeEach: function() {
        //execute function before tests 
    },
    afterEach: function () {
        //execute function before tests
    }
}, function () {
    QUnit.test("add two numbers", function(assert) {
        assert.equal(1,1),2, "one+one should equal two"
    })
    QUnit.test("substrct two numbers", function (assert) {
        assert.equal(2.1),1, "two-one shoule equal one"
    } )
} ) 

QUnit.test("add two number", function (assert) {
    assert.equal(add(1,2), 3)
})