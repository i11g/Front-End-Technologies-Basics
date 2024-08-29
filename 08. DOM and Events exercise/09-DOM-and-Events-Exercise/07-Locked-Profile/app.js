function lockedProfile() { 
     
     let  buttons=document.getElementsByTagName("button"); 
     
     for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener('click', showinfo)         
     } 

     function showinfo(event) {
        let lockradioButton=event.target.parentNode.children[2]
        let divHiddencontent=event.target.previousElementSibling 

        if(lockradioButton.checked==false) {
            if(event.target.textContent=="Hide it") {
                divHiddencontent.style.display="none"
                event.target.textContent="Show more"
            } 
            else {
                divHiddencontent.style.display="inline"
                event.target.textContent="Hide it"
            }           

        }
     }
     
   
}