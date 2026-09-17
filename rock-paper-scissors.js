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

let result = getComputerChoice();
console.log(result);

/* getHumanChoice 
Prompt user input
Ask "select rock, paper, or scissors"
return user input 
*/

function getHumanChoice() {
    let choice = prompt("select rock, paper, or scissors");
    return choice;
}

let ask = getHumanChoice();
console.log(ask);

const humanScore = 0;
const computerScore = 0;

/* playRound 

