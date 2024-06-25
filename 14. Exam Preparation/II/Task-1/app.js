window.addEventListener('load', solution);

function solution() {
        
     let employeeElement=document.getElementById("employee")
     let categoryElement=document.getElementById('category')
     let urgencyElement=document.getElementById('urgency')
     let assignedTeamElement=document.getElementById('team')
     let descriptionElement=document.getElementById("description")

     let addBtnElement=document.getElementById('add-btn')

     let previewElement=document.querySelector('.preview-list')
     let pendingElement=document.querySelector('.pending-list')
     let resolvedElement=document.querySelector('.resolved-list') 

    addBtnElement.addEventListener('click', onNext) 

    function onNext(event) {
      event.preventDefault() 
        
        if(employeeElement.value==""||
          categoryElement.value==""||
          urgencyElement.value==""||
          assignedTeamElement==""||
          descriptionElement==""
        ) {
          return
        } 

        let liElement=document.createElement('li')
        liElement.setAttribute('class', 'problem-content')
        
        let articleElement=document.createElement('article')
        
        let fromParagraph=document.createElement('p')
        fromParagraph.textContent=`From: ${employeeElement.value}`

        let categoryParagraph=document.createElement('p')
        categoryParagraph.textContent=`Category: ${categoryElement.value}`

        let urgencyParagraph=document.createElement('p')
        urgencyParagraph.textContent=`Urgency: ${urgencyElement.value}`

        let assignedParagraph=document.createElement('p')
        assignedParagraph.textContent=`Assigned to: ${addBtnElement.value}`

        let descriptionParagraph=document.createElement('p')
        descriptionParagraph.textContent=`Description: ${descriptionElement.value}`

        let editBtnElement=document.createElement('button')
        editBtnElement.setAttribute('class', 'edit-btn')
        editBtnElement.textContent='Edit'

        let continueBtnElement=document.createElement('button')
        continueBtnElement.setAttribute('class', 'continue-btn')
        continueBtnElement.textContent= "Continue"

        articleElement.appendChild(fromParagraph)
        articleElement.appendChild(categoryParagraph)
        articleElement.appendChild(urgencyParagraph)
        articleElement.appendChild(assignedParagraph)
        articleElement.appendChild(descriptionParagraph) 

        liElement.appendChild(articleElement)
        liElement.appendChild(editBtnElement)
        liElement.appendChild(continueBtnElement) 

        previewElement.appendChild(liElement) 

        addBtnElement.disabled=true 

        let employeeData=employeeElement.value
        let categoryData=categoryElement.value
        let urgencyData=urgencyElement.value
        let assignedData=assignedTeamElement.value
        let descriptionData=descriptionElement.value 

        employeeElement.value=""
        categoryElement.value=""
        urgencyElement.value=""
        assignedTeamElement.value=""
        descriptionElement.value=""
      
        editBtnElement.addEventListener('click', editOn)
        
        function editOn() {
           
          employeeElement.value=employeeData
          categoryElement.value=categoryData
          urgencyElement.value=urgencyData
          assignedTeamElement.value=assignedData
          descriptionElement.value=descriptionData 

          liElement.remove() 

        addBtnElement.disabled=false
        }   
        
        continueBtnElement.addEventListener('click', continueOn)

        function continueOn () {
             
            let liPendingElement=document.createElement('li')
            liPendingElement.setAttribute('class', 'problem-content')
            
            let articlePending=document.createElement('article') 

            articlePending=articleElement 

            let revBtn= document.createElement('button')
            revBtn.setAttribute('class', 'resolve-btn')
            revBtn.textContent = "Resolved" 

            liPendingElement.appendChild(articlePending)
            liPendingElement.appendChild(revBtn)

            pendingElement.appendChild(liPendingElement) 

            liElement.remove()
            addBtnElement.disabled=false
         
        revBtn.addEventListener('click', resolveOn)

        function resolveOn() {

           let liResolveElement = document.createElement('li') 
           liResolveElement.setAttribute('class', 'problem-content')

           let resolveArticle=document.createElement('article')
           resolveArticle=articleElement

           let clearBtn=document.createElement('button')
           clearBtn.setAttribute('class', 'clear-btn')
           clearBtn.textContent="Clear" 

           liResolveElement.appendChild(resolveArticle)
           liResolveElement.appendChild(clearBtn) 

           resolvedElement.appendChild(liResolveElement) 

           liPendingElement.remove() 
           

           clearBtn.addEventListener('click', clearOn) 
              
           function clearOn () {
              liResolveElement.remove()
           }
        }
    }
}
   
}  
    
    
