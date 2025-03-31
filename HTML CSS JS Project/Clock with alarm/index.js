
const btn = document.getElementById("btn");
const t = document.getElementById("time")
const container = document.getElementById("container")
const stop = document.getElementById("stop")
let alarmAudio = new Audio("labon_ko-344844.mp3");


function CurrentTime() {
    let time = new Date();
    let h = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let realTime = [h, min, sec];
    // t.textContent = `${+h + ":"} ${min+":"} ${sec}`;
    t.textContent = realTime.join(":");
    return realTime;
}

setInterval(CurrentTime, 1000);


btn.addEventListener("click", ()=>{
    let alarmTime =document.getElementById("alarm-time-set").value;
    // console.log(alarmTime);
    if(alarmTime !== ""){
        var alt = document.createElement("h2");
  alt.textContent = `Alarm set on ${alarmTime}`;
  alt.id = "alarmTime"
  container.appendChild(alt)
    }
    
   
    setInterval(() => {
        let currentTime =  CurrentTime().join(":").slice(0,5)
        if(currentTime === alarmTime){
            playAudio(alarmAudio);
            document.getElementById("alarm-time-set").value = null
            alt.textContent = "Alarm ringing!";
        }
        
    }, 1000);

})

 
stop.addEventListener("click", () => {
    pauseAudio();
    
    let alt = document.getElementById("alarmTime");
    if (alt) {
      alt.textContent = "Alarm stopped";
    }
  });


function playAudio(audio) {
  audio.play();
 
}
function pauseAudio() {
    alarmAudio.pause();
    alarmAudio.currentTime = 0;  
    alarmAudio = ""
  }
 

