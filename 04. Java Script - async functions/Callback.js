function running() {
    return "Stopping";
    }    
    
function category(run, type) {
    console.log(run() + " " + type);
    }

category(running, "sprint");