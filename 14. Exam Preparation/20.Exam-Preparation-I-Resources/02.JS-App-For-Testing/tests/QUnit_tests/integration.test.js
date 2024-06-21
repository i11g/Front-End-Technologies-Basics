const basetUrl='http://localhost:3030'

const user={
    userName:"",
    email:"",
    password: "123456",
    gender:"male"
} 

let token= "";
let userId=""

QUnit.config.reorder=false;

QUnit.module("User functionalities", ()=> {
    QUnit.test("user registration returns correct user data", async(assert)=>{
          let path='/users/register'
          let random=Math.floor(Math.random()*1000)
          let randomEmail=`abv${random}@abv.bg`
          let randomUserName=`Auto_Test_User_${random}` 
                    
          user.email=randomEmail;
          user.userName=randomUserName
          
          let response= await fetch(basetUrl+path, {
            method: "POST",
            headers: {
               'content-type':'application/json'
            },
            body: JSON.stringify(user)
          }) 

          assert.ok(response.ok, 'sucssesfull response')

          let userData= await response.json();
          console.log(userData)
          
          assert.ok(userData.hasOwnProperty('email'), 'email exists')
          assert.equal(userData['email'], user.email, 'expected mail')
          assert.strictEqual(typeof userData.email, 'string', 'Prperty "email" is a string')

          assert.ok(userData.hasOwnProperty('gender'), 'gender exists')
          assert.equal(userData.gender, user.gender, 'expected gender')
          assert.strictEqual(typeof userData.gender, 'string', 'Property "gender" is a string')

          assert.ok(userData.hasOwnProperty('password'), 'password exists')
          assert.equal(userData.password, user.password, 'expected password')
          assert.strictEqual(typeof userData.password, 'string', 'Property "password is a string' )
          

          assert.ok(userData.hasOwnProperty('userName'), 'userName exists')
          assert.equal(userData['userName'], user.userName, 'expected username')
          assert.strictEqual(typeof userData.userName, 'string', 'Property "userName" is a string')

          assert.ok(userData.hasOwnProperty('_id'), '_id exists')
          assert.strictEqual(typeof userData._id, 'string', 'Property "_id" is a string')

          assert.ok(userData.hasOwnProperty('_createdOn'), '_createdOn exists')
          assert.strictEqual(typeof userData._createdOn, 'number', 'Property "createdOn is a number')

          assert.ok(userData.hasOwnProperty('accessToken'), 'accessToken exists')
          assert.strictEqual(typeof userData.accessToken, 'string', 'Property "accessToken is a string') 

          token=userData['accessToken']
          userId=userData['_id'] 

          sessionStorage.setItem('meme-user', JSON.stringify(user))

    })
})