const baseUrl='http://localhost:3030/'

const user={
    userName:"",
    email:"",
    password: "123456",
    gender:"male"
} 

const meme={
    title:"",
    description:"",
    imageUrl: "/iamges/2.png"
} 

let lasCreatedMemeId="";

let token= "";
let userId="";

QUnit.config.reorder=false;

QUnit.module("User functionalities", ()=> {
    QUnit.test("user registration returns correct user data", async(assert)=>{
          let path='users/register'
          let random=Math.floor(Math.random()*1000)
          let randomEmail=`abv${random}@abv.bg`
          let randomUserName=`Auto_Test_User_${random}` 
                    
          user.email=randomEmail;
          user.userName=randomUserName
          
          let response= await fetch(baseUrl+path, {
            method: "POST",
            headers: {
               'content-type':'application/json'
            },
            body: JSON.stringify(user)
          }) 

          assert.ok(response.ok, 'sucssesfull response')

          let userData = await response.json();
          
          
          assert.ok(userData.hasOwnProperty('email'), 'email exists')
          assert.equal(userData['email'], user.email, 'expected mail')
          assert.strictEqual(typeof userData.email, 'string', 'Prperty "email" is a string')

          assert.ok(userData.hasOwnProperty('gender'), 'gender exists')
          assert.equal(userData['gender'], user.gender, 'expected gender')
          assert.strictEqual(typeof userData.gender, 'string', 'Property "gender" is a string')

          assert.ok(userData.hasOwnProperty('password'), 'password exists')
          assert.equal(userData['password'], user.password, 'expected password')
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

          token=userData['accessToken'];
          userId=userData['_id']; 

          sessionStorage.setItem('meme-user', JSON.stringify(user));

    }) 

    QUnit.test("Login testing returns correct user data", async (assert)=>{
            
        let path ='users/login'

         let response= await fetch (baseUrl + path,  {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(user) 
         }) 

         assert.ok(response.ok, 'response is succesfull')
         
          let userData1=await response.json(); 
          

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

QUnit.module("Meme functionality", () => {
    QUnit.test('Get all memes return correct data', async(assert)=>{
          
          let path='data/memes'
          let queryParam='?sortBy=_createdOn%20desc'

          let response= await fetch (baseUrl + path + queryParam) 

          assert.ok(response.ok, 'response is succsesfyll')

          let jsonMeme= await response.json();

          assert.ok(Array.isArray(jsonMeme),'response ia an Array') 
          console.log(jsonMeme)

          jsonMeme.forEach (element => { 
               assert.ok(element.hasOwnProperty('description'), 'description exists')
               assert.strictEqual(typeof element.description, 'string', 'Description is a string')
               
               assert.ok(element.hasOwnProperty('imageUrl'), 'imageUrl exists')
               assert.strictEqual(typeof element.imageUrl, 'string', 'Property imageUrl is a string') 

               assert.ok(element.hasOwnProperty('title'), 'title exists')
               assert.strictEqual(typeof element.title, 'string', 'Property title is a string')

               assert.ok(element.hasOwnProperty('_createdOn'), '_createdOn exists')
               assert.strictEqual(typeof element._createdOn, 'number', 'Property _createdOn is a number')

               assert.ok(element.hasOwnProperty('_id'), '_id exists')
               assert.strictEqual(typeof element._id, 'string', 'Property _id is a string')

               assert.ok(element.hasOwnProperty('_ownerId'), '_ownerId exists')
               assert.strictEqual(typeof element._ownerId, 'string', 'property "_onerId is a string')            
            
           });
     })
     QUnit.test("Create meme returns correct data", async(assert)=>{
            let path='data/meme'
            let random=Math.floor(Math.random()*1000) 

            let randomTtitle=`random_title_${random}`
            let randomDescription=`random_description_${random}`

            meme.title=randomTtitle;
            meme.description=randomDescription

            let response=await fetch(baseUrl+path, {
                    method:'POST',
                    headers: {
                        'content-type':'application/json',
                        'X-Authorization': token
                    },
                    body: JSON.stringify(meme) 
                }) 

            assert.ok(response.ok, 'response is sucsesfull')
            let memeData=await response.json();
            console.log(memeData) 
            
            assert.ok(memeData.hasOwnProperty('description'), 'description exists')  
            assert.equal(memeData['description'], meme.description, 'description is correct')
            assert.strictEqual(typeof memeData.description, 'string', 'Property description is a string')
            
            assert.ok(memeData.hasOwnProperty('title'), 'title exists')
            assert.equal(memeData['title'], meme.title, 'expected title')
            assert.strictEqual(typeof memeData.title, 'string', 'Property "title is a string')

            assert.ok(memeData.hasOwnProperty('imageUrl'), 'imageUrl exists')
            assert.equal(memeData['imageUrl'], meme.imageUrl, 'expected imageUrl')
            assert.strictEqual(typeof memeData.imageUrl, 'string', 'Property "imageUrl" is a string')
            
            assert.ok(memeData.hasOwnProperty('_id'), '_id exists')
            assert.strictEqual(typeof memeData._id, 'string', 'Property _id is a string') 

            lasCreatedMemeId=memeData['_id']
     })

     QUnit.test('Edited meme returts correct data', async (assert) => {
            let path='data/meme' 

            let random=Math.floor(Math.random()*1000) 

            meme.title=`Edited title:${random}`
            
            let response= await fetch(baseUrl + path + `/${lasCreatedMemeId}`, {
                method: 'PUT',
                headers: {
                     'content-type':'application/json',
                     'X-Authorization':token
                },
                body: JSON.stringify(meme)
            }) 

            assert.ok(response.ok,'response is successful') 

            let editData=await response.json(); 

            assert.ok(editData.hasOwnProperty('title'), 'title exists')
            assert.equal(editData['title'], meme.title, 'expected title')
            assert.strictEqual(typeof editData.title, 'string', 'Property "title" is a string')

            assert.ok(editData.hasOwnProperty('description'), 'description exists')
            assert.equal(editData[description], meme.description, 'expected description')
            assert.strictEqual(typeof editData.description, 'string', 'Property "description" is a string')

            assert.ok(editData.hasOwnProperty('_id'), '_id exists')
            assert.equal(editData['_id'], meme._id, 'expected _id')
            assert.strictEqual(typeof editData._id, 'string', 'property "_id" is a string') 

            assert.ok(editData.hasOwnProperty('imageUrl'), 'imageUrl exists')
            assert.equal(editData['imageUrl'], meme.imageUrl, 'imageUrl is as expected')
            assert.strictEqual(typeof editData.imageUrl, 'string', 'Property imageUrl is a string')

     })

     QUnit.test("Delete returns correct data", async(assert)=>{
        let path='/data/meme'

        let response=await fetch(baseUrl+path+`/${lasCreatedMemeId}`, {
            method:'DELETE',
            headers: {
                'X-Authorization':token
            }
        }) 
        
        assert.ok(response.ok, 'response is successful')

     })

}) 
