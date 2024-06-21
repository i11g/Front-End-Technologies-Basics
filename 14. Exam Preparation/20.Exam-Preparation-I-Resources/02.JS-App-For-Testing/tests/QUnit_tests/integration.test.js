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

    QUnit.test("Login testing returns correct user data", async (assert)=>{
         let path='/users/login'

         let response= await fetch(basetUrl+path+{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user) 
         }) 

         assert.ok(response.ok, 'response is succesfull')
         
         let userData1=await response.json(); 

         console.log(userData1)

         assert.ok(userData1.hasOwnProperty('email'), 'email exists')
         assert.equal(userData1['email'], user.email, 'expected email')
         assert.strictEqual(typeof userData1.email, 'string', 'Property "email" is a string') 
         
         assert.ok(userData1.hasOwnProperty('password'), 'password exists')
         assert.equal(userData1['password'], user.password, 'expected password')
         assert.strictEqual(typeof userData1.password, 'string', 'Property "password" is a string')
         
         assert.ok(userData1.hasOwnProperty('accessToken'), "accessToken exist");
        assert.strictEqual(typeof userData1.accessToken, 'string', 'Property "accessToken" is a string');

        assert.ok(userData1.hasOwnProperty('_id'), "id exist");
        assert.strictEqual(typeof userData1._id, 'string', 'Property "_id" is a string');

         userId=userData1['_id']
         token=userData1['accessToken']
         sessionStorage.setItem('meme-user', JSON.stringify(user))         
    })
})

QUnit.modulle("Meme functionality", ()=>{
    QUnit.test('Get all memes return correct data', async(assert)=>{
          let path='/data/meme'
          let queryParam='?sortBy=_createdOn%20desc'

          let promis=await fetch(basetUrl+path+queryParam) 

          assert.ok(response.ok, 'response is succsesfyll')

          let jsonMeme=await response.json();

          assert.ok(Array.isArray(jsonMeme),'response ia an Array') 

          jsonMeme.forEach(element => { 
               assert.ok()   
            
          });
    })
})