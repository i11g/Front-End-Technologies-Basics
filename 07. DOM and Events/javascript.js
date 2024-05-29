
// function showAlert() {
//     alert("It's me")
// } 

// //let div=document.getElementById("newdiv")
// //console.log(div.innerHTML)
// //div.innerHTML="New title" 

// //let paragraphs=document.getElementsByTagName("p")
// //console.log(paragraphs)

// let paragraph=document.querySelectorAll("p");
// console.log(paragraph[0]) 

// let paragraph=document.querySelectorAll("p")
// for (let p of paragraph) {
//     console.log(p)
// }

//display 

// let paragraph=document.getElementById("idI")
// paragraph.style.display="none";

//mathing n-child element 

// let print=document.querySelector("ul li:nth-child(3)")
// console.log(print) 

// const list=document.getElementsByTagName('ul')[0];
// const third=list.getElementsByTagName('li')[2]
// console.log(third) 

// const element=document.createElement("input")
// element.textContent="Click me"
// document.body.appendChild(element) 

const element=document.createElement("input")
const parentElement=document.getElementById("newdiv") 
parentElement.appendChild(element);