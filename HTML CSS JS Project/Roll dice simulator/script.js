
 

const diceImg = document.getElementById("img");
const rollButton = document.getElementById("rollButton");

rollButton.addEventListener("click", () => {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `./assets/dice ${diceNumber}.png`;
  diceImg.style.transform = "rotate(360deg)";
  setTimeout(() => {
    diceImg.style.transform = "rotate(0deg)";
  }, 400);
});
