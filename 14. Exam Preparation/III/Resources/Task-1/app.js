window.addEventListener('load', solve);

function solve() {
       
       let timeElement=document.getElementById('time')
       let dateElement=document.getElementById('date')
       let placeElement=document.getElementById('place')
       let eventElement=document.getElementById('event-name') 
       let contactsElement=document.getElementById('email')

       let addBtn=document.getElementById('add-btn')

       let upcomingListElement=document.getElementById('upcoming-list')
       let lastCheckElement=document.getElementById('check-list')
       let finishedListElement=document.getElementById('finished-list') 

       let clearBth=document.getElementById('clear') 

       addBtn.addEventListener('click', nextOn) 

       function nextOn() {
        if(timeElement.value==""||
            dateElement.value==""||
            placeElement.value==""||
            eventElement.value==""||
            contactsElement.value==""
        ) {
            return
        } 
           
          let liAddElement=document.createElement('li')
          liAddElement.setAttribute('class','event-content') 

          let addArticleElement=document.createElement('article')

          let timeParagraph=document.createElement('p')
          timeParagraph.textContent=timeElement.value 

          let dateParagraph=document.createElement('p')
          dateParagraph.textContent=dateElement.value

          let placeParagraph=document.createElement('p')
          placeParagraph.textContent=placeElement.value 

          let eventParagraph=document.createElement('p')
          eventParagraph.textContent=eventElement.value 

          let contactParagraph=document.createElement('p')
          contactParagraph.textContent=contactsElement.value 

          let editBtnElement=document.createElement('button')
          editBtnElement.setAttribute('class', 'edit-btn')
          editBtnElement.textContent='Edit' 

          let continueBtnElement=document.createElement('button')
          continueBtnElement.setAttribute('class', 'continue-btn')
          continueBtnElement.textContent='Continue' 

          addArticleElement.appendChild(timeParagraph)
          addArticleElement.appendChild(dateParagraph)
          addArticleElement.appendChild(placeParagraph)
          addArticleElement.appendChild(eventParagraph)
          addArticleElement.appendChild(contactParagraph)

          liAddElement.appendChild(addArticleElement)
          liAddElement.appendChild(editBtnElement)
          liAddElement.appendChild(continueBtnElement) 

          upcomingListElement.appendChild(liAddElement) 

       }
}


    
    
