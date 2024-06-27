window.addEventListener('DOMContentLoaded', solve);

function solve() {  

    let snowElement=document.querySelector('#snowman-name')
    console.log(snowElement)
    let heightElement=document.getElementById("snowman-height") 
    let locationElement=document.getElementById("location") 
    let creatorElement=document.getElementById("creator-name") 
    let specialAttributeElement=document.getElementById("special-attribute") 

    let btnAddElement=document.querySelector('[type="submit"]')
    let snowManPreviewElement=document.querySelector('.snowman-preview')
    let yourSnowManElement=document.querySelector('.snow-list') 

    let mainElement=document.getElementById("hero")
    let bodyElement=document.querySelector('.body')
    let backImageEelement=document.getElementById("back-img") 

    btnAddElement.addEventListener('click', nextOn) 

    function nextOn(e) {
        e.preventDefault() 

        if( snowElement.value ==""||
            heightElement.value==""||
            locationElement.value==""||
            creatorElement.value==""||
            specialAttributeElement.value==""
        ) {
            return;
        }   

            let liElement=document.createElement('li')
            liElement.setAttribute('class', 'snowman-info') 

            let btnContainer=document.createElement('div')
            btnContainer.setAttribute('class', 'btn-container')
            
            let articleElement=document.createElement('article')

            let nameParagraphElement=document.createElement('p')
            nameParagraphElement.textContent=`Name: ${snowElement.value}`
            
            let heightParagraph=document.createElement('p')
            heightParagraph.textContent=`Height: ${heightElement.value}` 

            let locationParagraphElement=document.createElement('p')
            locationParagraphElement.textContent=`Location: ${locationElement.value}`

            let creatorParagraphElement=document.createElement('p')
            creatorParagraphElement.textContent=`Creator: ${creatorElement.value}`

            let specialAtributeParagraph=document.createElement('p')
            specialAtributeParagraph.textContent=`Attribute: ${specialAttributeElement.value}` 

            let editBtnElement=document.createElement('button')
            editBtnElement.setAttribute('class', 'edit-btn')
            editBtnElement.textContent="Edit" 

            let nextBtnElement=document.createElement('button')
            nextBtnElement.setAttribute('class', 'next-btn')
            nextBtnElement.textContent="Next" 

        articleElement.appendChild(nameParagraphElement)
        articleElement.appendChild(heightParagraph)
        articleElement.appendChild(locationParagraphElement)
        articleElement.appendChild(creatorParagraphElement)
        articleElement.appendChild(specialAtributeParagraph) 

        liElement.appendChild(articleElement)
        btnContainer.appendChild(editBtnElement)
        btnContainer.appendChild(nextBtnElement)
        
        liElement.appendChild(articleElement)
        liElement.appendChild(btnContainer)

        snowManPreviewElement.appendChild(liElement)

        btnAddElement.disabled=true  

        let editName=snowElement.value;  
        let editHeigh=heightElement.value
        let editLocation=locationElement.value
        let editCreator=creatorElement.value
        let editSpecialAttribute=specialAttributeElement.value 

        snowElement.value="";  
        heightElement.value=""
        locationElement.value=""
        creatorElement.value=""
        specialAttributeElement.value="" 
        
        editBtnElement.addEventListener('click', editOn)
        function editOn() {
            snowElement.value=editName;  
            heightElement.value=editHeigh
            locationElement.value=editLocation
            creatorElement.value=editCreator
            specialAttributeElement.value=editSpecialAttribute
            
            btnAddElement.disabled=false 

            liElement.remove()
        } 

        nextBtnElement.addEventListener('click', nextOn) 
        function nextOn() {
             let nextLielement=document.createElement('li')
             nextLielement.setAttribute('class', 'snowman-content') 
             
             let sendArticle=document.createElement('article') 
             sendArticle=articleElement

             let sendBtnElement=document.createElement('button')
             sendBtnElement.setAttribute('class', 'send-btn')
             sendBtnElement.textContent="Send" 
             
             sendArticle.appendChild(sendBtnElement) 
             nextLielement.appendChild(sendArticle)
             yourSnowManElement.appendChild(nextLielement)
             
             liElement.remove() 

             sendBtnElement.addEventListener('click', sendOn) 
             
             function sendOn(){
                mainElement.remove()   
                let backBtnElement=document.createElement('button')
                  backBtnElement.setAttribute('class', 'back-btn')
                  backBtnElement.textContent="Back" 

                   
                  backImageEelement.hidden=false
                  bodyElement.appendChild(backBtnElement) 
                  
                  backBtnElement.addEventListener('click', backOn)
                  function backOn() {
                      window.location.reload()
                  }
             }
        }
    }
} 

