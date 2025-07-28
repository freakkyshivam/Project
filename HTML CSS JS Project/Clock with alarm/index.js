const t = document.getElementById("time");
const alarmTimeInput = document.getElementById("alarm-time-set");
const alarmNameInput = document.getElementById("alarm-name");
const alarmList = document.getElementById("alarm-list");
const setAlarmBtn = document.getElementById("btn");
const message = document.getElementById("message");

let alarms = [];
let alarmAudio = new Audio("labon_ko-344844.mp3");

function CurrentTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  t.textContent = `${h}:${m}:${s}`;
  return `${h}:${m}`;
}

setInterval(() => {
  const current = CurrentTime();
  alarms.forEach(alarm => {
    if (alarm.time === current && !alarm.triggered) {
      alarm.triggered = true;
      playAlarm(alarm);
    }
  });
}, 1000);

setAlarmBtn.addEventListener("click", () => {
  const time = alarmTimeInput.value;
  const name = alarmNameInput.value.trim() || "Unnamed Alarm";

  if (!time) {
    message.textContent = "Please set a valid time for the alarm.";
    setTimeout(() => {
      message.textContent = "";
    }, 1000);
    return;
  }

  const alarm = {
    id: Date.now(),
    time,
    name,
    triggered: false,
  };

  alarms.push(alarm);
  message.textContent = `⏰ Alarm "${name}" set for ${time}.`;
  setTimeout(() => {
    message.textContent = "";
  }, 2000);
  renderAlarms();
  alarmTimeInput.value = "";
  alarmNameInput.value = "";
});

function renderAlarms() {
  alarmList.innerHTML = "";

  alarms.forEach(alarm => {
    const item = document.createElement("div");
    item.className = "alarm-item";

    const info = document.createElement("div");
    info.className = "alarm-info";
    info.innerHTML = `<strong>${alarm.name + " "}</strong><span>${" " + alarm.time}</span>`;

    const buttons = document.createElement("div");
    buttons.className = "alarm-buttons";

    const stopBtn = document.createElement("button");
    stopBtn.textContent = "Stop";
    stopBtn.onclick = () => stopAlarm(alarm.id);
    stopBtn.className = "stop-btn";

    const snoozeBtn = document.createElement("button");
    snoozeBtn.textContent = "Snooze";
    snoozeBtn.onclick = () => snoozeAlarm(alarm.id);
    snoozeBtn.className = "snooze-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      alarms = alarms.filter(a => a.id !== alarm.id);
      renderAlarms();
    };
    deleteBtn.className = "delete-btn";
deleteBtn.setAttribute("data-id", alarm.id);

    
    buttons.appendChild(snoozeBtn);
    buttons.appendChild(stopBtn);
    buttons.appendChild(deleteBtn);
    item.appendChild(info);
    item.appendChild(buttons);

    alarmList.appendChild(item);
  });
}

function playAlarm(alarm) {
  alarmAudio.loop = true;
  alarmAudio.play();
 
  const deleteBtn = document.querySelector(`.delete-btn[data-id="${alarm.id}"]`);
  if (deleteBtn) {
    deleteBtn.remove();
  }
  const stopBtn = document.querySelector(`.stop-btn`);
  const snoozeBtn = document.querySelector(`.snooze-btn`);
  if (stopBtn) stopBtn.style.display = "block";
  if (snoozeBtn) snoozeBtn.style.display = "block";
  message.textContent = `⏰ "${alarm.name}" Alarm is ringing!`;

}


function stopAlarm(id) {
  const alarm = alarms.find(a => a.id === id);
  if (alarm) {
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
    alarm.triggered = true;  
    message.textContent = `⏹ Alarm "${alarm.name}" stopped.`;
    setTimeout(() => {
      message.textContent = "";
    }, 2000);
  }
  alarms = alarms.filter(a => a.id !== id);
  renderAlarms();
}

 
function snoozeAlarm(id) {
  const alarm = alarms.find(a => a.id === id);
  if (alarm) {
    const [h, m] = alarm.time.split(":").map(Number);
    let snoozeDate = new Date();
    snoozeDate.setHours(h);
    snoozeDate.setMinutes(m + 5);  

    const newHours = String(snoozeDate.getHours()).padStart(2, "0");
    const newMinutes = String(snoozeDate.getMinutes()).padStart(2, "0");

    alarm.time = `${newHours}:${newMinutes}`;
    alarm.triggered = false;
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
    renderAlarms();

    message.textContent = `⏱ Snoozed "${alarm.name}" for 5 minutes.`;
    setTimeout(() => {
      message.textContent = "";
    }, 2000);
  }
}
