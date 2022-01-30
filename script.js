let choices = ["rock", "paper", "scissors"];
let computerSelection = computerPlay();

//player is prompted to make a choice
//player enters their choice
let playerSelection = prompt ("Pick : Rock, Paper or Scissors?","".toLowerCase());
   
//computer makes a choice

function computerPlay() {

    let compRandom = Math.floor(Math.random() * choices.length);
    return choices[compRandom];
}
   
// round is played, 
function playRound(computerSelection, playerSelection){
    if (computerSelection === playerSelection ) {
        return "Its a tie";
    } else if ((computerSelection === "rock" && playerSelection === "scissors")) {
        return "Computer wins. Rock beats Scissors.";
    }else if ((computerSelection === "paper" && playerSelection === "rock")) {
        return "Computer wins. Paper beats Rock";
    }else if ((computerSelection === "scissors" && playerSelection === "paper")){
        return "Computer wins. Scissors beats Paper";
    }else if ((computerSelection === "scissors" && playerSelection === "rock")) {
        return "Player wins. Rock beats Scissors.";
    }else if ((computerSelection ==="rock" && playerSelection === "paper")) {
        return "Player wins. Paper beats Rock";
    }else if ((computerSelection === "paper" && playerSelection === "scissors")) {
        return (("Player wins. Scissors beats Paper."))
    }else {
       return "Something went wrong.Please try again."
    }
    }

    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`)
    console.log(playRound(computerSelection, playerSelection));
//
























