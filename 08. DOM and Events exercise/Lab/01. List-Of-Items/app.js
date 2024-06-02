function addItem() {
   // Get related element from Dom
   const inputField=document.getElementById('newItemText')
   const addList=document.getElementById('items') 
  
   //Create new element
   const input=inputField.value
   let newItem=document.createElement('li')
   newItem.textContent=input
   
   //append new element
   addList.append(newItem)

   //clean value
   inputField.value=''
   
   //focus on input 

   inputField.focus()
}