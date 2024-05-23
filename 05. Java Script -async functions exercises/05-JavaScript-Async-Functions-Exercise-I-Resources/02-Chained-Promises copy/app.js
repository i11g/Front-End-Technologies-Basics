function wait(ms) {

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        }, ms)
    })
}

function chainedPromisesWithPromis() {
    console.log("Start")
    wait(1000) 
    .then(function(){
        console.log("1");
        return wait(1000)
    })
    .then(function() {
        console.log("2")
        return wait (1000)
    })
    .then(function() {
        console.log("3")
    }) 
}