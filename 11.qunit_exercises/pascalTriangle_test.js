const {pascalTrinagle} = require('./tests_functions.js') 

QUnit.module("Pascal Triangle function tests", ()=> {
    QUnit.test("parameter is zero", function(assert) {
        assert.deepEqual(pascalTrinagle(0),[],'parameter is zero')
    })
    QUnit.test("parameter is 1", function(assert) {
        assert.deepEqual(pascalTrinagle(1),[[1]],"parameter is 1" )
    })
    QUnit.test("parameter is 5", function(assert) {
        assert.deepEqual(pascalTrinagle(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]], "parameter is 5")
    })
    QUnit.test("parameter is 8", function(assert) {
        assert.deepEqual(pascalTrinagle(8), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1]], "parameter is 8" )
    })
})