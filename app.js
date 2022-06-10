let choices = ["rock", "paper", "scissors"];

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const sciBtn = document.querySelector('.scissors');
const playBtn = document.querySelector('.play');
const overlay = document.querySelector('.play-button')
const cputext = document.querySelector('.cpu');
const playertext = document.querySelector('.player');
const title = document.querySelector('.title');

var cpuscore = 0;
var playerScore = 0;

playBtn.addEventListener('click', () => {
    overlay.classList.toggle("hide");
    playBtn.disabled = 'disabled';
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
        console.log('tie')
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
        title.textContent = "It was a tie.";
    } else if (user === "loss") {
        cpuscore++;
        title.textContent = "You lost.";
        cputext.textContent = `Computer Score: ${cpuscore}`;
    } else {
        playerScore++;
        title.textContent = "You won.";
        playertext.textContent = `Player Score: ${playerScore}`;
    }
}

