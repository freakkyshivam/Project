
let num = document.getElementById("num");
let min = document.getElementById("min");
let max = document.getElementById("max")

let value = 0;


function inValue(){
    value = value + 1;
    display(value);
}

function deValue(){
    value = value - 1;
    display(value)
}

max.addEventListener("click", inValue)
min.addEventListener("click", deValue)

function display(v){
    num.textContent = v;

    if(v>0){
        num.style.color = "green"
    }else if(v<0){
         num.style.color = "red"
    }else{
         num.style.color = "white"
    }
}