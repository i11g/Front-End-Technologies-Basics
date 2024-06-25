const baseURL='http://localhost:3030'

const user={
    email:"",
    password:"123456"
} 

let token=""
let userId=""
QUnit.config.rearange=false 

QUnit.module("User functionallity", ()=>{
    QUnit.test("registration", async (assert)=>{
       //arrange
        let path = '/users/register' 

        let random=Math.floor(Math.random()*1000) 
        let randomEmail=`abv${random}@abv.bg`
        user.email=randomEmail 
     //act
        let response= await fetch(baseURL+ path, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }) 

        let jsonData= await response.json() 
        
        console.log(jsonData) 
        //assert              
        assert.ok(response.ok) 

        assert.ok(jsonData.hasOwnProperty('email'), 'email exists')
        assert.equal(jsonData['email'], user.email, 'expected email')
        assert.strictEqual(typeof jsonData.email, 'string', 'Property email is a string') 

        assert.ok(jsonData.hasOwnProperty('password'), 'password exists')
        assert.equal(jsonData['password'], user.password, 'password exists')
        assert.strictEqual(typeof jsonData.password, 'string', 'Property password is a string')

        assert.ok(jsonData.hasOwnProperty('_createdOn'), '_createdOn exists')
        assert.strictEqual(typeof jsonData._createdOn, 'number', 'Property _createdOn is a number') 

        assert.ok(jsonData.hasOwnProperty('_id'), '_id exists')
        assert.strictEqual(typeof jsonData._id, 'string', 'Property _id is a string') 

        userId=jsonData['_id']

        assert.ok(jsonData.hasOwnProperty('accessToken'), 'accessToken exists')
        assert.strictEqual(typeof jsonData.accessToken, 'string', 'Property accessToken is a string')

        token=jsonData['accessToken']

        sessionStorage.setItem('event-user', JSON.stringify(user))
    })
    QUnit.test("user login", async(assert)=> {
        //arrange
        let path='/users/login'
        
        //act 
        let reponse = await fetch(baseURL+path, {
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })

        //assert
        assert.ok(reponse.ok, 'response is successfull') 

        let data=await reponse.json();

        assert.ok(data.hasOwnProperty('email'), 'email.exists')
        assert.equal(data['email'], user.email, 'expected email')
        assert.strictEqual(typeof data.email, 'string', 'Property email is a string') 

        assert.ok(data.hasOwnProperty('password'), 'password exists')
        assert.equal(data['password'], user.password, 'expected password')
        assert.strictEqual(typeof data.password, 'string', 'Property password is a string')

        assert.ok(data.hasOwnProperty('_id'), '_id exists')
        assert.strictEqual(typeof data._id, 'string', 'Property _id is a string')

        assert.ok(data.hasOwnProperty('accessToken'), 'accessToken exists')
        assert.strictEqual(typeof data.accessToken, 'string', 'Property accessToken is a string ') 

        token=data['accessToken']
        userId=data['_id']

        sessionStorage.getItem('event-user', JSON.stringify(user))
    })
})