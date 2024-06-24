function addItem() {
    const newItemText=document.getElementById('newItemText')
     
    const itemsList=document.getElementById('items')

    const newItem=document.createElement('li') 

    newItem.textContent=newItemText.value 

     itemsList.append(newItem) 

     newItemText.value= ""

     newItemText.focus()
}