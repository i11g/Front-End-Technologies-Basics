import { add } from "../function.js" 

QUnit.module("add") 

QUnit.test("add two number", function (assert) {
    assert.equal(add(1,2), 3)
})