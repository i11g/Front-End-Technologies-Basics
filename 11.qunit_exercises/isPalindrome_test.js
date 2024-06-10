const {isPalindrom} = require("./tests_functions") 

QUnit.module("Test isPalindrome function", ()=> {
    QUnit.test("When parameter is racecar returns true", function(assert) {
        assert.ok(isPalindrom("racecar") ,"When parameter is racecar returns true")
    })
    QUnit.test("When parameter is A man, a plan, a canal, Panama! return true", function(assert) {
        assert.ok(isPalindrom("A man, a plan, a canal, Panama!"), "When parameter is A man, a plan, a canal, Panama! return true")
    } )
    QUnit.test("When parameter is hello returns false", function(assert) {
        assert.notOk(isPalindrom("hello"),"When parameter is hello returns false")
    })
    QUnit.test("When parameter is empty string returns false", function(assert) {
        assert.notOk(isPalindrom(""), "When parameter is empty string returns false")
    })
})