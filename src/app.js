/* eslint-disable */
import "bootstrap";
import "./style.css";
// let button = document.querySelector("#button");
//button.addEventListener(
//"click", (
window.onload = setInterval(function randomCard() {
  const palos = ["♦", "♥", "♠", "♣"];

  let indexPalo = Math.floor(Math.random() * palos.length);

  let top = document.querySelector(".top");
  top.innerHTML = palos[indexPalo];

  let bottom = document.querySelector(".bottom");
  bottom.innerHTML = palos[indexPalo];

  if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
    top.style.color = "red";
  } else {
    top.style.color = "black";
  }
  if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
    bottom.style.color = "red";
  } else {
    bottom.style.color = "black";
  }

  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNum = Math.floor(Math.random() * numbers.length);
  let number = document.querySelector(".number");
  number.innerHTML = numbers[indexNum];
  // let bot = document.querySelector(".bot");
  // bot = top;
}, 10000);
