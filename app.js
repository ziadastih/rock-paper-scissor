const scoreValue = document.querySelector(".score");
const overlay = document.querySelector(".rules-overlay");
const originalGame = document.querySelector(".game");
const gamePLayBtn = document.querySelectorAll(".gameplay-btn");
const bonusGame = document.querySelector(".bonus-game");
const resultContainer = document.querySelector(".result-container");
const userCircleShadow = document.querySelectorAll(".user-win");
const pcCircleShadow = document.querySelectorAll(".pc-win");
const switchMode = document.querySelector(".switch-btn");
const rulesBtn = document.querySelector(".rules-btn");
const rulesInfo = document.querySelector(".rules-info");
const rulesImg = document.getElementById("rules-img");
const closeBtn = document.querySelector(".close-btn");

let Number = 0;
window.addEventListener("DOMContentLoaded", function () {
  scoreValue.textContent = Number;
});

// ===============switch btn function ===========

switchMode.addEventListener("click", function () {
  switchMode.classList.toggle("switch-mode");
  if (switchMode.classList.contains("switch-mode")) {
    originalGame.classList.add("remove-container");
    bonusGame.classList.add("show-container");
  } else {
    originalGame.classList.remove("remove-container");
    bonusGame.classList.remove("show-container");
  }
});

// ===========rules-btn function=============
rulesBtn.addEventListener("click", function () {
  rulesInfo.classList.add("show-container");
  overlay.classList.add("show-container");
  if (switchMode.classList.contains("switch-mode")) {
    rulesImg.src = "./images/image-rules-bonus.svg";
  } else {
    rulesImg.src = "./images/image-rules.svg";
  }
});

closeBtn.addEventListener("click", function () {
  rulesInfo.classList.remove("show-container");
  overlay.classList.remove("show-container");
});
