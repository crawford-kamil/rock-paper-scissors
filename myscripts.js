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
    
    let computerChoice = getComputerChoice();


    function getPlayerInput() {   
        let userInput = prompt( "Choose Rock, Paper, or Scissors" );
        return userInput;
    }
        
    function getPlayerChoice() {
        let initialCaseUserInput = getPlayerInput();
        return initialCaseUserInput.charAt( 0 ).toUpperCase() + initialCaseUserInput.slice( 1 ).toLowerCase();
    }

    function notifyofInvalidInput() {
        alert( "Invalid option, please enter Rock, Paper, or Scissors." )
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
        }
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