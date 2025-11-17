const CHOICES = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const i = (Math.random() * 3) | 0;
    return CHOICES[i];
}

computer = getComputerChoice();
console.log(computer);