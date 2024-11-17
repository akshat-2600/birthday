function startClock() {
    const hourElem = document.getElementById("hour");
    const minuteElem = document.getElementById("minute");
    const secondElem = document.getElementById("second");
    const digitalTimeElem = document.getElementById("digital-time");
    const birthdayMessageElem = document.getElementById("birthday-message");

    // For confetti
    const confettiContainer = document.createElement("div");
    confettiContainer.style.position = "absolute";
    confettiContainer.style.top = "0";
    confettiContainer.style.left = "0";
    document.body.appendChild(confettiContainer);

    const birthdayDate = new Date("November 18, 2024 00:00:00 GMT+0530");
    const nextBirthdayDate = new Date("November 18, 2025 00:00:00 GMT+0530");

    // Confetti effect function
    function generateConfetti() {
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = `${Math.random() * window.innerWidth}px`;
            confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
            confettiContainer.appendChild(confetti);
        }
    }

    // Play Birthday sound
    const birthdaySound = new Audio("C:\\Users\\lenovo\\Desktop\\Birthday\\happy-birthday-220024.mp3"); // Change this to your birthday sound URL

    function updateClock() {
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();

        // Update digital clock
        const digitalTime = currentTime.toLocaleTimeString('en-GB', { hour12: false });
        digitalTimeElem.innerText = digitalTime;

        // Update analog clock hands
        const secondDeg = (seconds / 60) * 360;
        const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
        const hourDeg = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

        secondElem.style.transform = `rotate(${secondDeg}deg)`;
        minuteElem.style.transform = `rotate(${minuteDeg}deg)`;
        hourElem.style.transform = `rotate(${hourDeg}deg)`;

        // Check if it's Chirag's birthday
        if (currentTime >= birthdayDate && currentTime < nextBirthdayDate) {
            if (!birthdayMessageElem.style.display || birthdayMessageElem.style.display === "none") {
                birthdayMessageElem.style.display = "block";
                birthdayMessageElem.innerText = "Happy Birthday Chirag!";
                generateConfetti(); // Show confetti when message appears
                birthdaySound.play(); // Play the sound
            }
        } else {
            birthdayMessageElem.style.display = "none";
        }
    }

    setInterval(updateClock, 1000);
}

startClock();
