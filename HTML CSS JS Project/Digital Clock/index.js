
const time = document.getElementById('time');
  const ampm = document.getElementById('ampm');
  const date = document.getElementById('date');
  const toggleBtn = document.getElementById('toggleFormat');

  let is24Hour = false;

   function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = '';

    if (!is24Hour) {
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;  
    }

    time.textContent = 
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    ampm.textContent = !is24Hour ? ampm : '';
 
    const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
    date.textContent = now.toLocaleDateString(undefined, options);
  }

 toggleBtn.addEventListener('click', () => {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour ? 'Switch to 12-hour' : 'Switch to 24-hour';
    updateTime();
  });

  setInterval(updateTime, 1000);
  updateTime();