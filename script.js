let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");


const showWinner = (userWin) => {
    if (userWin) {
        console.log("User wins");
        msg.innerText = "You Win!!";
        userScore++;
        document.querySelector("#user-score").innerText = userScore;
    } else {
        console.log("Comp wins");
        msg.innerText = "You Lose!!";
        compScore++;
        document.querySelector("#comp-score").innerText = compScore;
    }
}


const drawGame = () => {
    console.log("Draw");
    msg.innerText = "Draw!!";
}

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}
const playgame = (userChoice) => {
    console.log("User choice =",userChoice);
    const compChoice = gencompchoice();
    console.log("Comp choice =",compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});