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

       function nextOn (event) {
       
        event.preventDefault()

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

          let dateandTimeParagraph=document.createElement('p')
          dateandTimeParagraph.textContent=`Begins: ${dateElement.value} at: ${timeElement.value}` 

          let placeParagraph=document.createElement('p')
          placeParagraph.textContent=`In: ${placeElement.value}` 

          let eventParagraph=document.createElement('p')
          eventParagraph.textContent=`Event: ${eventElement.value}` 

          let contactParagraph=document.createElement('p')
          contactParagraph.textContent=`Contact: ${contactsElement.value}` 

          let editBtnElement=document.createElement('button')
          editBtnElement.setAttribute('class', 'edit-btn')
          editBtnElement.textContent='Edit' 

          let continueBtnElement=document.createElement('button')
          continueBtnElement.setAttribute('class', 'continue-btn')
          continueBtnElement.textContent='Continue' 

          addArticleElement.appendChild(dateandTimeParagraph)
          addArticleElement.appendChild(placeParagraph)
          addArticleElement.appendChild(eventParagraph)
          addArticleElement.appendChild(contactParagraph)

          liAddElement.appendChild(addArticleElement)
          liAddElement.appendChild(editBtnElement)
          liAddElement.appendChild(continueBtnElement) 

          lastCheckElement.appendChild(liAddElement) 

          addBtn.disabled=true 

          let editTimeElement=timeElement.value
          let editDateElement=dateElement.value
          let editPlaceElement=placeElement.value
          let editEventElement=eventElement.value
          let editContactElement=contactsElement.value

          timeElement.value=""
          dateElement.value=""
          placeElement.value=""
          eventElement.value=""
          contactsElement.value=""

          editBtnElement.addEventListener('click', editOn) 

          function editOn () {
              
            timeElement.value=editTimeElement
            dateElement.value=editDateElement
            placeElement.value=editPlaceElement
            eventElement.value=editEventElement
            contactsElement.value=editContactElement
            
            liAddElement.remove()

            addBtn.disabled=false

          } 

          continueBtnElement.addEventListener('click', continueOn) 

          function continueOn () {
               
               let liContinueElement=document.createElement('li')
               liContinueElement.setAttribute('class', 'event-content')

               let articleContinueElement=document.createElement('article')
               articleContinueElement=addArticleElement

               let finishedBtnElement=document.createElement('button')
               finishedBtnElement.setAttribute('class', 'finished-btn')
               finishedBtnElement.textContent="Move to finished" 

               liContinueElement.appendChild(articleContinueElement)
               liContinueElement.appendChild(finishedBtnElement) 

               upcomingListElement.appendChild(liContinueElement)

               liAddElement.remove()

               addBtn.disabled=false


               finishedBtnElement.addEventListener('click', finishedOn) 

               function finishedOn () {
                   
                   let liFinishedElement=document.createElement('li')
                   liFinishedElement.setAttribute('class', 'event-content') 

                   let articleFinishedElement=document.createElement('article') 

                   articleFinishedElement=articleContinueElement 

                   liFinishedElement.appendChild(articleFinishedElement)
                   finishedListElement.appendChild(liFinishedElement)

                   liContinueElement.remove()

                   clearBth.addEventListener('click', clearOn)
               
               function clearOn () {
                   liFinishedElement.remove()
               
                }
                
               }

               
          }

       }
}


    
    
