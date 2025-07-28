const time = document.getElementById("timer");
const start = document.getElementById("Start");
const stop = document.getElementById("Stop");
const reset = document.getElementById("Reset");
let elapsedTime = 0;
let running = false;
let startTime;
let intervalId;
function timer(){
    let date = new Date(elapsedTime);
    let min = String(date.getMinutes()).padStart(2, '0');
    let mil = String(date.getMilliseconds()).padStart(3, '0');
    let sec = String(date.getSeconds()).padStart(2, '0');
     time.textContent = ` ${min} : ${sec}: ${mil}`
    
    
}
let interval = setInterval(timer, 100);

reset.addEventListener("click",(e) => {
    clearInterval(interval);
})
  
 start.addEventListener("click",(e) => {

 });

 stop.addEventListener("click", (e) => {

 });

 function startTimer() {
    
 }
