function UpdateClock() {
    const hoursElement = document.querySelector(".hours");
    const minutesElement = document.querySelector(".minutes");
    const secondsElements = document.querySelector(".seconds");

    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minuts= now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");

    hoursElement.textContent = hours;
    minutesElement.textContent = minuts;
    secondsElements.textContent = seconds;

    
}

setInterval(UpdateClock,1000);