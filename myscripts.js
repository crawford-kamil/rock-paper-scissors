     /*
     function randomNumber() {
        return Math.floor(Math.random() * 100);
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
*/
    
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber < 34) {
            return "Paper"
    } else if (randomNumber > 66) {
        return "Rock"
    } else {
        return "Scissors"
    }
}

    
    let computerChoice = getComputerChoice();


    function getPlayerChoice() {
        let playerChoice = prompt( "Choose Rock, Paper, or Scissors" );
        return playerChoice.charAt( 0 ).toUpperCase() + playerChoice.slice( 1 ).toLowerCase();
    }
    
    function playRound() {
        let playerChoice = getPlayerChoice();
        let playerWin = playerChoice + " beats " + computerChoice + "." + " You win.";
        let playerLoss = playerChoice + " loses to " + computerChoice + "." + " You lose.";
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
            alert( "Invalid option. Please choose Rock, Paper, or Scissors." )
        }
    }
   