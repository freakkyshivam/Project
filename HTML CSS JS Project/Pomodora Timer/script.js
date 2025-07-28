
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const setNew = document.getElementById("new");
const timer = document.getElementById("timer");
const message = document.getElementById("message");
 
function pomodoraTimer(workTime, restTime){
    
    let w =  workTime*60;
    let r = restTime*60;
    
    start.addEventListener('click', (e)=>{
        let seconds = 1;

        const timerId = setInterval(() => {
        if(w > 0){
                message.textContent = "Work Time!";
                timer.textContent = formatTime(w);
                w -= seconds;
            }else if(w===0 && r > 0){
                    message.textContent = "Rest Time!";
                    setTimeout(() => {
                          timer.textContent = formatTime(r);
                         r -= seconds; 
                    }, 1000);
                   
            }else{
                clearInterval(timerId);
                message.textContent = "Pomodoro Completed!";
                timer.textContent = "25 : 00";
                return;
            }
        } , 1000);
           
            function formatTime(time) {
                time -= seconds;
                if (time < 0) {
                    clearInterval(timerId);
                    return;
                }
                let min = Math.floor(time/60);
                let sec = time%60; 
                return `${min} : ${sec}`;
            }

         stop.addEventListener('click', ()=>{
            clearInterval(timerId);
            message.textContent = "Timer Stopped!";
            timer.textContent = `${Math.floor(w/60)} : ${w%60}`;
        }   )
       
        
        reset.addEventListener("click",()=>{
           clearInterval(timerId);
           timer.textContent = '25 : 00'
              message.textContent = "Timer Reset!";
        })

        setNew.addEventListener("click", ()=>{
            workTime = prompt('Enter new work time in minutes');
            restTime = prompt('Enter new rest time in minutes');
            w = workTime*60;
            r = restTime*60;
             timer.textContent = `${workTime} : 00`;
             message.textContent = "New timer set!";
             setTimeout(() => {
                message.textContent = `New work time is ${workTime} and new rest time is ${restTime}`
             }, 1000);
            
        })
    })

 
}

pomodoraTimer(25,5)