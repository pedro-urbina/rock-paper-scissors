function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        return "rock";
    } else if (computerSelection === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    console.log(`You played ${playerSelection}.`);
    console.log(`Computer played ${computerSelection}.`);

    playerMove.textContent = `You played ${playerSelection}.`;
    computerMove.textContent = `Computer played ${computerSelection}.`;

    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === "rock") {
        switch (computerSelection) {
            case "paper":
                computerScore++;
                return "You Lose! Paper beats rock.";
            case "scissors":
                playerScore++;
                return "You Win! Rock beats scissors.";
        }
    } else if (playerSelection === "paper") {
        switch (computerSelection) {
            case "rock":
                playerScore++;
                return "You Win! Paper beats rock.";
            case "scissors":
                computerScore++;
                return "You Lose! Scissors beats paper.";
        }
    } else { //scissors
        switch (computerSelection) {
            case "rock":
                computerScore++;
                return "You Lose! Rock beats scissors.";
            case "paper":
                playerScore++;
                return "You Win! Scissors beats paper.";
        }
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound();
        console.log("Player: " + playerScore + " points" + "\tComputer: " + computerScore + " points");
    }
    if (playerScore > computerScore) {
        return "You win the game!";
    } else if (computerScore < playerScore) {
        return "Sorry! You lost the game.";
    } else {
        return "The game is tied!";
    }
}

function displayResults(playerSelection) {
    result.textContent = playRound(playerSelection);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

const body = document.querySelector('body');
const btns = document.querySelectorAll('.btn');
const playerMove = document.querySelector('#player-move');
const computerMove = document.querySelector('#computer-move');
const result = document.querySelector('#result');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
let playerScore = 0;
let computerScore = 0;
playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;

// if (playerScore < 5 && computerScore < 5) {
//     btns.forEach(btn => btn.addEventListener('click', function (e) {
//         displayResults(e.target.alt);
//     }));
// } else {
//     const newGameBtn = document.createElement('button');
//     newGameBtn.textContent = "New Game";
//     body.appendChild(newGameBtn);
// }

btns.forEach(btn => btn.addEventListener('click', function (e) {
    if (playerScore < 5 && computerScore < 5) {
        displayResults(e.target.alt);
    } else {
        const endGame = document.querySelector('#end-game');
        if (playerScore > computerScore) {
            endGame.textContent = "YOU WON THE GAME!"
        } else {
            endGame.textContent = "COMPUTER WON THE GAME!"
        }
    }
}));


// if (playerScore < 5 && computerScore < 5) {
//     const rockButton = document.querySelector('#rock-btn');
//     const paperButton = document.querySelector('#paper-btn');
//     const scissorsButton = document.querySelector('#scissors-btn');
//     rockButton.addEventListener('click', displayResults("rock"));
//     paperButton.addEventListener('click', displayResults("paper"));
//     scissorsButton.addEventListener('click', displayResults("scissors"));
// } else {
//     const newGameBtn = document.createElement('button');
//     newGameBtn.textContent = "New Game";
//     body.appendChild(newGameBtn);
// }