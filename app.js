function computerPlay () {
    let rpc=['Rock', 'Paper', 'Scissors'];
    return rpc[Math.random()*(rpc.length)|0];
}

function playRound(playerSelection, computerSelection) {
    let pSelection=playerSelection.toLowerCase();
    let cSelection=computerSelection.toLowerCase();
    let message = `Draw! ${computerSelection} vs. ${computerSelection}`;
    switch (pSelection) {
        case 'rock':
            if (cSelection==='paper') message = 'You lose! Paper beats Rock!';
            if (cSelection==='scissors') message = 'You win! Rock beats Scissors!';
            break;
        case 'paper':
            if (cSelection==='scissors') message = 'You lose! Scissors beats Paper!';
            if (cSelection==='rock') message = 'You win! Paper beats Rock!';
            break;
        case 'scissors':
            if (cSelection==='rock') message = 'You lose! Rock beats Scissors!';
            if (cSelection==='paper') message = 'You win! Scissors beats Paper!';
            break;
    }
    return message;
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));