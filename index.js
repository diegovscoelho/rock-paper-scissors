function getComputerChoice() {
    let humanChoice = Math.floor(Math.random() * 3) + 1;
    if(humanChoice === 1) {
        return "pedra";
    } else if(humanChoice === 2) {
        return "papel";
    } else {
        return "tesoura";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Escolha uma opção entre pedra, papel e tesoura:");
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        if(humanSelection.toLowerCase() === "pedra" && computerSelection.toLowerCase() === "tesoura") {
            console.log("Parabéns! Pedra ganha de tesoura.");
            humanScore += 1;
        } else if(humanSelection.toLowerCase() === "papel" && computerSelection.toLowerCase() === "pedra") {
            console.log("Parabéns! Papel ganha de pedra.");
            humanScore += 1;
        } else if(humanSelection.toLowerCase() === "tesoura" && computerSelection.toLowerCase() === "papel") {
            console.log("Parabéns! Tesoura ganha de papel.");
            humanScore += 1;
        } else if(humanSelection.toLowerCase() === "pedra" && computerSelection.toLowerCase() === "papel") {
            console.log("Você perdeu! Papel ganha de pedra.");
            computerScore += 1;
        } else if(humanSelection.toLowerCase() === "papel" && computerSelection.toLowerCase() === "tesoura") {
            console.log("Você perdeu! Tesoura ganha de papel.");
            computerScore += 1;
        } else {
            console.log("Você perdeu! Pedra ganha de tesoura.");
            computerScore += 1;
        }
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if(humanScore > computerScore) {
        return console.log("Parabéns, você ganhou no geral!");
    } else {
        return console.log("Você perdeu no geral!");
    }
}

playGame();
