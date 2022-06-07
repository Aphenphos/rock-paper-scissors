import { getRandomItem } from './utils';



const throwOptions = ['rock', 'paper', 'scissors'];

let playerPoints = 0;
let computerPoints = 0;
let playerThrow = '';
let computerThrow = '';

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

function determineGame(playerThrow, computerThrow) { 
    computerThrow = getRandomItem(throwOptions);
    if (playerThrow === computerThrow) {return 'tie';}
    if (playerThrow === 'rock'){
        if (computerThrow === 'scissors') return 'player wins';
    } else {
        return 'computer wins';
    }
    if (playerThrow === 'scissors'){
        if (computerThrow === 'paper') return 'player wins';
    } else {
        return 'computer wins';
    }
    if (playerThrow === 'paper'){
        if (computerThrow === 'rock') return 'player wins';
    } else {
        return 'computer wins';}
    console.log(computerThrow);
}

rockButton.addEventListener('click', () => {
    determineGame('rock');
    console.log('clicked');
});

scissorsButton.addEventListener('click', () => {
    determineGame('paper');
});

paperButton.addEventListener('click', () => {
    determineGame('scissors');
});


