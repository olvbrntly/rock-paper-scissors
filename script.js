let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const sicssorsButton = document.getElementById('scissors');


function clickListener(event) {
    const playerSelection = event.target.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`Player chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));
    
}

rockButton.addEventListener("click", clickListener);
paperButton.addEventListener("click", clickListener);
sicssorsButton.addEventListener("click", clickListener);

   

//computer makes a choice
    
    function computerPlay() {
    
        let compRandom = Math.floor(Math.random() * choices.length);
        return choices[compRandom];
    }
    
// round is played, 

    function playRound(playerSelection, computerSelection){

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
    
  
        


