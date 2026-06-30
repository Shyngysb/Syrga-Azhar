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

// ===== SCROLL ANIMATION =====

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

const form = document.getElementById("rsvpForm");
const message = document.getElementById("rsvpMessage");

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxsQE5O41cOirpCFWAfSJ_qjYfXLd8EVSkV_KRMVlNyXb_O9tDx6l9cWwnbtMb0uizozQ/exec"; // 👈 вставь сюда

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const attendance = document.getElementById("attendance").value;

    await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({
            name: name,
            attendance: attendance
        })
    });

    if (attendance === "yes") {
        message.textContent = `Рахмет, ${name}! Сізді күтеміз 💛`;
    } else {
        message.textContent = `Рахмет, ${name}! Жауабыңыз қабылданды`;
    }

    form.reset();
});
