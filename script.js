let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;
let clickHandler;
let roundGameResult;
let playAgain;

const buttonContainer = document.querySelector(".uiChoice");
const playAgainBTN = document.querySelector(".playAgain");
const humanScoreBoard = document.querySelector(".human-score");
const computerScoreBoard = document.querySelector(".computer-score");
const chooseWeapon = document.querySelector(".chooseWeapon");

let gameResult = document.querySelector(".gameResult");
let endGame = document.querySelector(".endGame");

playAgainBTN.style.display = "none";
computerScoreBoard.textContent = `Machine score: ${computerScore}`;
humanScoreBoard.textContent = `Human score: ${humanScore}`;

function gameStart() {
  playAgainBTN.style.display = "none";

  if (clickHandler) {
    buttonContainer.removeEventListener("click", clickHandler);
  }

  clickHandler = (uiChoice) => {
    if (uiChoice.target.nodeName.toLowerCase() === "img") {
      humanChoice = uiChoice.target.alt.toLowerCase();
      chooseWeapon.style.display = "none";
    }
    computerChoice = getComputerChoice();
    playRound();
  };
  buttonContainer.addEventListener("click", clickHandler);
}

//function to get the computer choice
function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  switch (computerChoice) {
    case 1:
      return (computerChoice = "rock");
      break;
    case 2:
      return (computerChoice = "paper");
      break;
    case 3:
      return (computerChoice = "scissors");
      break;
  }
}

//game round
function playRound() {
  if (humanChoice === computerChoice) {
    gameResult.textContent = `It's a tie, the machine also picked ${humanChoice}`;
  } else if (humanChoice === "rock") {
    switch (computerChoice) {
      case "paper":
        ++computerScore;
        computerScoreBoard.textContent = `Machine score: ${computerScore}`;
        gameResult.textContent = `You lose!  ${computerChoice} beats ${humanChoice}`;
        break;
      case "scissors":
        ++humanScore;
        humanScoreBoard.textContent = `Human score: ${humanScore}`;
        gameResult.textContent = `You won! ${humanChoice} beats ${computerChoice}!`;
        break;
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        ++humanScore;
        humanScoreBoard.textContent = `Human score: ${humanScore}`;
        gameResult.textContent = `You won! ${humanChoice} beats ${computerChoice}!`;
        break;
      case "scissors":
        ++computerScore;
        computerScoreBoard.textContent = `Machine score: ${computerScore}`;
        gameResult.textContent = `You lose!  ${computerChoice} beats ${humanChoice}`;
        break;
    }
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "paper":
        ++humanScore;
        humanScoreBoard.textContent = `Human score: ${humanScore}`;
        gameResult.textContent = `You won! ${humanChoice} beats ${computerChoice}!`;
        break;
      case "rock":
        ++computerScore;
        computerScoreBoard.textContent = `Machine score: ${computerScore}`;
        gameResult.textContent = `You lose!  ${computerChoice} beats ${humanChoice}`;
        break;
    }
  }
  playGame();
}
const arrWin = [
  "You’ve chosen the red pill—reality is yours to control.",
  "The Oracle saw your victory. The system trembles before you.",
  "Like Neo, you bend the rules. The machines never stood a chance.",
  "You’ve unplugged from their game. The Matrix bows to your will.",
  "Morpheus smiles. You’ve shattered their illusion.",
];

const arrLose = [
  "The Agents have you now. Resistance was futile.",
  "The Architect predicted this defeat. The system remains unbroken.",
  "You took the blue pill… and now you’re just another battery.",
  "Agent Smith laughs as he assimilates your strategy.",
  "The machines rewrite your fate. Welcome to the real… as their slave.",
];

// //function to play 5 rounds
function playGame() {
  let playAgain = document.querySelector(".playAgain");
  switch (computerScore) {
    case 5:
      let random = Math.floor(Math.random() * arrLose.length);
      let endTxt = document.createElement("span");
      endTxt.className = "loseTxt";
      endTxt.textContent = `${arrLose[random]}`;
      endGame.appendChild(endTxt);
      playAgain.style.display = "flex";
      newGame();
      break;
  }
  switch (humanScore) {
    case 5:
      let random = Math.floor(Math.random() * arrWin.length);
      let endTxt = document.createElement("span");
      endTxt.className = "winTxt";
      endTxt.textContent = `${arrWin[random]}`;
      endGame.appendChild(endTxt);
      playAgain.style.display = "flex";
      newGame();
      break;
  }
  if (humanScore < 5 && computerScore < 5) {
    gameStart();
  }

  humanScoreBoard.textContent = `Human score: ${humanScore}`;
  computerScoreBoard.textContent = `Machine score: ${computerScore}`;
}

function newGame() {
  buttonContainer.removeEventListener("click", clickHandler);
  if (playAgain) {
    playAgainBTN.removeEventListener("click", playAgain);
  }

  playAgain = (playAgainBTN) => {
    if (playAgainBTN.target.nodeName.toLowerCase() === "button") {
      console.log("test");
      humanScore = 0;
      computerScore = 0;
      humanScoreBoard.textContent = `Human score: ${humanScore}`;
      computerScoreBoard.textContent = `Machine score: ${computerScore}`;
      gameResult.textContent = "   ";
      endGame.textContent = "    ";
      chooseWeapon.style.display = "block";

      gameStart();
    }
  };
  playAgainBTN.addEventListener("click", playAgain);
}

gameStart();
