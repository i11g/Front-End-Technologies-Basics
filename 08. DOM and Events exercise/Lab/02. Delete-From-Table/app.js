function deleteByEmail() { 
  //Select the Elements
  const result=document.getElementById("result")
  const input=document.querySelector('input[name=email]') 


  //Select all rows 
  
  const allRows=document.querySelectorAll('#customers tbody tr') 

  //Find matching email 
  
  const dataField=Array.from(allRows)
  .find(tr=>tr.getElementsByTagName('td')[1].textContent===input.value) 

  if(dataField) {
    dataField.remove()
    result.textContent="Deleted"
  } else {
    result.textContent="Not found"
  } 

  //Clean Up 
  input.value=''

    
}