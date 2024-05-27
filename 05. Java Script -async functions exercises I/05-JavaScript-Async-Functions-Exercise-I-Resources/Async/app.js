async function helloWolrdAsunc() {
    console.log("Hello");

    let promise=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("World")
        }, 5000)
    })

    let result= await promise;
    console.log(result);
}

