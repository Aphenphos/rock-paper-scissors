import { getRandomItem } from "./utils";



const throwOptions = ['rock', 'paper', 'scissors'];

let userPoints = 0;
let computerPoints = 0;
let playerThrow = '';
let computerThrow = '';

const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');

function determineGame {
    
    playerThrow = getRandomItem(throwOptions)
    if (playerThrow === computerThrow) {return 'tie'}
    if (playerThrow === rock){
        if(computerThrow === scissors) return 'player wins'
    } else {
        return "computer wins"
    }
    if (playerThrow === paper){
        if(computerThrow === scissors) return 'computer wins'
    } else {
        return "player wins"
    }
    if (playerThrow === scissors){
        if(computerThrow === scissors) return 'player wins'
    } else {
        return "computer wins"
    }
}


const throwMap = new Map ();
throwMap.set('rock', rockButton);
throwMap.set('paper', paperButton);
throwMap.set('scissors', scissorsButton);


rockButton.addEventListener('click', () => {
    determineGame('rock');
})

scissorsButton.addEventListener('click', () => {
    determineGame('paper');
})

paperButton.addEventListener('click', () => {
    determineGame('scissors');
})


