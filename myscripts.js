    function getComputerChoice() {
        if (randomNumber() < 34) {
            return "Paper"
    } else if (randomNumber() > 67) {
        return "Rock"
    } else {
        return "Scissors"
    }
}
    
    
    function randomNumber() {
        return Math.floor(Math.random() * 100);
    }

    let computerChoice = getComputerChoice();

    let playerprompt = prompt("Choose Rock, Paper, or Scissors");

    let playerChoice = playerprompt.charAt( 0 ).toUpperCase() + playerprompt.slice( 1 ).toLowerCase();
    let playerWin = "You win. " + playerChoice + " beats " + computerChoice;
    let playerLoss = "You lose. " + playerChoice + " loses to " + computerChoice;

    if (computerChoice === playerChoice) {
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
            alert( "Invalid option, please enter Rock, Paper, or Scissors")
        }


