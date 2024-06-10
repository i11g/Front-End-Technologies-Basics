const {isEven} =require("./tests_functions.js") 

QUnit.module("is even function tests", ()=> {
    QUnit.test("When even is given return true", function(assert) {
        assert.ok(isEven(6), true, "When even is given return true")
    })
    QUnit.test("When odd number is given return false", function(assert) {
        assert.false(isEven(7), "When odd number is given return false")
    })
    QUnit.test("When zero is given returns true", function(assert) {
        assert.ok(isEven(0), true, "When zero is given returns true")
    })
    QUnit.test("When negative numbers are given retrun false", function(assert) {
        assert.notOk(isEven(-7), "When negative numbers are given retrun false")
    })
})
