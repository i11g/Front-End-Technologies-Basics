const baseURL='http:/localhost:3000'

const user={
    email:"",
    password:"123456"
} 

QUnit.config.rearange=false 

QUnit.module("User functionallity", ()=>{
    QUnit.test("registration", async (assert)=>{
        let path='/users/register' 

        let random=Math.floor(Math.random()*1000) 
        let randomEmail=`abv${random}@abv.bg`
        user.email=randomEmail 

        let response=await fetch(baseURL+path, {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        }) 

        let json=response.json() 
        
        console.log(json)
        
        assert.ok(response.ok)
    })
})