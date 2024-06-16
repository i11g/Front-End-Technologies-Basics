async function fetchData(url) {
    let result= await fetch(url)
    .then(response=>{
            if(response.ok) {
                return response.json()
            }
        })     
    //.then(data=>data)
    .catch(error=>`${error.message}`)
     
    return result
} 

function fake_delays(miliseconds) {
     return new Promise(resolve=>setTimeout(resolve, miliseconds))
} 

module.exports={
    fetchData,
    fake_delays
}