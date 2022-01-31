let choices = ["rock", "paper", "scissors"];
//let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;

//player is prompted to make a choice
//player enters their choice
//let playerSelection = prompt ("Pick : Rock, Paper or Scissors?","".toLowerCase());
   
//computer makes a choice

/*function computerPlay() {

    let compRandom = Math.floor(Math.random() * choices.length);
    return choices[compRandom];
}*/
   
// round is played, 

function game() {

    let playerSelection = prompt ("Pick : Rock, Paper or Scissors?","".toLowerCase());

    let computerSelection = computerPlay();
    function computerPlay() {

        let compRandom = Math.floor(Math.random() * choices.length);
        return choices[compRandom];
    }

    function playRound(computerSelection, playerSelection){


    if (computerSelection === playerSelection ) {
        return "Its a tie";
     } else if ((computerSelection === "rock" &&playerSelection    === "scissors")) {
        computerScore +=1;
        return "Computer wins. Rock beats Scissors."
    }else if ((computerSelection === "paper" && playerSelection === "rock")) {
        computerScore +=1;
        return "Computer wins. Paper beats Rock";
    }else if ((computerSelection === "scissors" && playerSelection === "paper")){
        computerScore +=1;
        return "Computer wins. Scissors beats Paper";
    }else if ((computerSelection === "scissors" && playerSelection === "rock")) {
        playerScore +=1;
        return "Player wins. Rock beats Scissors.";
    }else if ((computerSelection ==="rock" && playerSelection === "paper")) {
        playerScore +=1;
        return "Player wins. Paper beats Rock";
    }else if ((computerSelection === "paper" && playerSelection === "scissors")) {
        playerScore +=1;
        return (("Player wins. Scissors beats Paper."))
    }else {
       return "Something went wrong.Please try again."
            }
        }   
    
   
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`)
    console.log(playRound(computerSelection, playerSelection));
    console.log (`Computer score is ${computerScore}. Player score is ${playerScore}.`);
        
}

for (let i=1; i<7; i++) {
    game();
}

function winner () {
    if (computerScore > playerScore) {
        return "Computer Wins";
    }else if (playerScore> computerScore) {
        return "Player Wins!";
    }else{
        return "It's a tie!";
    }
}

console.log(winner());















