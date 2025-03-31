
let scrollLeft = document.querySelector("#scroll-left")
let scrollRight = document.querySelector("#scroll-right")

let buttonGet = document.querySelector(".get");
let buttonSign = document.querySelector(".sign");

scrollLeft.addEventListener("click", () => {
    document.getElementById("menu").scrollBy({
        left: -200,
        behavior: "smooth"
    }) ; 
})

scrollRight.addEventListener("click", () => {
    document.getElementById("menu").scrollBy({
        left: 200,
        behavior: "smooth"
    }) ; 
});

  