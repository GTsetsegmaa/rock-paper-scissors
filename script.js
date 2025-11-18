const RANDOM = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let i = (Math.random() * 3) | 0;
    return RANDOM[i];
}


function getHumanChoice() {
    while (true) {
        let input = window.prompt("Pick (Rock, Paper, or Scissors:");
        let choice = input.toLowerCase().trim();
        return choice;
    }
}


function playRound(humanChoice, computerChoice) {
    let score = {player: 0, computer: 0, draws: 0}

    if (humanChoice == computerChoice) {
        console.log("Tie!");
        score.draws++;
    }

    else if (humanChoice === "paper" && computerChoice === "rock" 
        || humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        score.player++;
    }

    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        score.computer++;
    }

    return score;
}


function playGame() {
    for (let i = 0; i < 5; i++) {
        let player = getHumanChoice();
        let computer = getComputerChoice();

        points = playRound(player, computer);
        console.log(points);
    }
}

playGame();