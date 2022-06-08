import { getRandomItem, win, lose, tie } from './utils.js';



const throwOptions = ['rock', 'paper', 'scissors'];

let totalWins = 0;
let totalTies = 0;
let totalLosses = 0;
let totalGames = totalWins + totalTies + totalLosses;

let playerPoints = 0;
let computerPoints = 0;
let computerThrow = '';

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

function determineGame(playerThrow) { 
    computerThrow = getRandomItem(throwOptions);
    if (playerThrow === computerThrow){ tie(); totalTies++;}
    if (playerThrow === 'rock' && computerThrow === 'scissors'){
        playerPoints++;
        computerPoints--;
        totalWins++;
        win();
    }
    if (playerThrow === 'scissors' && computerThrow === 'paper'){
        playerPoints++;
        computerPoints--;
        totalWins++;
        win();
    }
    if (playerThrow === 'paper' && computerThrow === 'rock'){
        playerPoints++;
        computerPoints--;
        totalWins++;
        win();
    }
    if (playerThrow === 'rock' && computerThrow === 'paper'){
        playerPoints--;
        computerPoints++;
        totalLosses++;
        lose();
    }
    if (playerThrow === 'paper' && computerThrow === 'scissors'){
        playerPoints--;
        computerPoints++;
        totalLosses++;
        lose();
    }
    if (playerThrow === 'scissors' && computerThrow === 'rock'){
        playerPoints--;
        computerPoints++;
        totalLosses++;
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
const totalWinsDisplay = document.getElementById('total-wins');
const totalTiesDisplay = document.getElementById('total-ties');
const totalLossesDisplay = document.getElementById('total-losses');
const totalGamesDisplay = document.getElementById('total-games');

function updateScore() {
    playerPointsDisplay.textContent = playerPoints;
    computerPointsDisplay.textContent = computerPoints;
    totalWinsDisplay.textContent = totalWins;
    totalLossesDisplay.textContent = totalLosses;
    totalTiesDisplay.textContent = totalTies;
    totalGamesDisplay.textContent = totalGames;

}

updateScore();
