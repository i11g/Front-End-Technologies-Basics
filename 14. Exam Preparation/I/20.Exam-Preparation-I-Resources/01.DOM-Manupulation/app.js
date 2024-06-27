window.addEventListener("load", solve);

function solve() {  

    let snowManNameElement=document.getElementById('#snowman-name')
    let heightElement=document.getElementById('#snowman-height') 
    let locationElement=document.getElementById('#location') 
    let creatorElement=document.getElementById('#creator-name') 
    let specialAttributeElement=document.getElementById('#special-attribute') 

    let btnAddElement=document.querySelector('[type="submit"]')
    let snowManPreviewElement=document.querySelector('."snowman-preview"')
    let yourSnowManElement=document.querySelector('.snow-list') 

    let mainElement=documnet.getElementById('#hero')
    let bodyElement=document.querySelector('.body')
    let backImageEelement=document.getElementById('#back-img') 

    btnAddElement.addEventListener('click', nextOn) 

    function nextOn(event) {
        event.preventDefault() 

        if(snowManNameElement.value==""||
            heightElement.value==""||
            locationElement.value==""||
            creatorElement.value==""||
            specialAttributeElement==""
        )
        return
    }   

    let liElement=document.createElement('li')
    liElement.setAttribute('class', 'snowman-info')
    
    let articleelement=document.createElement('article')
    let nameParagraphElement=document.createElement('p')
    nameParagraphElement.textContent=snowManNameElement.value
    
    let heightParagraph=document.createElement('p')
    heightParagraph.textContent=heightElement.value

}
