function promiseWithMultipleHandlers() {
    let promise=new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log ("Hello World");
            console.log ("Hello World");
        }, 2000);
    })
    promise.then(function(result){
        console.log(result);
    })
}