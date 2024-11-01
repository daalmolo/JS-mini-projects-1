"use strict";

const input = document.getElementsByClassName("input__text")[0];

function strReverse(str) {
  const reverseStrHolder = str.split("").reverse().join("");

  return reverseStrHolder;
}

function check() {
  const strIn = input.value;

  const reversedStr = strReverse(strIn);

  if (strIn === reversedStr) {
    alert(true);
  }

  if (strIn !== reversedStr) {
    alert(false);
  }

  return 0;
}
