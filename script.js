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
let tieDetector = "";
function playRound(computerSelection, userSelection) {
    if (userSelection === "Paper" && computerSelection === "Rock" || userSelection === "Rock" && computerSelection === "Scissors" || userSelection === "Scissors" && computerSelection === "Paper") {
        userScore += 1;
        tieDetector = false;
    } else if (userSelection === computerSelection) {
        tieDetector = true;
    } else {
        computerScore += 1;
        tieDetector = false;
    }
} 




//This adds listeners to each button. Takes their innerHTML and assigns it to variable userSelection
//Ones one instance of function computerChoice()
// TODO add call to playRound function

//Gets the div that holds the score
let scoreBox = document.getElementById("score-box");

//displays what the computer chooses
let domCompChoice = document.getElementById("computerSelection");

//displays the user's score
let domUserScore = document.getElementById("domUserScore");

//displays the computer's score
let domComputerScore = document.getElementById("domComputerScore");


let tieParagraph = document.getElementById("tie");
tieParagraph.style.visibility = "hidden";

let userSelection = "";
const buttons = document.querySelectorAll('span');
buttons.forEach((x) => {
    x.addEventListener("click", (x) => {
        userSelection = x.target.innerText;
        computerChoice();
        domCompChoice.textContent = "Computer Chooses:" + ` ${computerSelection}`;




        console.log(userSelection);
        console.log("computer selection is " + computerSelection);
        






        playRound(computerSelection, userSelection);
        if (tieDetector) {
            tieParagraph.style.visibility = "visible"
        } else {
            tieParagraph.style.visibility = "hidden";
        }
        
        domUserScore.textContent = `Your Score: ${userScore}`;
        domComputerScore.textContent = `Computer Score: ${computerScore}`;
        
    });
});













