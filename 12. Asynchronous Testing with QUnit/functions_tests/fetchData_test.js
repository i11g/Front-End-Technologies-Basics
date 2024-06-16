const {fetchData}= require('../async_test_functions.js') 

QUnit.module("testing fetchData function", ()=> {
    QUnit.test("fetchData witj correct url", async function(assert) {
        const data= await etch('https://www.zippopotam.us/bg/8000') 

        assert.ok(data.hasOwnProperty('post code'), 'Cheking for specific property')
        assert.ok(data['post code'], '8000', 'the value of first property')
    })
})