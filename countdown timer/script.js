const newYear = "1 jan 2023";

const days = document.getElementById("days-c");
const hours = document.getElementById("hour-c");
const minutes = document.getElementById("minute-c");
const seconds = document.getElementById("second-c");

function countDown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSecond = (newYearDate - currentDate) / 1000;
console.log(totalSecond);
  const day = Math.floor(totalSecond / 3600 / 24);
  const hour = Math.floor(totalSecond / 3600) % 24;
  const minute = Math.floor(totalSecond / 60) % 60;
  const second = Math.floor(totalSecond) % 60;
  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
}
countDown();

setInterval(countDown, 1000);
