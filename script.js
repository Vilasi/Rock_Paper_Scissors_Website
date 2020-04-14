// DONE Function for Computer's Choice of Hand, Randomized
// DONE Button Detection that impliments the game start, and return players choice as a variable to be used in the game function
/* Function that takes player's choice and computer choice, runs a round, determines the winner, and either keeps score or returns score.
    This Function also either displays the score to the DOM, or impliments another secion of code that displays the score to the DOM. */


let computerSelection = "";
function computerChoice() {
    let computerNumberSelection = Math.floor(Math.random() * 3) + 1;
    if (computerNumberSelection === 1) {
        computerSelection = "rock";
    } else if (computerNumberSelection === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

//This adds listeners to each button. Takes their innerHTML and assigns it to variable userSelection
//Ones one instance of function computerChoice()
// TODO add call to playRound function
const buttons = document.querySelectorAll('span');
let userSelection = "";
buttons.forEach((x) => {
    x.addEventListener("click", (x) => {
        userSelection = x.target.innerText;
        computerChoice();
        console.log(userSelection);
        console.log("computer selection is " + computerSelection);
        
        // return userSelection;
        
    });
});

/* function playRound(computerSelection, userSelection) {
    if 
} */












