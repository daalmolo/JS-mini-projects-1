"use strict";

let secondsElapsed = 0;
let interval = null;

const timerTag = document.getElementsByClassName("watch__timer")[0];
const startButton = document.getElementsByClassName("watch__start")[0];

function padStart(value) {
  return String(value).padStart(2, "0");
}

function setTimer() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;

  timerTag.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
  secondsElapsed++;
  setTimer();
}

function startClock() {
  interval = setInterval(timer, 1000);

  startButton.style.display = "none";
}

function stopClock() {
  startButton.style.display = "inline";
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTimer();
}
