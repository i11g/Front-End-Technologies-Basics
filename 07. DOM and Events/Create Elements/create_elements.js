const movieElements=document.getElementById('movie-list')

const movieItem=document.createElement('li')

movieItem.textContent='Man'

movieElements.appendChild(movieItem) 

//Create movie element with a link 

const moviewithAtag=document.createElement('a')

moviewithAtag.href='https://movie'
moviewithAtag.textContent='The matrix'
moviewithAtag.target='_blank'  

const movieList=document.createElement('li')

movieList.appendChild(moviewithAtag)

movieElements.appendChild(movieList)
