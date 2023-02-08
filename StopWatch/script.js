const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const timer = document.getElementById("timer");
const lapsList = document.getElementById("lapsList");

let intervalId;
let time = 0;
let laps = [];

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", addLap);

function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      time++;
      timer.textContent = formatTime(time);
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  time = 0;
  timer.textContent = "00:00:00";
  laps = [];
  lapsList.innerHTML = "";
}

function addLap() {
  laps.push(time);
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${laps.length}: ${formatTime(time)}`;
  lapsList.appendChild(lapItem);
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${formatUnit(hours)}:${formatUnit(minutes)}:${formatUnit(seconds)}`;
}

function formatUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}
