let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissor = document.querySelector("#scissor");
let btnReset = document.querySelector("#btn-reset");

let score = document.querySelector("#score");
let cScore = document.querySelector("#scoreComp");
let resLine = document.querySelector("#result-line");

let userScore = 0;
let compScore = 0;

let resA = "It's a tie!";
let resB = "User wins!";
let resC = "Computer wins!";

const gameOptions = ["Rock", "Paper", "Scissor"];

btnRock.addEventListener("click", () => {
    result("Rock", compChoice());
})
btnPaper.addEventListener("click", () => {
    result("Paper", compChoice());
})
btnScissor.addEventListener("click", () => {
    result("Scissor", compChoice());
})

btnReset.addEventListener("click", () => {
    resetScore();
});


function compChoice() {
    let choiceNo = Math.floor(Math.random() * 3);
    let choice = gameOptions[choiceNo];
    return choice;
}

function result(userChoice, compChoice) {
    if (userChoice == "Rock") {
        if (compChoice == "Rock") {
            resLine.innerText = resA;
        } else if (compChoice == "Paper") {
            resLine.innerText = resC;
            compScore++;
        } else {
            userScore++;
            resLine.innerText = resB;
        }
    } else if (userChoice == "Paper") {
        if (compChoice == "Rock") {
            resLine.innerText = resB;
            userScore++;
        } else if (compChoice == "Paper") {
            resLine.innerText = resA;
        } else {
            resLine.innerText = resC;
            compScore++;
        }
    } else if (userChoice == "Scissor") {
        if (compChoice == "Rock") {
            resLine.innerText = resC;
            compScore++;
        } else if (compChoice == "Paper") {
            resLine.innerText = resB;
            userScore++;
        } else {
            resLine.innerText = resA;
        }
    }
    score.innerText = `Your Score: ${userScore}`;
    cScore.innerText = `Computer Score: ${compScore}`;
}

function resetScore() {
    userScore = 0;
    compScore = 0;
    score.innerText = `Your Score: ${userScore}`;
    cScore.innerText = `Computer Score: ${compScore}`;
    resLine.innerText = "Pick your option";
}