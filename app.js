import { getRandomItem, win, lose, tie } from './utils.js';



const throwOptions = ['rock', 'paper', 'scissors'];


let playerPoints = 0;
let computerPoints = 0;
let playerThrow = '';
let computerThrow = '';

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

function determineGame(playerThrow) { 
    computerThrow = getRandomItem(throwOptions);
    if (playerThrow === computerThrow) tie();
    if (playerThrow === 'rock' && computerThrow === 'scissors'){
        playerPoints++;
        computerPoints--;
        win();
    }
    if (playerThrow === 'scissors' && computerThrow === 'paper'){
        playerPoints++;
        computerPoints--;
        win();
    }
    if (playerThrow === 'paper' && computerThrow === 'rock'){
        playerPoints++;
        computerPoints--;
        win();
    }
    if (playerThrow === 'rock' && computerThrow === 'paper'){
        playerPoints--;
        computerPoints++;
        lose();
    }
    if (playerThrow === 'paper' && computerThrow === 'scissors'){
        playerPoints--;
        computerPoints++;
        lose();
    }
    if (playerThrow === 'scissors' && computerThrow === 'rock'){
        playerPoints--;
        computerPoints++;
        lose();
    }
    updateScore();
}
    

rockButton.addEventListener('click', () => {
    determineGame('rock');
});

scissorsButton.addEventListener('click', () => {
    determineGame('paper');
});

paperButton.addEventListener('click', () => {
    determineGame('scissors');
});

const playerPointsDisplay = document.getElementById('player-points');
const computerPointsDisplay = document.getElementById('computer-points');


function updateScore() {
    playerPointsDisplay.textContent = playerPoints;
    computerPointsDisplay.textContent = computerPoints;
    console.log('running');
}

updateScore();
