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