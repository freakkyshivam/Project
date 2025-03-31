
const start = document.getElementById("start");
let text = document.getElementById("text")

start.addEventListener("click",function changeBg(){
    function Randomcolor(){
        let hex = "#"
        let c = "ABCDEF1234567890"
        for(let i =0; i<6; i++){
          hex +=  c.charAt(Math.floor(Math.random()*c.length))
        }
        return hex
    }

    let  color = Randomcolor()
    
   console.log(color);
   text.innerText = `Hex color code is ${color}`
   text.style.color = "color"
   document.body.style.backgroundColor = color;
})
