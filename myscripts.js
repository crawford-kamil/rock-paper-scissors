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
    
    /*
    function ternaryPlayRound() { 
        let playerChoice = getPlayerChoice();
        let playerWin = playerChoice + " beats " + computerChoice + "." + " You win.";
        let playerLoss = playerChoice + " loses to " + computerChoice + "." + " You lose.";
    */    
    
        let playerWins = 0;
        let computerWins = 0;

    function playRound() {
        let playerChoice = getPlayerChoice();
        let playerWin = playerChoice + " beats " + computerChoice + "." + " You win.";
        let playerLoss = playerChoice + " loses to " + computerChoice + "." + " You lose.";
        if( computerChoice === playerChoice ) {
            alert( "It's a tie. " + playerChoice + " ties with " + computerChoice )
        } else if( playerChoice === "Rock" && computerChoice === "Scissors" 
            || playerChoice === "Scissors" && computerChoice === "Paper" 
            || playerChoice === "Paper" && computerChoice === "Rock" ) {
            alert( playerWin );
            playerWins++;
        } else if( playerChoice === "Rock" && computerChoice === "Paper" 
            || playerChoice === "Scissors" && computerChoice === "Rock" 
            || playerChoice === "Paper" && computerChoice === "Scissors" ) {
            alert( playerLoss);
            computerWins++;
        } else {
            alert( "Invalid option. Please choose Rock, Paper, or Scissors." );
        }
    }
    
   
    function playGame() {

        function trackPlayerWins(playerWins, ) {
            for( let i = 0; i <= 3; i++ ) {
                playerWins += 1;
                return playerWins;
            }
        }
        playRound();
    }
    