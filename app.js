function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber)
    if (randomNumber == 0) {
        return "rock";
    } else if(randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    };

}

console.log(getComputerChoice());