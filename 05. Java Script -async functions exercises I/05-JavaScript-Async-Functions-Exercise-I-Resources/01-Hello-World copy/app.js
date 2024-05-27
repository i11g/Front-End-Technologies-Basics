function helloWorldWithPromise() {
    console.log('Hello');

    let promise=new Promise(function(resolve,reject) {
        setTimeout(function(){
            resolve ("World");
        }, 2000)
    })

    promise.then(function(result) {
        console.log(result);
    })
}