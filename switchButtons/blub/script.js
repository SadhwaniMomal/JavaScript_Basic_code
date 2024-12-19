let onBtn = document.querySelector("#on")
let offBtn = document.querySelector("#off")

let onImg = document.querySelector("#imgON")
let offImg = document.querySelector("#imgOff")

function blub(on , off){
    on.classList.add("active");
    [off].forEach((offLight) => {
        offLight.classList.remove("active");
    });
}

onBtn.addEventListener("click", () => {
    blub(onImg, offImg);
});
offBtn.addEventListener("click", () => {
    blub(offImg, onImg);
});