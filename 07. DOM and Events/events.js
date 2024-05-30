//add eventListener

// let button=document.getElementById("newbutton")

// button.addEventListener("click", function (event) {
//     console.log("newEvent")
// })

//add and remove eventListener 

// let button=document.getElementById("newbutton")

// button.addEventListener("click", showAlert) 

// function showAlert() {
//     alert("It's me")
// }

// setTimeout(function(){
//   button.removeEventListener("click", showAlert)
// }, 5000)

//mouse over event 

let button=document.getElementById("newbutton") 
button.addEventListener("mouseover", function(event){
    button.style.background="red"
})

button.addEventListener("mouseout", function(event){
    button.style.background="blue"
}) 
