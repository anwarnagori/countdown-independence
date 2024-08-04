let daysEl = document.getElementsByClassName("day")[0];
let hoursEl = document.getElementsByClassName("hour")[0];
let mintsEl = document.getElementsByClassName("mint")[0];
let secsEl = document.getElementsByClassName("sec")[0];

function countDown() {
  setInterval(() => {
    let futureDate = new Date("14 August 2024");
    let currentDate = new Date();

    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let mints = Math.floor(myDate / 1000 / 60) % 60;
    let secs = Math.floor(myDate / 1000) % 60;

    daysEl.innerHTML = days + "<h5>DAYS</h5>";
    hoursEl.innerHTML = hours + "<h5>HOURS</h5>";
    mintsEl.innerHTML = mints + "<h5>MINUTES</h5>";
    secsEl.innerHTML = secs + "<h5>SECONDS</h5>";
  }, 0);
}

countDown();