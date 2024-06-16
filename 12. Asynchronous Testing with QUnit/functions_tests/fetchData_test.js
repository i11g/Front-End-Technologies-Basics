const {fetchData}= require('../async_test_functions.js') 

QUnit.module("testing fetchData function", ()=> {
    QUnit.test("fetchData with correct url", async function(assert) {
        const data= await fetchData('https://www.zippopotam.us/bg/8000') 

        console.log(data)

        assert.ok(data.hasOwnProperty('post code'), 'Cheking for specific property')
        assert.equal(data['post code'], '8000', 'the value of first property')
        assert.ok(data.hasOwnProperty('country'), 'Cheking for specific property')
        assert.equal(data['country'], 'Bulgaria', 'the value of second property')
        assert.ok(data.hasOwnProperty('country abbreviation'), 'Cheking for specific property')
        assert.equal(data['country abbreviation'], 'BG', 'the value of second property') 

        assert.ok(Array.isArray(data.places), "places ia an array")
        assert.equal(data.places.length, 1, 'places array has one lement') 

        const placesData=data.places[0]

        assert.ok(placesData.hasOwnProperty('place name'), "placeData has property place name")
        assert.equal(placesData['place name'], 'Бургас / Burgas')
    })
})