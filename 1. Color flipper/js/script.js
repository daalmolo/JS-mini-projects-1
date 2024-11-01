"use strict";

const body = document.getElementsByTagName("body")[0];

const buttonRandomColor = document.getElementsByClassName("button__random")[0];

function setBGColor(name) {
  body.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  buttonRandomColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
