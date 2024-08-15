window.addEventListener('load', solution);

function solution() {
     
       let employeeElement=document.getElementById('employee')
       let categoryElement=document.getElementById('category')
       let urgencyElement=document.getElementById('urgency')
       let teamElement=document.getElementById('team')
       let descriptionElement=document.getElementById('description')
       
       let addButton=document.getElementById('add-btn')
       
       let previewContainer=document.querySelector('.preview-list')
       let pendingContainer=document.querySelector('.pending-list')
       let resolvedContainer=document.querySelector('.resolved-list')

       addButton.addEventListener('Click', onNext)

       function onNext(e) {
        e.preventDefault();

        if(employeeElement.value=="" ||
          categoryElement.value==""||
          urgencyElement.value==""||
          teamElement.value==""||
          descriptionElement.value==""

        )  {
           return ;
        }

        let liPreviewElement=document.createElement('li') 
        liPreviewElement.setAttribute('class', 'problem-content') 
        
        let a


       }
}


    
    
