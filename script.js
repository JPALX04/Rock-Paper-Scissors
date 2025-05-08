let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

document.body.addEventListener("click", (e) => {
  if (e.target.nodeName.toLowerCase() === "button") {
    humanChoice = e.target.textContent.toLowerCase();
    computerChoice = getComputerChoice();

    playRound();
  }
});

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
      return (computerChoice = "scissor");
      break;
  }
}

//game round
function playRound() {
  // console.log(computerChoice); //<== test if the logic was correct
  // console.log(humanChoice);

  if (humanChoice === computerChoice) {
    console.log("This is a draw");
  } else if (humanChoice === "rock") {
    switch (computerChoice) {
      case "paper":
        ++computerScore;
        console.log("You lose! Paper beats Rock");

        break;
      case "scissor":
        ++humanScore;
        console.log("You won! Rock beats Scissor!");

        break;
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        ++humanScore;
        console.log("You won! Paper beats Rock!");

        break;
      case "scissor":
        ++computerScore;
        console.log("You lose! Scissor beats Paper");
    }
  } else if (humanChoice === "scissor") {
    switch (computerChoice) {
      case "paper":
        ++humanScore;
        console.log("You won! Scissor beats Paper");

        break;
      case "rock":
        ++computerScore;
        console.log("You lose! Rock beats Scissor");
    }
  }
  // playGame();
}

//function to get the human choice
// function getHumanChoice() {
//   humanChoice = e.target;

//   switch (humanChoice) {
//     case "rock":
//       return humanChoice;
//       break;
//     case "paper":
//       return humanChoice;
//       break;
//     case "scissor":
//       return humanChoice;
//       break;
//     default:
//       alert("Type one of the options!");
//       getHumanChoice();
//   }
// }

//function to play 5 rounds

// function playGame() {
//   if (humanScore < 5 && computerScore < 5) {
//     console.log(`Your score is: ${humanScore}`);
//     console.log(`The Machine score is: ${computerScore}`);
//     playRound();
//   } else if (humanScore === 5) {
//     alert("You've beaten the machine!");
//     humanScore = 0;
//     computerScore = 0;
//     console.clear();
//     playGame();
//   } else if (computerScore === 5) {
//     alert("You lose! The machines will take control of the world");
//     humanScore = 0;
//     computerScore = 0;
//     console.clear();
//     playGame();
//   }
// }
// playGame();
