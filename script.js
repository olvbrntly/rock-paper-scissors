
const computerSelection = computerPlay();
const playerSelection = playerPlay();

//computer selects 
function computerPlay () {

    const option =['rock', 'paper', 'scissors'];

    let random = Math.floor(Math.random()*3);

    console.log(option[random]);
}


// player selects
function playerPlay() {

}