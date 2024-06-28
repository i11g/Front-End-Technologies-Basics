window.addEventListener('load', solution);

function solution() {
         
         let employeeElement=document.getElementById("employee")
         let categoryElement=document.getElementById("category") 
         let urgencyElement=document.getElementById("urgency") 
         let assignedTeamElement=document.getElementById("team")
         let descriptionElement=document.getElementById("description") 

         let addBtnElement=document.querySelector('[type="submit"]') 

         let previewListElement=document.querySelector('.preview-list')
         let pendingListElements=document.querySelector('.pending-list')
         let resolvedListElement=document.querySelector('.resolved-list') 

         addBtnElement.addEventListener('click', nextOn)

         function nextOn(e) { 

         e.preventDefault()

         if(employeeElement.value==""||
          categoryElement.value==""||
          urgencyElement.value==""||
          assignedTeamElement.value==""||
          descriptionElement.value==""
         ) {
          return
         }
                
                let liElement=document.createElement('li')
                liElement.setAttribute('class', 'problem-content') 

                let artcileElement=document.createElement('article')
                
                let fromParagraphElement=document.createElement('p')
                fromParagraphElement.textContent=`From: ${employeeElement.value}`

                let categoryParagraphElement=document.createElement('p')
                categoryParagraphElement.textContent=`Category: ${categoryElement.value}`

                let urgencyParagraphElement=document.createElement('p')
                urgencyParagraphElement.textContent=`Urgency: ${urgencyElement.value}` 

                let assignToParagraphElement=document.createElement('p')
                assignToParagraphElement.textContent=`Assigned to: ${assignedTeamElement.value}`

                let descriptionParagraphElement=document.createElement('p')
                descriptionParagraphElement.textContent=`Description: ${descriptionElement.value}`

                let editBtnElement=document.createElement('button')
                editBtnElement.setAttribute('class', 'edit-btn')
                editBtnElement.textContent="Edit" 

                let continueBtnElement=document.createElement('button')
                continueBtnElement.setAttribute('class', 'continue-btn')
                continueBtnElement.textContent="Continue" 

                artcileElement.appendChild(fromParagraphElement)
                artcileElement.appendChild(categoryParagraphElement)
                artcileElement.appendChild(urgencyParagraphElement)
                artcileElement.appendChild(assignToParagraphElement)
                artcileElement.appendChild(descriptionParagraphElement) 

                liElement.appendChild(artcileElement)
                liElement.appendChild(editBtnElement)
                liElement.appendChild(continueBtnElement) 

                previewListElement.appendChild(liElement)

                addBtnElement.disabled=true 

                let editedEmployeeElement=employeeElement.value
                let editedCtegoryElement=categoryElement.value
                let editedUrgencyelement=urgencyElement.value
                let editedAssigenelement=assignedTeamElement.value
                let editedDescriptionelement=descriptionElement.value 

                  employeeElement.value=""
                  categoryElement.value=""
                  urgencyElement.value=""
                  assignedTeamElement.value=""
                  descriptionElement.value="" 
                 
                editBtnElement.addEventListener('click', editOn)

                function editOn() {
                  employeeElement.value=editedEmployeeElement
                  categoryElement.value=editedCtegoryElement
                  urgencyElement.value=editedUrgencyelement
                  assignedTeamElement.value=editedAssigenelement
                  descriptionElement.value=editedDescriptionelement 

                  addBtnElement.disabled=false
                  liElement.remove()
                } 

                continueBtnElement.addEventListener('click', continueOn) 

                function continueOn() {
                  let liPendingElement=document.createElement('li')
                  liPendingElement.setAttribute('class', "problem-content")

                  let liPendingArticle=document.createElement('article') 
                  liPendingArticle=artcileElement

                  let resolvedBtnElement=document.createElement('button')
                  resolvedBtnElement.setAttribute('class', 'resolve-btn')
                  resolvedBtnElement.textContent="Resolved"  

                  liPendingElement.appendChild(liPendingArticle)
                  liPendingElement.appendChild(resolvedBtnElement) 

                  pendingListElements.appendChild(liPendingElement) 

                  liElement.remove() 

                  addBtnElement.disabled=false

                  resolvedBtnElement.addEventListener('click', resolvedOn) 

                  function resolvedOn(){
                      let liResolvedElement=document.createElement('li')
                      liResolvedElement.setAttribute('class', 'problem-content')

                      let resolvedArticle=document.createElement('article')
                      resolvedArticle=liPendingArticle

                      let clearBtnElement=document.createElement('button')
                      clearBtnElement.setAttribute('class', 'clear-btn')
                      clearBtnElement.textContent="Clear" 

                      liResolvedElement.appendChild(resolvedArticle)
                      liResolvedElement.appendChild(clearBtnElement)

                      resolvedListElement.appendChild(liResolvedElement) 

                      liPendingElement.remove() 

                      clearBtnElement.addEventListener('click', clearOn) 

                      function clearOn() {
                        liResolvedElement.remove()
                      }
                  }
                }
         }
}


    
    
