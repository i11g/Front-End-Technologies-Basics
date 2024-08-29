function toggle() {
    let button=document.getElementsByClassName("button")[0];
    let extraText=document.getElementById("extra");

    let buttontext=button.textContent; 

    if(buttontext=="More") {
        extraText.style.display="block"
        button.textContent="Less"
    }
    else {
        extraText.style.display="none"
        button.textContent="More"
    }
}