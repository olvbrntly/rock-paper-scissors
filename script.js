///Variable and DOM ----------------------------------------



let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const sicssorsButton = document.getElementById('scissors');
const choiceMade = document.getElementById('choice-made');
const roundWinner = document.getElementById('round-winner');
const gameWinner = document.getElementById('game-winner');
const score = document.getElementById('score');
const playAgain = document.getElementById ('play-again');
const beats = {
    paper:'rock',
    scissors : 'paper',
    rock:'scissors'
};


rockButton.addEventListener("click", clickListener);
paperButton.addEventListener("click", clickListener);
sicssorsButton.addEventListener("click", clickListener);

//buttons
function clickListener(event) {
    const playerSelection = event.target.id;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    finishedGame(); 
}
    // console.log(`Player chose ${playerSelection}`);
    // console.log(`Computer chose ${computerSelection}`);




//GAME ---------------------------------------------------- 



//computer makes a choice 
    function computerPlay() {
    
        let compRandom = Math.floor(Math.random() * choices.length);
        return choices[compRandom];
    }
    
//round is played OPTIMIZED ------------------------------------
function playRound(playerSelection, computerSelection) {
    if (beats[playerSelection] === computerSelection ){
        playerScore++;
        choiceMade.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}`;
        roundWinner.textContent = 'You Win!';
        score.textContent = ` Your score: ${playerScore}. Computer Score ${computerScore}`;
    }else if (beats[computerSelection] === playerSelection ) {
        computerScore++;
        choiceMade.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}`;
        roundWinner.textContent = 'Computer Wins!';
        score.textContent = ` Your score: ${playerScore}. Computer Score ${computerScore}`;
    }else{
        choiceMade.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}`;
        roundWinner.textContent = 'It\'s a tie!';
        score.textContent = ` Your score: ${playerScore}. Computer Score ${computerScore}`;
    }
}

// winner is declared
function finishedGame() {
     if(playerScore === 5){
        gameWinner.textContent = "Congratulations! YOU WIN!";
         reset();
        
     }else if (computerScore === 5){
         gameWinner.textContent = "Computer Wins. Try again?"
         reset();   
     }
};




//reset game
function reset() {
    choiceMade.textContent = " ";
    roundWinner.textContent = "";
    score.textContent = "";
    playerScore = 0;
    computerScore = 0;
}

// round is played (old code) ----------------------------------

    // function playRound(playerSelection, computerSelection){

    // if (computerSelection === playerSelection ) {
    //     roundWinner.textContent = 'It\'s a tie!'
    //  } else if ((computerSelection === "rock" &&playerSelection    === "scissors")) {
    //     computerScore +=1;
    //     roundWinner.textContent = `Computer Wins: ${computerSelection} beats ${playerSelection}`;
    // }else if ((computerSelection === "paper" && playerSelection === "rock")) {
    //     computerScore +=1;
    //     roundWinner.textContent = `Computer Wins: ${computerSelection} beats ${playerSelection}`;
    // }else if ((computerSelection === "scissors" && playerSelection === "paper")){
    //     computerScore +=1;
    //     roundWinner.textContent = `Computer Wins: ${computerSelection} beats ${playerSelection}`;
    // }else if ((computerSelection === "scissors" && playerSelection === "rock")) {
    //     playerScore +=1;
    //     roundWinner.textContent = `Player Wins: ${playerSelection} beats ${computerSelection}`;
    // }else if ((computerSelection ==="rock" && playerSelection === "paper")) {
    //     playerScore +=1;
    //     roundWinner.textContent = `Player Wins: ${playerSelection} beats ${computerSelection}`;
    // }else if ((computerSelection === "paper" && playerSelection === "scissors")) {
    //     playerScore +=1;
    //     roundWinner.textContent = `Player Wins: ${playerSelection} beats ${computerSelection}`;
    // }else {
    //    return "Something went wrong.Please try again."
    //         }
    //     }