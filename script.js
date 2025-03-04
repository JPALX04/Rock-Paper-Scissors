function getComputerChoice() {
  return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice() {
  choice = prompt(
    "choose your weapon: Rock, paper or scissor",
    ""
  ).toLowerCase();

}
