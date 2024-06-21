const basetUrl='http://localhost:3030'

const user={
    userName:"",
    email:"",
    password:"123456",
    gender:"male"
} 

QUnit.module("User functionalities", ()=> {
    QUnit.test("user registration returns correct user data", async(assert)=>{
          let path='/users/register'
          let random=Math.floor(Math.random()*1000)
          let randomEmail=`abv${random}@abv.bg`
          let randomUserName=``    

    })
})