// DONE Function for Computer's Choice of Hand, Randomized
// DONE Button Detection that impliments the game start, and return players choice as a variable to be used in the game function
/* Function that takes player's choice and computer choice, runs a round, determines the winner, and either keeps score or returns score.
    This Function also either displays the score to the DOM, or impliments another secion of code that displays the score to the DOM. */


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

let computerScore = 0;
let userScore = 0;
function playRound(computerSelection, userSelection) {
    if (userSelection === "Paper" && computerSelection === "Rock" || userSelection === "Rock" && computerSelection === "Scissors" || userSelection === "Scissors" && computerSelection === "Paper") {
        userScore += 1;

    } else if (userSelection === computerSelection) {
        console.log("TIE");
    } else {
        computerScore += 1;
    }
} 




//This adds listeners to each button. Takes their innerHTML and assigns it to variable userSelection
//Ones one instance of function computerChoice()
// TODO add call to playRound function
let userSelection = "";
const buttons = document.querySelectorAll('span');
const SCOREBOX = document.getElementById("score-box");
const domCompChoice = document.getElementById("computerSelection");
const domUserScore = document.getElementById("domUserScore");
const domComputerScore = document.getElementById("domComputerScore");
buttons.forEach((x) => {
    x.addEventListener("click", (x) => {
        userSelection = x.target.innerText;
        computerChoice();
        console.log(userSelection);
        console.log("computer selection is " + computerSelection);
        console.log(SCOREBOX);
        domCompChoice.textContent = "Computer Chooses:" + ` ${computerSelection}`;
        playRound(computerSelection, userSelection);
        // return userSelection;
        
    });
});













