

const btn = document.getElementById("submit-button");
const container = document.getElementById("container")
let previousGuess = document.getElementById("guess");
let remaingGuess = document.getElementById("remaining-guess").value;
let results = document.getElementById("results")
let totalGuess = 10;

let num = Math.floor(Math.random()*100)
console.log(num);
// container.insertAdjacentHTML("beforeend", "<h2>Sorry, You miss the all chance, Please try again</h2>")

btn.addEventListener("click", ()=>{
    let input = document.getElementById("input-field").value;
    let guessNumber = Number(input);
    
    previousGuess.insertAdjacentHTML("beforeend", `${guessNumber} ${ " "}`)
    
  
    if(totalGuess >= 1){
        if(guessNumber === num){
            results.textContent = "Congrates! You guess the correct Number"
            totalGuess--;
        }else if(guessNumber < num){
            results.textContent =  "Sorry, Number is too short"
            totalGuess--
        }else if(guessNumber > num){
            results.textContent = "Sorry, Number is too big"
            totalGuess--
        }
    }
    else {
            results.textContent =  "Sorry, You miss the all chance, Please try again"
            previousGuess.insertAdjacentHTML("beforeend", `${guessNumber} ${ " "}`)
        }
        
        remaingGuess.textContent = totalGuess

    document.getElementById("input-field").value = ''
    
})