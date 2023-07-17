var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}

const inputs=document.querySelectorAll(".input");
function focusfunc(){
let parent= this.parentNode;
parent.classList.add("focus");
}
function blurfunc(){
    let parent= this.parentNode;
    if(this.value==""){
        parent.classList.remove("focus");
    }
}
inputs.forEach((input) => {
input.addEventListener("focus",focusfunc);
input.addEventListener("blur",blurfunc);

})