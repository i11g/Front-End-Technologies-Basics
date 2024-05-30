function subtract() {
    let firstElement=document.getElementById("firstNumber")
    let secondElement=document.getElementById("secondNumber")
    let resultDiv=document.getElementById("result")
    
    result=Number(firstElement.value)-Number(secondElement.value)
    
    resultDiv.textContent=result;

} 