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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const show = document.querySelector("#show");

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    
    rock.addEventListener("click", () => {
        humanSelection = "pedra";
        computerSelection = getComputerChoice();
        playRound();
    });

    paper.addEventListener("click", () => {
        humanSelection = "papel";
        computerSelection = getComputerChoice();
        playRound();
    });

    scissors.addEventListener("click", () => {
        humanSelection = "tesoura";
        computerSelection = getComputerChoice();
        playRound();
    });

    function playRound() {
        if (humanSelection === computerSelection) {
            console.log(`Empate! Ambos escolheram ${humanSelection}.`);
        } else if (humanSelection === "pedra" && computerSelection === "tesoura" ||
                   humanSelection === "papel" && computerSelection === "pedra" ||
                   humanSelection === "tesoura" && computerSelection === "papel") {
            console.log(`Parabéns! ${humanSelection} ganha de ${computerSelection}.`);
            humanScore += 1;
        } else {
            console.log(`Você perdeu! ${computerSelection} ganha de ${humanSelection}.`);
            computerScore += 1;
        }

        if((humanScore || computerScore) === 5) {
            if(humanScore === 5) {
                console.log("Parabéns, você venceu!");
            } else {
                console.log("Que pena! Você perdeu");
            }
        }
    }

    show.addEventListener("click", () => {
        if(humanScore > computerScore) {
            console.log(`Parabéns, você está ganhando! ${humanScore} ${computerScore}`);
        } else if(computerScore > humanScore) {
            console.log(`Que pena! Você está perdendo. ${humanScore} a ${computerScore}`);
        }
    });    
}

playGame();
