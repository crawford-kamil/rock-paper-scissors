    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 1);
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
    
        let playerWins = 0;
        let computerWins = 0;

        function addPlayerWins() {
            return playerWins + 1
        }

        function addComputerWins() {
            return computerWins + 1
        }

    function playRound() {
        let playerChoice = getPlayerChoice();
        let playerWin = playerChoice + " beats " + computerChoice + "." + " You win this round. " + "Player: " + addPlayerWins() + " Computer: " + computerWins ;
        let playerLoss = playerChoice + " loses to " + computerChoice + "." + " You lose this round. " + "Player: " + playerWins + " Computer: " + addComputerWins() ;
        if( computerChoice === playerChoice ) {
            alert( "It's a tie. " + playerChoice + " ties with " + computerChoice )
        } else if( playerChoice === "Rock" && computerChoice === "Scissors" 
            || playerChoice === "Scissors" && computerChoice === "Paper" 
            || playerChoice === "Paper" && computerChoice === "Rock" ) {
            playerWins++;
            alert( playerWin );
        } else if( playerChoice === "Rock" && computerChoice === "Paper" 
            || playerChoice === "Scissors" && computerChoice === "Rock" 
            || playerChoice === "Paper" && computerChoice === "Scissors" ) {
            computerWins++;
                        alert( playerLoss);
        } else {
            alert( "Invalid option. Please choose Rock, Paper, or Scissors." );
        }
    }
    
    
        let playerScore = 0;
        let computerScore = 0;

    function playGame() {
        for( let i = 0; i < 5; i++ ) {
            playerWins >= 3 ? 
            alert( "You've won the game!" ) :
            computerWins >= 3 ? 
            alert( "You've lost the game." ) :
            playRound()
    }
    }