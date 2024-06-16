const {fetchData}= require('../async_test_functions.js') 

QUnit.module("testing fetchData function", ()=> {
    QUnit.test("fetchData with correct url", async function(assert) {
        const data= await fetchData('https://www.zippopotam.us/bg/8000') 

        console.log(data)

        assert.ok(data.hasOwnProperty('post code'), 'Cheking for specific property')
        assert.equal(data['post code'], '8000', 'the value of first property')
    })
})