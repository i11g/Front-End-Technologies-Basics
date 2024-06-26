const baseURL='http://localhost:3030' 

const user= {
    email:"",
    password: "123456"
} 


let token=""
let userId=""

QUnit.config.reorder=false 

QUnit.module("User functionallity", ()=> {
    QUnit.test("registration testing", async (assert)=>{
        //arrange 
        let path='/users/register' 

         let random=Math.floor(Math.random()*1000) 
         let randomEmail=`abv${random}@abv.bg`

         user.email=randomEmail 

         //act
         let response=await fetch(baseURL+path, {
            method:"POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
         }) 
         let userdata=await response.json()

         //assert
         assert.ok(response.ok, 'response is successfull')
         console.log(userdata) 

         assert.ok(userdata.hasOwnProperty('email'), 'email exists')
         assert.equal(userdata['email'], user.email, 'email is as expected')
         assert.strictEqual(typeof userdata.email, 'string', 'Property email is a string') 

         assert.ok(userdata.hasOwnProperty('password'), 'password exists')
         assert.equal(userdata['password'], user.password, 'password is as expected')
         assert.strictEqual(typeof userdata.password, 'string', 'Property password is a string') 

         assert.ok(userdata.hasOwnProperty('_createdOn'), '_createdOn exists')         
         assert.strictEqual(typeof userdata._createdOn, 'number', 'Property _createdOn is a number') 

         assert.ok(userdata.hasOwnProperty('_id'), '_id exists')         
         assert.strictEqual(typeof userdata._id, 'string', 'Property _id is a string') 

         assert.ok(userdata.hasOwnProperty('accessToken'), 'accessToken exists')         
         assert.strictEqual(typeof userdata.accessToken, 'string', 'Property accessToken is a string') 
        
         token=userdata['accessToken']
         userId=userdata['-id']
         sessionStorage.setItem('books-user', JSON.stringify())
    })
    QUnit.test('login registration tesitn', async(assert)=>{
        //arrange 
        let path='/users/login'
        //act
        let response=await fetch(baseURL+path, {
            method: 'POST',
            headers: {
                
            }
        })
    })
})