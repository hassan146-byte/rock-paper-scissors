// ROCK PAPER SCISSORS

// Declared variable for computer choice randomisation and variables to call elements in html
const choices = ["rock", "paper", "scissors"];
       
let humanScore = 0;
let computerScore = 0;
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const finalResult = document.getElementById("finalResult")

/* Removed original nested function for playRound and made it all one function to ease the 
calling of the function for the event handler */

function playGame(humanChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(humanChoice);
    console.log(computerChoice);
    let winner = humanChoice + " & " + computerChoice;
    let result = "";

    if (winner === "rock & paper" || winner === "paper & scissors" || winner === "scissors & rock") {
        result = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    else if (winner === "paper & rock" || winner === "scissors & paper" || winner === "rock & scissors") {
        result = "You Win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    else {
        result = "It's a tie!";
    }

    playerDisplay.textContent = `PLAYER: ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}  | Score:  ${humanScore}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}  | Score:  ${computerScore}`;
    resultDisplay.textContent = result;
    
    if (humanScore == 5 && humanScore > computerScore) {
        finalResult.textContent = "GAME WINNER: You Win the GAME!";
    }  
    else if (computerScore == 5 && computerScore > humanScore) {
        finalResult.textContent = "GAME WINNER: Computer WINS!";
    }
}