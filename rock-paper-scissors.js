/* getComputerChoice
Use Math.random * 100 + 1 to give number between 1 and 100
    if numbergenerator < 33, return "rock"
    elif ComputerChoice >= 33, and < 66, return "paper"
    else ComputerChoice >= 66, return "scissors"
*/

function getComputerChoice() {
    let numbergenerator = Math.floor(Math.random() * 100) + 1;

        if (numbergenerator < 33) {
            return "rock";
    } 
            else if (numbergenerator >= 33 && numbergenerator < 66) {
                return "paper";
    }
            else {
                return "scissors";
    }
}

/* getHumanChoice 
Prompt user input
Ask "select rock, paper, or scissors"
return user input 
*/

function getHumanChoice() {
    let choice = prompt("select rock, paper, or scissors");
    return choice;
}

const humanScore = 0;
const computerScore = 0;


/* playRound 
function playRound(humanChoice, computerChoice)
make capitalisation not matter with return humanChoice.toLowerCase();
let winner = humanChoice + " & " + computerChoice
capture all losing scenarios 
if winner = "rock & paper" || winner = "paper & scissors" || winner = "scissors & rock" 
return "You lose! " + computerChoice + " beats " + humanChoice  
repeat else if statements for winning game scenarios
else 
    return "It's a tie!"
console.log(winner)
*/

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    console.log(computerChoice)
    let winner = humanChoice + " & " + computerChoice;
    
    if (winner === "rock & paper" || winner === "paper & scissors" || winner === "scissors & rock") { 
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }        
    else if (winner === "paper & rock" || winner === "scissors & paper" || winner === "rock & scissors") {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++;  
    }
    else {
        console.log("It's a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

/* playGame
humanScore
computerScore
let n = 0
while (n < 6) 
n++
playRound(getHumanChoice, getComputerchoice)
*/

function playGame() {
    
}
