let choices = ["rock", "paper", "scissors"];

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const sciBtn = document.querySelector('.scissors');
const playBtn = document.querySelector('.play');
const overlay = document.querySelector('.play-button')

playBtn.addEventListener('click', () => {
    overlay.classList.toggle("hide");
    console.log('hi')
});

const btnPlay = event => {
    const btnClass = event.target.classList[1];
    if (btnClass == "rock") play('rock', computerPlay());
    else if (btnClass == "paper") play('paper', computerPlay());
    else play('scissors', computerPlay());
}

rockBtn.addEventListener('click', btnPlay);
paperBtn.addEventListener('click', btnPlay);
sciBtn.addEventListener('click', btnPlay);


function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function play(userChoice, computerPlay) {
    userChoice = userChoice.toLowerCase();
    let computerChoice = computerPlay;
    if (userChoice === computerChoice) {
        displayResult("tie", null);
    } else if (userChoice === "paper" && computerChoice === "rock") {
        displayResult("paper", "rock");
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        displayResult("rock", "scissors");
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        displayResult("scissors", "paper");
    } else {
        displayResult("loss", null);
    }
}

function displayResult(user, cpu) {
    let result = "";
    if (user === "tie") {
        console.log("tie");
    } else if (user === "loss") {
        console.log("loss");
    } else {
        console.log("win");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(play(userChoice, computerPlay));
    }
}
