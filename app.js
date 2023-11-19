// Create a map from of the available choices
// 0: Rock, 1: Paper, 2: Scissors
const NUMBER_OF_GAMES = 5;
const moves = {0:"rock", 1:"paper", 2:"scissors"};

// Intialise variables to hold scores
usersScore = 0;
computersScore = 0;

// Get the Computers Choice
function getComputersChoice(){
    return Math.floor(Math.random() * Object.keys(moves).length);
}

// Get Users input
function getUsersChoice() {
    let usersInput = prompt("Rock, Paper, Scissors?:");
    // Ensure input is case insensitve
    let lowerUsersInput = usersInput.toLowerCase();
    for (let i = 0; i < Object.keys(moves).length ; i++) {
        if (moves[i] === lowerUsersInput) {
            return i
        }    
    }
}

// Compare the users input with the computers choice
function getResult(computersChoice, usersChoice) {
    if (usersChoice === computersChoice) {
        // if users choice === computer choice then draw
        return "It's a Draw!";
    } else if (usersChoice === 0 && computersChoice === 2) {
        // Rock beats Scissors
        return "You Win! Rock beats Scissors!";
    } else if (usersChoice === 1 && computersChoice === 0) {
        // Paper beats Rock
        return "You Win! Paper beats Rock!";
    } else if (usersChoice === 2 && computersChoice === 1) {
        // Scissors Beats Paper
        return "You Win! Scissors beats Paper!";
    } else if (computersChoice === 0) {
        // Rock beats Scissors
        return "You Lose! Rock beats Scissors!";
    } else if (computersChoice === 1) {
        // Paper beats Rock
        return "You Lose! Paper beats Rock!";
    } else {
        // Scissors beats Paper
        return "You Lose! Scissors beats Paper!"
    }
}

function playRound() {
    let computersChoice = getComputersChoice();
    let usersChoice = getUsersChoice();
    return getResult(computersChoice, usersChoice);
}

function keepScore(result) {
    if (result.includes("Win")) {
        usersScore++;
    } else if (result.includes("Loss")) {
        computersScore++;
    }
}

function getFinalResult () {
    if (usersScore === computersScore) {
        return "It's a draw!";
    } else if (usersScore > computersScore) {
        return "You Win!";
    } else {
        return "You Lose!";
    }
}

function game() {
    // Play a round for the defined number of games
    for (let i = 1; i <= 5; i++) {
        // Keep score after each round is played
        let roundResult = playRound();
        console.log(roundResult);
        keepScore(roundResult);
        console.log(`Current Score:\nUser:${usersScore} Computer:${computersScore}`)
    }
    // Return the final result
    console.log(getFinalResult())
}

game();