// starting scores
let playerScore= 0;
let computerScore= 0;

//brings html elements into js
const choices= document.querySelectorAll(".choice");
const buttonReset= document.querySelector(".Reset");
const divResult= document.querySelector(".result");
const divPlayScore= document.querySelector(".playScore");
const divCompScore= document.querySelector(".compScore");

//makes buttons run necessary functions to play
choices.forEach(choice => {
    choice.addEventListener("click", () =>{
        playRound(choice.innerText, getComputerChoice());
        getScores(playerScore, computerScore);
        getWinner(playerScore, computerScore);
        resetGame(playerScore, computerScore);
    });
});

//gets random computer choice
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

//determines result of one round
function playRound(playerSelection, computerSelection){
    if (
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")){
            divResult.innerText="";
            ++playerScore;
            const p= document.createElement("p");
            p.innerText= `You Won! ${playerSelection} beats ${computerSelection}`;
            divResult.append(p);
    } else if (
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")){
            divResult.innerText="";
            ++computerScore;
            const p= document.createElement("p");
            p.innerText= `You Lost! ${computerSelection} beats ${playerSelection}`;
            divResult.append(p);
    } else if (playerSelection == computerSelection){
            divResult.innerText="";
            const p= document.createElement("p");
            p.innerText= `It was a Tie! Both players picked ${playerSelection}`;
            divResult.append(p);
    }
    
}

//shows current scores
function getScores(playerScore, computerScore){
    divPlayScore.innerText= `Player Score: ${playerScore}`;
    divCompScore.innerText= `Computer Score: ${computerScore}`;
}

//displays text when a player reaches 5 wins
function getWinner(playerScore, computerScore){
    if (playerScore == 5 && computerScore > 0){
        divResult.innerText="";
        const h1 = document.createElement("h1");
        h1.innerText= `You beat the computer ${playerScore} to ${computerScore}!`;
        divResult.append(h1);
    } else if (computerScore == 5 && playerScore > 0){
        divResult.innerText="";
        const h1 = document.createElement("h1");
        h1.innerText= `The computer beat you ${computerScore} to ${playerScore}`;
        divResult.append(h1);
    } else if (playerScore == 5 && computerScore == 0){
        divResult.innerText="";
        const h1 = document.createElement("h1");
        h1.innerText= "FLAWLESS VICTORY!";
        divResult.append(h1);
    } else if (playerScore == 0 && computerScore == 5){
        divResult.innerText="";
        const h1 = document.createElement("h1");
        h1.innerText= "FLAWLESS DEFEAT!";
        divResult.append(h1);
//prevents previous messages from displaying even if score is != 5
    } else {
        const h1 = document.createElement("h1");
        h1.innerText= "";
        divResult.append(h1);
    }
}
//blocks button when score = 5
function resetGame(playerScore, computerScore){
    if (playerScore == 5 || computerScore == 5){
        choices.forEach(choice => {
            choice.remove();
        }); 
        buttonReset.setAttribute("style", "display: block; text-align:center;");
        buttonReset.addEventListener("click", () => {
            location.reload();
        });
    }
}