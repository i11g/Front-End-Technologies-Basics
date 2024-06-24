function deleteByEmail() { 
    //Select elements
      const result=document.getElementById('result')

      const emailData=document.querySelector('input[name ="email"]')
      
      const trElements=document.querySelectorAll('#customers tbody tr')
      
     //Find the mathing element 
   const resultSearch = Array.from(trElements)
      .find(tr => tr.getElementsByTagName('td')[1].textContent===emailData.value) 
      
      if(resultSearch) {
        resultSearch.remove();
        result.textContent='Deleted.'
      }
      else {
        result.textContent="Not found"
      }

      emailData.value="" 
      emailData.focus()
}