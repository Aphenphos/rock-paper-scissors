import { getRandomItem, win, lose, tie, score } from './utils.js';



const throwOptions = ['rock', 'paper', 'scissors'];

let totalWins = 0;
let totalTies = 0;
let totalLosses = 0;

let playerPoints = 0;
let computerPoints = 0;
let computerThrow = '';

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

function determineGame(playerThrow) { 
    computerThrow = getRandomItem(throwOptions);
    const result = score(playerThrow, computerThrow); 
    if (result === 0) {
        tie(); totalTies++;}
    if (result === 1) {
        win(); 
        totalWins++;
        playerPoints++;
        computerPoints--;
    }
    if (result === -1){ 
        lose(); 
        totalLosses++;
        playerPoints--;
        computerPoints++;
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
const totalWinsDisplay = document.getElementById('total-wins');
const totalTiesDisplay = document.getElementById('total-ties');
const totalLossesDisplay = document.getElementById('total-losses');

function updateScore() {
    playerPointsDisplay.textContent = playerPoints;
    computerPointsDisplay.textContent = computerPoints;
    totalWinsDisplay.textContent = totalWins;
    totalLossesDisplay.textContent = totalLosses;
    totalTiesDisplay.textContent = totalTies;


}

updateScore();
