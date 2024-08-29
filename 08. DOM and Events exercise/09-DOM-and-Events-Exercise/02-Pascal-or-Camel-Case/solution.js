function solve() {
   let textInput=document.getElementById("text").value.toLowerCase();
   let namingConvention=document.getElementById("naming-convention").value;
   let resultField=document.getElementById("result") 
   
   let splittedtext=textInput.split(' ')

   let resulttext="";

   if(namingConvention=="Camel Case") {
    resulttext +=splittedtext[0];
    for (let i=1; i<splittedtext.length; i++) {
      resulttext +=splittedtext[i][0].toUpperCase() + splittedtext[i].slice(1,splittedtext[i].length)
    }
  }
   else if (namingConvention=="Pascal Case"){
    for (let i=0; i<splittedtext.length; i++) {
      resulttext+=splittedtext[i][0].toUpperCase() + splittedtext[i].slice(1,splittedtext[i].length)
    }

   }
   else {
    resultField.textContent="Error"
   }

   resultField.textContent=resulttext;

}