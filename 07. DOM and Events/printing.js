// let paragraph=document.querySelectorAll("p")
// for (let p of paragraph) {
//     console.log(p)
// }

//display 

// let paragraph=document.getElementById("idI")
// paragraph.style.display="none";

//mathing n-child element 

let print=document.querySelector("ul li:nth-child(3)")
console.log(print) 

const list=document.getElementsByTagName('ul')[0];
const third=list.getElementsByTagName('li')[2]
console.log(third)