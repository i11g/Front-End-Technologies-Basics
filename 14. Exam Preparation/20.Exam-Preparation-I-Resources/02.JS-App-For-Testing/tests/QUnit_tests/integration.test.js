const basetUrl='http://localhost:3030'

const user={
    userName:"",
    email:"",
    password:"123456",
    gender:"male"
} 

let token=""

QUnit.module("User functionalities", ()=> {
    QUnit.test("user registration returns correct user data", async(assert)=>{
          let path='/users/register'
          let random=Math.floor(Math.random()*1000)
          let randomEmail=`abv${random}@abv.bg`
          let randomUserName=`Auto_Test_User_${random}` 
          
          
          user.email=randomEmail;
          user.userName=randomUserName
          
          let response=await fetch(basetUrl+path, {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
          }) 

          let userData= await response.json();
                    console.log(response) 

          

    })
})