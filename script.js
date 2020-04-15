// Chooses the computer's hand based on a randomly chosen number.
let computerSelection = "";
function computerChoice() {
    let computerNumberSelection = Math.floor(Math.random() * 3) + 1;
    if (computerNumberSelection === 1) {
        computerSelection = "Rock";
    } else if (computerNumberSelection === 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}

// Compares the computer's score to the player's score.
let computerScore = 0;
let userScore = 0;
let currentRound = 0;
let tieDetector = "";
function playRound(computerSelection, userSelection) {
    if (userSelection === "Paper" && computerSelection === "Rock" || userSelection === "Rock" && computerSelection === "Scissors" || userSelection === "Scissors" && computerSelection === "Paper") {
        userScore += 1;
        tieDetector = false;
        currentRound += 1;
    } else if (userSelection === computerSelection) {
        tieDetector = true;
        currentRound += 1;
    } else {
        computerScore += 1;
        tieDetector = false;
        currentRound += 1;
    }
} 

// Gets the div that holds the score.
let scoreBox = document.getElementById("score-box");

// Displays the current round.
let domRound = document.getElementById("round");

// Displays what the computer chooses.
let domCompChoice = document.getElementById("computerSelection");

// To display the user's score.
let domUserScore = document.getElementById("domUserScore");

// To display the computer's score.
let domComputerScore = document.getElementById("domComputerScore");

// To display the tie message.
let tieParagraph = document.getElementById("tie");
tieParagraph.style.visibility = "hidden";

let userSelection = "";
const buttons = document.querySelectorAll('span');
buttons.forEach((x) => {
    x.addEventListener("click", (x) => {
        userSelection = x.target.innerText;
        computerChoice();
        domCompChoice.textContent = "Computer Chooses:" + ` ${computerSelection}`;
        playRound(computerSelection, userSelection);
        if (tieDetector) {
            tieParagraph.style.visibility = "visible"
        } else {
            tieParagraph.style.visibility = "hidden";
        }
        domRound.textContent = `Round: ${currentRound}`;
        domUserScore.textContent = `Your Score: ${userScore}`;
        domComputerScore.textContent = `Computer Score: ${computerScore}`;
        
    });
});













