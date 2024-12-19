// here access our buttons
let cbtn = document.querySelector("#cbtn");
let pbtn = document.querySelector("#pbtn");
let mbtn = document.querySelector("#mbtn");

// here access our content
let ccontent = document.querySelector(".ccontent");
let pcontent = document.querySelector(".pcontent");
let mcontent = document.querySelector(".mcontent");

// first acces Data-oas
let animBox = document.querySelector(".animated");


function switchButton(a, b, c) {
  a.classList.add("active");
  [b,c].forEach((removeElement) => {
    removeElement.classList.remove("active");
  })
  
}

// AOS Function remove and ADD




// here add event listeners for button clicks


cbtn.addEventListener("click", ()=>{switchButton(ccontent , pcontent , mcontent)});

pbtn.addEventListener("click", ()=>{switchButton(pcontent , ccontent , mcontent)});
mbtn.addEventListener("click", ()=>{switchButton(mcontent , ccontent , pcontent)});
