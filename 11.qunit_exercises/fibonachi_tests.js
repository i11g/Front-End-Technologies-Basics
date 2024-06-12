const {fibonachi}= require('./tests_functions.js') 

QUnit.module("f{ibonachi function tests", ()=> {
    QUnit.test("Returns an empty array when parameter is 0", function(assert){
        assert.deepEqual(fibonachi(0),[], "Parameter O")
    })
    QUnit.test("Returns an O when parameter is 1", function(assert){
        assert.deepEqual(fibonachi(1), [1], "Paramere is 1")
    })
    QUnit.test("Returned un array when 5 is a parameter", function(assert){
        assert.deepEqual(fibonachi(5), [0,1,1,2,3], "Parameter is 5")
    })
    QUnit.test("Returned and array when 10 is a parameter", function(assert) {
        assert.deepEqual(fibonachi(10),[0,1,1,2,3,5,8,13,21,34], "Parameter is 10")
    })
})