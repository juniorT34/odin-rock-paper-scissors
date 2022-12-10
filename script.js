//get random number between 0 and 2
function getComputerChoice(){
    Choices = ["rock","paper","scissors"]
    return Choices[Math.floor(Math.random() * 3)]
}
let score1 = 0
let score2 = 0
//checking user's choice with computer's
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        console.log("it's a draw")
    }else if((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")){
        console.log("You lose " + computerSelection + " beats " + playerSelection)
        score1++
    }else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") ){
        console.log("You win " + playerSelection + " beats " + computerSelection)
        score2++
    }else{
        console.log("Please enter a correct input")
    }
    
}

//play five times 
function game(){
    for(let i = 0 ; i >5; i++){
        const player = "rock"
        let computer = getComputerChoice()
        playRound(player,computer)
    }
    //score
    if(score1 > score2){
        console.log("The winner is the computer with a score of " + score1 + " over " + score2)
    }else if(score2 > score1){
        console.log("The winner is the player with a score of " + score2 + " over " + score1)
    }else{
        console.log("it's a draw, no winner")
    }
}
//console.log(player)
//console.log(computer)
game()
