const displayDay = document.getElementById("day");
const displayHours = document.getElementById("hour");
const displayMinuts = document.getElementById("minut");
const displaySeconds = document.getElementById("second");

const timer = '1 jan 2022';

function count() {
    const newtimer = new Date(timer);
    const current = new Date();
    const future = (newtimer - current) / 1000;

    const days = Math.floor(future / 3600 / 24);
    const hours = Math.floor((future / 3600) % 24);
    const minuts = Math.floor((future / 60) % 60);
    const seconds = Math.floor(future % 60);

    console.log(days,hours,minuts,seconds);

    console.log(displayDay);


    displayDay.innerText = days;
    displayHours.innerText = hours;
    displayMinuts.innerText = minuts;
    displaySeconds.innerText = seconds;
}

count();

setInterval(count, 1000);