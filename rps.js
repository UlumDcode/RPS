let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3);
  switch (computerChoice) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

const getHumanChoice = () => {
  getComputerChoice();
  humanChoice = prompt("rock, paper, scissors").toLowerCase();
  return humanChoice;
};

function playRound() {
  getHumanChoice();

  if (humanChoice == computerChoice) {
    alert(
      `you choice is ${humanChoice} and computer choice is ${computerChoice}, it's a tie`,
    );
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "rock")
  ) {
    computerScore++;
    alert(
      `you lose, computer choice is ${computerChoice} and your choice is ${humanChoice}`,
    );
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    alert(
      `you win, your choice is ${humanChoice} and computer choice is ${computerChoice}`,
    );
  } else {
    alert(`invalid input`);
  }
}

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  if (humanScore < computerScore) {
    alert(
      `you Lose, your score is ${humanScore} and computer score is ${computerScore}`,
    );
  } else if (humanScore > computerScore) {
    alert(
      `you win, your score is ${humanScore} and computer score is ${computerScore}`,
    );
  } else {
    alert(
      `tie, your score is ${humanScore} and computer score is ${computerScore}`,
    );
  }
};

playGame();
