const baseUrl="http://localhost:3030"

const user={
    email:"",
    password:"123456"
} 

const event={
    author:"Random Author",
    date:"24.06.2024",
    title:"",
    description:"",
    imageUrl:"/images/2.png"
}

let token=""
let userId="" 
let lastCreatedeventId=""

QUnit.config.reorder=false 

QUnit.module("User functionality", ()=> {
    QUnit.test('testing user registration ', async(assert)=>{
        //arrange   
        let path='/users/register'
           let random=Math.floor(Math.random()*1000) 
           let randomEmail=`abv${random}@abv.bg`
           user.email=randomEmail
           //act

           let response=await fetch(baseUrl+path, {
            method:"POST",
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(user)
           })

           let userData=await response.json()
           assert.ok(response.ok, 'response is successfull')
           console.log(userData)
           assert.ok(userData.hasOwnProperty('email'), 'email exists')
           assert.equal(userData['email'], user.email, 'expected email')
           assert.strictEqual(typeof userData.email, 'string', "property email is a string")

           assert.ok(userData.hasOwnProperty('password'), 'password exists')
           assert.equal(userData['password'], user.password, 'expected password')
           assert.strictEqual(typeof userData.password, 'string', "property password is a string")

           assert.ok(userData.hasOwnProperty('accessToken'), 'accessToken exists')
           assert.strictEqual(typeof userData.accessToken, 'string', "property accessToken is a string")

           assert.ok(userData.hasOwnProperty('_createdOn'), '_createdOn exists')
           assert.strictEqual(typeof userData._createdOn, 'number', "property _createdOn is a number")

           assert.ok(userData.hasOwnProperty('_id'), '_id exists')
           assert.strictEqual(typeof userData._id, 'string', "property _id is a string") 

           token=userData['accessToken']
           userid=userData['_id']
           sessionStorage.setItem("event-user", JSON.stringify(user)) 

    })
    QUnit.test('login testing', async(assert)=>{
        //arrange
        let path='/users/login'
        //act
        let response=await fetch(baseUrl+path, {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })

        let userData=await response.json()
        assert.ok(response.ok, 'response is successfull') 

        assert.ok(userData.hasOwnProperty('email'), 'email exists')
           assert.equal(userData['email'], user.email, 'expected email')
           assert.strictEqual(typeof userData.email, 'string', "property email is a string")

           assert.ok(userData.hasOwnProperty('password'), 'password exists')
           assert.equal(userData['password'], user.password, 'expected password')
           assert.strictEqual(typeof userData.password, 'string', "property password is a string")

           assert.ok(userData.hasOwnProperty('accessToken'), 'accessToken exists')
           assert.strictEqual(typeof userData.accessToken, 'string', "property accessToken is a string")

           assert.ok(userData.hasOwnProperty('_createdOn'), '_createdOn exists')
           assert.strictEqual(typeof userData._createdOn, 'number', "property _createdOn is a number")

           assert.ok(userData.hasOwnProperty('_id'), '_id exists')
           assert.strictEqual(typeof userData._id, 'string', "property _id is a string") 

           token=userData['accessToken']
           userid=userData['_id']
           sessionStorage.setItem("event-user", JSON.stringify(user)) 
    })
})
QUnit.module("Event functionality", ()=>{
    QUnit.test('get all events testing', async(assert)=>{
        //arrange
        let path='/data/theaters'
        let queryParams = '?sortBy=_createdOn%20desc&distinct=title';
        //act
        let response=await fetch(baseUrl+path+queryParams)

        let gamesData=await response.json()
       
        assert.ok(response.ok, 'response is successfull')
        
        console.log(gamesData)

        assert.ok(Array.isArray(gamesData), 'gamesData is  an array')
        
        gamesData.forEach(theater => {
            

        assert.ok(theater.hasOwnProperty('title'), 'title exists')
        assert.strictEqual(typeof theater.title,'string', 'Property title is a string')

        assert.ok(theater.hasOwnProperty('_id'), '_id exists')
        assert.strictEqual(typeof theater._id, 'string', 'Property _id is  string')
        });
        
        
    })
    QUnit.test('create event testing', async(assert)=>{
        //arrange   
           let path='/data/theaters'
           let random=Math.floor(Math.random()*1000) 

           user.title=`random_title_${random}`
           user.description=`random_description_${random}`
           //act
           let response =await fetch(baseUrl+path, {
               method:"POST",
               headers: {
              'content-type' : 'application/json',
              'X-Authorization' : token
               },
               body: JSON.stringify(user) 
           }) 

           let createData=await response.json()
           assert.ok(response.ok, 'response is successfull') 
           console.log(createData) 

           assert.ok(createData.hasOwnProperty('_id'), '_id exists')
           assert.strictEqual(typeof createData._id, 'string', 'Property _id is a string' )

           lastCreatedeventId=createData['_id']


    })
    QUnit.test('edit event testing', async(assert)=>{
        //arrange 
        let path='/data/theaters'
        //act
        let response = await fetch(baseUrl+path+`/${lastCreatedeventId}`, {
            method:'PUT',
            headers:{
                'content-type' : 'application/json',
              'X-Authorization' : token
               },
               body: JSON.stringify(user) 
            })       
          
            let editData=await response.json()
            assert.ok(response.ok, 'response is successfull')
    })
    QUnit.test('delete event testing', async(assert)=>{
        //arrange  
        let path='/data/theaters'
        let response=await fetch(baseUrl+path+`/${lastCreatedeventId}`, {
            method:"DELETE",
            headers:{
                'X-Authorization' : token
            }            
           
        })
        assert.ok(response.ok, 'response is successfull')

    })
})