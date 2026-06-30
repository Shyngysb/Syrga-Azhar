const eventDate = new Date("September 20, 2026 17:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = Math.max(days, 0);
    document.getElementById("hours").textContent = Math.max(hours, 0);
    document.getElementById("minutes").textContent = Math.max(minutes, 0);
    document.getElementById("seconds").textContent = Math.max(seconds, 0);
}

updateTimer();
setInterval(updateTimer, 1000);
