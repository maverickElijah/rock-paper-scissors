let points = 0;
for (let i = 0; i < 5; i++){
    let userChoice = prompt("Enter rock, paper, or scissors ");
    let computerChoice = getComputerChoice();
    console.log("Points: " + points + "\nYou chose: " + userChoice + 
"\nComputer chose: " + computerChoice + "\n" + getResults(userChoice, computerChoice));
}

function getComputerChoice(){
    let i = getRndInteger(1, 4);
    if (i == 1){
        return "rock";
    }
    if (i == 2){
        return "paper";
    }
    if (i == 3){
        return "scissors";
    }
}

function getResults(userChoice, computerChoice) {
    if (userChoice == computerChoice){
        return "Tie!";
    }
    if (userChoice == "rock" && computerChoice == "paper"){
        return "Lose!";
    }
    if (userChoice == "rock" && computerChoice == "scissors"){
        points++;
        return "Win!";
    }

    if (userChoice == "paper" && computerChoice == "scissors"){
        return "Lose!";
    }
    if (userChoice == "paper" && computerChoice == "rock"){
        points++;
        return "Win!";
    }

    if (userChoice == "scissors" && computerChoice == "rock"){
        return "Lose!";
    }
    if (userChoice == "scissors" && computerChoice == "paper"){
        points++;
        return "Win!";
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }