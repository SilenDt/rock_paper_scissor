
let playerSelect = prompt("Choose a weapon")
let computerSelect = getComputerChoice();

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    console.log("random number: " + randomNumber);
    if (randomNumber == 0) {
        return "rock";
    } else if(randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    };

}

function playRound(playerSelect, computerSelect) {
    if (playerSelect == "rock" && computerSelect == "rock") {
        return "It's a DRAW";
    }
    if (playerSelect == "paper" && computerSelect == "paper") {
        return "It's a DRAW";
    }
    if (playerSelect == "scissors" && computerSelect == "scissors") {
        return "It's a DRAW";
    } else if (playerSelect == "rock" && computerSelect == "paper") {
        return "COMPUTER WINS";
    } else if (playerSelect == "rock" && computerSelect == "scissors") {
        return "YOU WIN!";
    } else if (playerSelect == "paper" && computerSelect == "rock") {
        return "YOU WIN";
    } else if (playerSelect == "paper" && computerSelect == "scissors") {
        return "COMPUTER WINS";
    } else if (playerSelect == "scissors" && computerSelect == "rock") {
        return "COMPUTER WINS";
    } else if (playerSelect == "scissors" && computerSelect == "paper") {
        return "YOU WIN!";
    } else {
        return "SOMETHING WENT WRONG"
    }
}

console.log("computer played: " + computerSelect);
console.log("player played: " + playerSelect);
console.log("round result: " + playRound(playerSelect, computerSelect));

function playGame() {

    for (let i = 0; i < 5; i++) {
        let computerScore = 0;
        let playerScore = 0;
        console.log("Player selects: " + playerSelect);
        console.log("Computer selects: " + computerSelect)

        let result = playRound(playerSelect, computerSelect);
        console.log(result);

        if (result === "YOU WIN!") {
            playerScore++;
        } else if (result === "COMPUTER WINS") {
            computerScore++;
        }
    }
}

console.log("Final Scores:");
console.log("Player: " + playerScore);
console.log("Computer: " + computerScore);
console.log(playGame());

    