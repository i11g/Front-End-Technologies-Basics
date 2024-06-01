function create(words) {
    let divContent=document.getElementById("content") 

    for (let i = 0; i < words.length; i++) {
        
        let elementDiv=document.createElement("div")
        let elementParagraph=document.createElement('p')
        elementParagraph.textContent=words[i]
        elementParagraph.style.display='none' 

        elementDiv.appendChild(elementParagraph)
        divContent.appendChild(elementDiv)

        elementDiv.addEventListener('click', function() {
            elementParagraph.style.display=''
        })

    }
}