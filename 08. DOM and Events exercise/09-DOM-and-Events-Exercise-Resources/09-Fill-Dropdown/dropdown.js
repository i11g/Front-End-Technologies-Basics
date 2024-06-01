function addItem() {

    let text=document.getElementById("newItemText" )
    let valueE=document.getElementById("newItemValue")
    let selectItem=document.getElementById("menu") 

    let optionElement=document.createElement("option") 

    optionElement.textContent=text.value
    optionElement.value=valueE.value

    
   selectItem.appendChild(optionElement)

   text.value=""
   valueE.value=""
    
}
