function solve() {
    const [input, output]=document.getElementsByTagName("textarea")
    const [generateButton, buyButton]=document.getElementsByTagName("button") 
    const tableBody=document.getElementsByTagName("tbody")[0] 

    generateButton.addEventListener("click", generateRow)
    buyButton.addEventListener('click', buyItems) 

    function generateRow () {
     let data=JSON.parse(input.value)

     for (let i=0; i<data.length; i++) {

      let tableRow=document.createElement('tr')

      let tableDataI=document.createElement('td')
      let tableImage=document.createElement('img')
      tableImage.src=data[i].img

      tableDataI.appendChild(tableImage)
      tableRow.appendChild(tableDataI)

      let tableDataName=document.createElement('td')
      let tableDataparagraph=document.createElement('p')
      tableDataparagraph.textContent=data[i].name
      
      tableDataName.appendChild(tableDataparagraph)
      tableRow.appendChild(tableDataName)

      let tablePrice=document.createElement('td')
      let tablePriceparagraph=document.createElement('p')
      tablePriceparagraph.textContent=data[i].price

      tablePrice.appendChild(tablePriceparagraph)
      tableRow.appendChild(tablePrice)

      let tableDecfactor=document.createElement('td')
      let tableDecfactorparagraph=document.createElement('p')
      tableDecfactorparagraph.textContent=data[i].decFactor

      tableDecfactor.appendChild(tableDecfactorparagraph)
      tableRow.appendChild(tableDecfactor)

      let tableCheckBox=document.createElement('td')
      let tableCheckInput=document.createElement("input")
      tableCheckInput.type="checkbox"
      
      tableCheckBox.appendChild(tableCheckInput)
      tableRow.appendChild(tableCheckBox)

      tableBody.appendChild(tableRow) 
     }     

    } 

    function buyItems () {

        let furniture=[]
        let price=0;
        let averageDecF=0;
        let countItems=0;
        let tableRows=document.getElementsByTagName('tr')

        for (let i = 1; i < tableRows.length; i++) {
            let checkedBox=tableRows[i].children[4].children[0].checked
            if(checkedBox) {
                countItems+=1;
                furniture.push(tableRows[i].children[1].children[0].textContent)
                price+=Number(tableRows[i].children[2].children[0].textContent)
                averageDecF+=(Number(tableRows[i].children[3].children[0].textContent))
            }
        }

        const result=`Bought furniture: ${furniture}
            Total price: ${price}
            Average decoration factor: ${averageDecF/countItems}`            
         
        output.textContent=result

    }



}