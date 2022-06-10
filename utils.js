export function getRandomItem(array) {
    const random = Math.floor(Math.random() * array.length);
    const item = array[random];
    return item;
}

export function win() {
    document.getElementById('game-result-display').classList.add('you-won');
    document.getElementById('game-result-display').classList.remove('you-tied', 'you-lose');
    document.getElementById('win-or-lose').textContent = 'You Won';

}

export function lose() {
    document.getElementById('game-result-display').classList.add('you-lose');
    document.getElementById('game-result-display').classList.remove('you-won', 'you-tied');
    document.getElementById('win-or-lose').textContent = 'You Lose';

}

export function tie() {
    document.getElementById('game-result-display').classList.add('you-tied');
    document.getElementById('game-result-display').classList.remove('you-won', 'you-lose');
    document.getElementById('win-or-lose').textContent = 'You Tied';
}


export function score(playerThrow, computerThrow) {
    if (playerThrow === computerThrow){ return 0;}
    if (playerThrow === 'rock' && computerThrow === 'scissors'){
        return 1;
    }
    if (playerThrow === 'scissors' && computerThrow === 'paper'){
        return 1;
    }
    if (playerThrow === 'paper' && computerThrow === 'rock'){
        return 1;
    }
    if (playerThrow === 'rock' && computerThrow === 'paper'){
        return -1;
    }
    if (playerThrow === 'paper' && computerThrow === 'scissors'){
        return -1;
    }
    if (playerThrow === 'scissors' && computerThrow === 'rock'){
        return -1;
    }
}

