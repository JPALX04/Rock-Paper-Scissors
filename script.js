let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

const buttonContainer = document.querySelector(".uiChoice");
let playAgain = document.querySelector(".playAgain");
playAgain.style.display = "none";

const humanScoreBoard = document.querySelector(".human-score");
const computerScoreBoard = document.querySelector(".computer-score");
computerScoreBoard.textContent = `Machine score: ${computerScore}`;
humanScoreBoard.textContent = `Human score: ${humanScore}`;
let clickHandler;

function gameStart() {
  if (clickHandler) {
    buttonContainer.removeEventListener("click", clickHandler);
  }

  clickHandler = (uiChoice) => {
    if (uiChoice.target.nodeName.toLowerCase() === "img") {
      humanChoice = uiChoice.target.alt.toLowerCase();
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
  let gameResult = document.querySelector(".gameResult");

  if (humanChoice === computerChoice) {
    gameResult.textContent = "This is a draw";
  } else if (humanChoice === "rock") {
    switch (computerChoice) {
      case "paper":
        ++computerScore;
        computerScoreBoard.textContent = `Machine score: ${computerScore}`;
        gameResult.textContent = "You lose! Paper beats Rock";
        break;
      case "scissors":
        ++humanScore;
        humanScoreBoard.textContent = `Human score: ${humanScore}`;
        gameResult.textContent = "You won! Rock beats Scissor!";
        break;
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        ++humanScore;
        humanScoreBoard.textContent = `Human score: ${humanScore}`;
        gameResult.textContent = "You won! Paper beats Rock!";
        break;
      case "scissors":
        ++computerScore;
        computerScoreBoard.textContent = `Machine score: ${computerScore}`;
        gameResult.textContent = "You lose! Scissor beats Paper";
        break;
    }
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "paper":
        ++humanScore;
        humanScoreBoard.textContent = `Human score: ${humanScore}`;
        gameResult.textContent = "You won! Scissor beats Paper";
        break;
      case "rock":
        ++computerScore;
        computerScoreBoard.textContent = `Machine score: ${computerScore}`;
        gameResult.textContent = "You lose! Rock beats Scissor";
        break;
    }
  }
  playGame();
}

// //function to play 5 rounds
function playGame() {
  let playAgain = document.querySelector(".playAgain");
  for (let i = 0; i <= 5; i++) {
    switch (computerScore) {
      case 5:
        let endGame = document.querySelector(".endGame");
        endGame.textContent =
          "You lose! The machines will take control of the world";
        playAgain.style.display = "flex";
        break;
    }
    switch (humanScore) {
      case 5:
        let endGame = document.querySelector(".endGame");
        endGame.textContent = "You've beaten the machine!";
        playAgain.style.display = "flex";
        break;
    }
    if (humanScore <= 5 && computerScore <= 5) {
      gameStart();
    }

    humanScoreBoard.textContent = `Human score: ${humanScore}`;
    computerScoreBoard.textContent = `Machine score: ${computerScore}`;
  }
}
gameStart();
