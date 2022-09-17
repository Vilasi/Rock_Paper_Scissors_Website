let scoreBox = document.getElementById('score-box');
let domRound = document.getElementById('round');
let domComputerChoice = document.getElementById('computerSelection');
let domUserScore = document.getElementById('domUserScore');
let domComputerScore = document.getElementById('domComputerScore');
let domUserChoice = document.getElementById('userChoice');
let roundResultsMessage = document.getElementById('tie');

// Compares the computer's score to the player's score.
let computerScore = 0;
let userScore = 0;
let currentRound = 0;

// Chooses the computer's hand based on a randomly chosen number.
let computerSelection = '';

function computerChoice() {
  let selectionArray = ['Rock', 'Paper', 'Scissors'];
  return (computerSelection = selectionArray[Math.floor(Math.random() * 3)]);
}

// UserWon controls the final look and visibility of the message rendered each round - Win, Loss, or Tie
class MessageToUser {
  constructor(variable) {
    this.variable = variable;
  }

  resultsMessage(message, visibility, color) {
    this.variable.textContent = message;
    this.variable.style.visibility = visibility;
    this.variable.style.color = color;
  }
}

let results = new MessageToUser(roundResultsMessage);
// Default state on page load
results.resultsMessage(null, 'hidden', null);

function playRound(computerSelection, userSelection) {
  if (
    (userSelection === 'Paper' && computerSelection === 'Rock') ||
    (userSelection === 'Rock' && computerSelection === 'Scissors') ||
    (userSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    results.resultsMessage('You WON!', 'visible', '#276FBF');
    userScore += 1;
    currentRound += 1;
    return currentRound;
  } else if (userSelection === computerSelection) {
    results.resultsMessage('TIE!', 'visible', 'grey');
    currentRound += 1;
    return currentRound;
  } else {
    results.resultsMessage('You LOST!', 'visible', 'red');
    computerScore += 1;
    currentRound += 1;
    return currentRound;
  }
}

if (!currentRound) {
  domComputerChoice.style.visibility = 'hidden';
  domUserChoice.style.visibility = 'hidden';
}
let userSelection = '';
const buttons = document.querySelectorAll('span');
buttons.forEach((btn) => {
  btn.addEventListener('click', (x) => {
    userSelection = x.target.innerText;
    computerChoice();

    playRound(computerSelection, userSelection);

    if (currentRound) {
      domComputerChoice.style.visibility = 'visible';
      domUserChoice.style.visibility = 'visible';
    }
    domUserChoice.textContent = `You Chose: ${userSelection}`;
    domComputerChoice.textContent = `Computer Chooses: ${computerSelection}`;
    domRound.textContent = `Round: ${currentRound}`;
    domUserScore.textContent = `Your Score: ${userScore}`;
    domComputerScore.textContent = `Computer Score: ${computerScore}`;
  });
});
