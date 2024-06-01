const movieList=document.getElementById("movie-list") 

//create new element
let moviItem=document.createElement("li")
moviItem.textContent="Man of Steel" 

//add the element with delay
setTimeout(function(){
    movieList.appendChild(moviItem)
}, 5000)