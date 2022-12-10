//get random number between 0 and 2
function getComputerChoice(){
    Choices = ["rock","paper","scissors"]
    return Choices[Math.floor(Math.random() * 3)]
}

//getComputerChoice()
//checking user's choice with computer's
function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        console.log("it's a draw")
    }else if((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")){
        console.log("You lose " + computerSelection + " beats " + playerSelection)
    }else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ){
        console.log("You win " + playerSelection + " beats " + computerSelection)
    }else{
        console.log("Please enter a correct input")
    }
    
}

const player = "rockyou"
console.log(player)
let computer = getComputerChoice()
console.log(computer)
//play five times
playRound(player,computer)