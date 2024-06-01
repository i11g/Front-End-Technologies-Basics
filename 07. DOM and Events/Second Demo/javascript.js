const movieList=document.getElementById("movie-list") 

let moviItem=document.createElement("li")
moviItem.textContent="Man of Steel" 

setTimeout(function(){
    movieList.appendChild(moviItem)
}, 5000)