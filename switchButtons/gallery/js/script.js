let allBtn = document.querySelector("#all")
let traBtn = document.querySelector("#travel")
let grouBtn = document.querySelector("#group")

let allcont = document.querySelector(".all")
let tracont = document.querySelector(".travel")
let groucont = document.querySelector(".group")

function changeContent(all , travel , group){
    all.classList.add("active");
    [travel,group].forEach(element => {
        element.classList.remove("active");            
    });
}


allBtn.addEventListener("click", (e) => {
    allBtn.classList.add("activebtn");
    changeContent(allcont, tracont, groucont);
    switchButton(first, second, third);
});

traBtn.addEventListener("click", () => {
    allBtn.classList.remove("activebtn");
    traBtn.classList.add("activebtn");
    changeContent(tracont, allcont, groucont);
});

grouBtn.addEventListener("click", () => {
    grouBtn.classList.add("activebtn");
    traBtn.classList.remove("activebtn");
    changeContent(groucont, allcont, tracont);
});