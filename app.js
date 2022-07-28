const scoreValue = document.querySelector(".score");
const overlay = document.querySelector(".rules-overlay");
const originalGame = document.querySelector(".game");
const gamePLayBtn = document.querySelectorAll(".gameplay-btn");
const bonusGame = document.querySelector(".bonus-game");
const resultContainer = document.querySelector(".results-container");
const userCircleShadow = document.querySelectorAll(".user-win");
const pcCircleShadow = document.querySelectorAll(".pc-win");
const switchMode = document.querySelector(".switch-btn");
const rulesBtn = document.querySelector(".rules-btn");
const rulesInfo = document.querySelector(".rules-info");
const rulesImg = document.getElementById("rules-img");
const closeBtn = document.querySelector(".close-btn");
const userDiv = document.querySelector(".user");
const pcDiv = document.querySelector(".pc");
const resultTextContainer = document.querySelector(".result-text-container");
const text = document.querySelector(".win-lose");
const playAgainBtn = document.querySelector(".play-again");
const resetBtn = document.querySelector(".reset");

window.addEventListener("DOMContentLoaded", function () {
  scoreValue.textContent = 0;
  playGame();
});

// ===============switch btn function ===========
function changeMode() {
  switchMode.classList.toggle("switch-mode");
  if (switchMode.classList.contains("switch-mode")) {
    originalGame.classList.add("remove-container");
    bonusGame.classList.add("show-container");
  } else {
    originalGame.classList.remove("remove-container");
    bonusGame.classList.remove("show-container");
  }
}

switchMode.addEventListener("click", changeMode);

// ===========rules-btn/closebtn function=============
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

// =====================gameplay function============

const pcChoiceOriginal = [
  { id: "paper", src: "./images/icon-paper.svg" },
  { id: "rock", src: "./images/icon-rock.svg" },
  {
    id: "scissor",
    src: "./images/icon-scissors.svg",
  },
];

const pcChoiceBonus = [
  { id: "paper", src: "./images/icon-paper.svg" },
  { id: "rock", src: "./images/icon-rock.svg" },
  {
    id: "scissor",
    src: "./images/icon-scissors.svg",
  },
  { id: "spock", src: "./images/icon-spock.svg" },
  { id: "lizzard", src: "./images/icon-lizard.svg" },
];

// ==================function play game==============
function playGame() {
  gamePLayBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let originalGameNumber = Math.floor(Math.random() * 3);
      let bonusGameNUmber = Math.floor(Math.random() * 5);
      let userChoice = btn.firstElementChild;
      userDiv.dataset.id = userChoice.id;
      userDiv.innerHTML = `<h2 class="user-title">you picked</h2>
    <div class="circle result-user" id=${userChoice.id}>
      <img src=${userChoice.src} alt="" />
    </div>
    <div class="user-circle-overlay user-win"></div>
        <div class="user-circle-overlay2 user-win"></div>
        <div class="user-circle-overlay3 user-win"></div>`;
      bonusGame.classList.remove("show-container");
      originalGame.classList.add("remove-container");
      resultContainer.classList.add("show-container");
      switchMode.removeEventListener("click", changeMode);
      if (switchMode.classList.contains("switch-mode")) {
        displayPcChoice(pcChoiceBonus, bonusGameNUmber);
      } else {
        displayPcChoice(pcChoiceOriginal, originalGameNumber);
      }

      //   endResult();
    });
  });
}

function displayPcChoice(arr, num) {
  pcDiv.dataset.id = `${arr[num].id}`;
  setTimeout(() => {
    pcDiv.innerHTML = `<h2 class="pc-title">the house picked</h2>
        <div class="circle pc-result" id=${arr[num].id}>
        <img src=${arr[num].src} alt="" />
        </div>
        <div class="circle-overlay pc-win"></div>
        <div class="circle-overlay2 pc-win"></div>
        <div class="circle-overlay3 pc-win"></div>`;
    endResult();
  }, 1000);
  console.log(text.textContent);
}

function endResult() {
  const userId = userDiv.dataset.id;
  const pcId = pcDiv.dataset.id;

  resultTextContainer.classList.add("show-container");
  // ================scissor=============
  if (userId === "scissor" && (pcId === "paper" || pcId === "lizzard")) {
    text.textContent = `you win`;

    //   =============tie=================
  } else if (userId === pcId) {
    text.textContent = `tie`;
    scoreValue.textContent = scoreValue.textContent;
    //   ==========================paper======================
  } else if (userId === "paper" && (pcId === "rock" || pcId === "spock")) {
    text.textContent = `you win`;

    //   ====================ROCK=====================
  } else if (userId === "rock" && (pcId === "scissor" || pcId === "lizzard")) {
    text.textContent = `you win`;

    //   ====================LIZZARD===============================
  } else if (userId === "lizzard" && (pcId === "paper" || pcId === "spock")) {
    text.textContent = `you win`;

    //   =====================SPOCK===============================
  } else if (userId === "spock" && (pcId === "paper" || pcId === "rock")) {
    text.textContent = `you win`;
  } else {
    text.textContent = `you lose`;
  }
}

// =====================play again btn=========
playAgainBtn.addEventListener("click", function () {
  resultContainer.classList.remove("show-container");
  resultTextContainer.classList.remove("show-container");

  userDiv.innerHTML = "";
  pcDiv.innerHTML = "";
  if (switchMode.classList.contains("switch-mode")) {
    bonusGame.classList.add("show-container");
  } else {
    originalGame.classList.remove("remove-container");
  }
  switchMode.addEventListener("click", changeMode);

  playGame();
});

// =============reset btn ================
resetBtn.addEventListener("click", function () {
  scoreValue.textContent = "0";
  resultContainer.classList.remove("show-container");
  resultTextContainer.classList.remove("show-container");

  userDiv.innerHTML = "";
  pcDiv.innerHTML = "";
  if (switchMode.classList.contains("switch-mode")) {
    bonusGame.classList.add("show-container");
  } else {
    originalGame.classList.remove("remove-container");
  }
  switchMode.addEventListener("click", changeMode);

  playGame();
});
