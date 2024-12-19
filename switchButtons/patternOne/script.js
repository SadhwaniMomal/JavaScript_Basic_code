// here access our buttons
let cbtn = document.querySelector("#cbtn")
let pbtn = document.querySelector("#pbtn")
let mbtn = document.querySelector("#mbtn")

// here access our content
let ccontent = document.querySelector(".ccontent")
let pcontent = document.querySelector(".pcontent")
let mcontent = document.querySelector(".ccontent")

// here add event listeners for button clicks
cbtn.addEventListener("click", ()=>{
    ccontent.classList.add("active")    
    pcontent.classList.remove("active")    
    mcontent.classList.remove("active")    
})

pbtn.addEventListener("click", ()=>{
    ccontent.classList.remove("active")    
    pcontent.classList.add("active")    
    mcontent.classList.remove("active")    
})
mbtn.addEventListener("click", ()=>{
    ccontent.classList.remove("active")    
    pcontent.classList.remove("active")    
    mcontent.classList.add("active")    
})