// let choices = ["rock", "paper", "scissors"];
// // let userChoice = document.querySelector("userInputer");
// let userChoice = prompt("Choose rock, paper, or scissors. Be wise");

// function computerPlay() {
//     let choice = Math.floor(Math.random() * 2);
//     return choices[choice];
// }

// function play(userChoice, computerPlay) {
//     userChoice = userChoice.toLowerCase();
//     let computerChoice = computerPlay;
//     if (userChoice === computerChoice) {
//         displayResult("tie", null);
//     } else if (userChoice === "paper" && computerChoice === "rock") {
//         displayResult("paper", "rock");
//     } else if (userChoice === "rock" && computerChoice === "scissors") {
//         displayResult("rock", "scissors");
//     } else if (userChoice === "scissors" && computerChoice === "paper") {
//         displayResult("scissors", "paper");
//     } else {
//         displayResult("loss", null);
//     }
// }

// function displayResult(user, cpu) {
//     let result = "";
//     if (user === "tie") {
//         return result + "The game was a tie";
//     } else if (user === "loss") {
//         return result + "Unlucky, the computer beat you... Better luck next time.";
//     } else {
//         return result + `Lucky you... you beat a computer. You picked ${user}, and that beats ${cpu}`;
//     }
// }

// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(play(userChoice, computerPlay));
//     }
// }
