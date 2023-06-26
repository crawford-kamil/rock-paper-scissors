     function randomNumber() {
        return Math.floor(Math.random() * 1);
    }


    function getComputerChoice() {
        if (randomNumber() < 34) {
            return "Paper"
    } else if (randomNumber() > 66) {
        return "Rock"
    } else {
        return "Scissors"
    }
}
    
    /*
    1. Make playerPrompt and invalidOption into functions. As constants they ask for prompts, and
    alert the user without being called.

    */

    let computerChoice = getComputerChoice();
    
    /*
    let playerWin = "You win this round. " + playerChoice + " beats " + computerChoice + ".";
    let playerLoss = "You lose this round. " + playerChoice + " loses to " + computerChoice + ".";
    let invalidOption = alert( "Invalid option, please enter Rock, Paper, or Scissors." )
    */


    function getPlayerInput() {   
        let userChoice = prompt( "Choose Rock, Paper, or Scissors" );
        return userChoice;
    }
        
    function getPlayerChoice() {
        let string = getPlayerInput();
        return string.charAt( 0 ).toUpperCase() + string.slice( 1 ).toLowerCase();
    }

    /*
    This is the logic for the playRound function. Delete once the function is written.

        if( computerChoice === playerChoice ) {
            alert( "It's a tie. " + playerChoice + " ties with " + computerChoice )    
        } else if( playerChoice === "Rock" && computerChoice === "Scissors" ) {
            alert( playerWin )
        } else if( playerChoice === "Scissors" && computerChoice === "Paper" ) {
            alert( playerWin )
        } else if( playerChoice === "Paper" && computerChoice === "Rock" ) {
            alert( playerWin )
        } else if( playerChoice === "Rock" && computerChoice === "Paper" ) {
            alert( playerLoss )
        } else if( playerChoice === "Scissors" && computerChoice === "Rock" ) {
            alert( playerLoss)
        } else if( playerChoice === "Paper" && computerChoice === "Scissors" ) {
            alert( playerLoss)
        } else {
            invalidOption
        } 
    */