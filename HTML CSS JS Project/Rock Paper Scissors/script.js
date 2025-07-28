 const results = document.getElementById("results");
const yourScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");
const button = document.querySelectorAll("button");
let yourScoreCount = 0;
let computerScoreCount = 0;
 
button.forEach((ele)=>{
   
    ele.addEventListener("click", (e)=>{
        const value = Math.floor(Math.random()*button.length)
        let computerChoice = button[value].textContent;
        let userChoice = e.target.textContent;
        if(userChoice =="👊"  && computerChoice== "✌️"){
            results.textContent = "You Won!";
            yourScoreCount++;
            yourScore.textContent = yourScoreCount;
        } else if(userChoice == "✌️" && computerChoice == "👊"){
            results.textContent = "You Lost!";
            computerScoreCount++;
            computerScore.textContent = computerScoreCount;
        }else if(userChoice == "✌️" && computerChoice == "🖐️"){
            results.textContent = "You Won!";
            yourScoreCount++;
            yourScore.textContent = yourScoreCount;
        }else if(userChoice == "🖐️" && computerChoice == "✌️"){
            results.textContent = "You lost!";
            computerScoreCount++;
            computerScore.textContent = computerScoreCount;
        }else if(userChoice == "🖐️" && computerChoice == "👊"){
            results.textContent = "You Won!";
            yourScoreCount++;
            yourScore.textContent = yourScoreCount;
        }
        else if(userChoice == "👊" && computerChoice == "🖐️"){
            results.textContent = "You Lost!";
            computerScoreCount++;
            computerScore.textContent = computerScoreCount;
        }else{
            results.textContent = "Match tie!"
        }
        
        document.getElementById("choice").innerHTML = `
        <h2>Your Choice: ${userChoice}</h2>
        <h2>Computer Choice: ${computerChoice}</h2>
        `
    
    })
})