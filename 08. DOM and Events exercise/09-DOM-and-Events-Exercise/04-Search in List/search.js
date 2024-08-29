function search() {
     let searchItems=document.getElementsByTagName("li")
     let searchValue=document.getElementById("searchText").value
     let resultDiv=document.getElementById("result") 

     let mathes=0

     for (let i = 0; i < searchItems.length; i++) {
        if((searchItems[i].textContent).toLowerCase().includes(searchValue.toLowerCase( ))) {
            mathes++;
            searchItems[i].style.fontWeight="bold"
            searchItems[i].style.textDecoration="underline"
        }
        else {
            searchItems[i].style.fontWeight=""
            searchItems[i].style.textDecoration=""
        }       
     } 

     resultDiv.textContent=`${mathes} matches found`
}
