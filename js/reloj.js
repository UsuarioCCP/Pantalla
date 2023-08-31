// Reloj
document.addEventListener('DOMContentLoaded', function() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const mesElement = document.getElementById('mes');
  
  
    function updateTime() {
        const now = new Date();
  
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
  
        const timeString = `${hours}:${minutes}:${seconds}`;
        timeElement.textContent = timeString;
  
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString(undefined, options);
        const mesActual = new Intl.DateTimeFormat(undefined, { month: 'long' }).format(now);
        dateElement.textContent = dateString;
        mesElement.textContent = mesActual;
    }
  
    updateTime();
    setInterval(updateTime, 1000);
  });