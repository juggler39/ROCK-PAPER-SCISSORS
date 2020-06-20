let round;
let cpuScore=0;
let yourScore=0;

window.onload = function() {
    init ();
};

function init () {
    round=1;
    document.getElementById('message').innerText = '';
    document.getElementById('cpu_score').innerText = 'CPU: 0';
    document.getElementById('your_score').innerText = 'YOU: 0';
    document.getElementById('gametext').innerText = '';
    document.getElementById('round').innerText = 'ROUND 1';
    document.getElementById('cpu_choice').firstElementChild.innerHTML = '';
    document.getElementById('your_choice').firstElementChild.innerHTML = '';
}

function startRound (playerSelection) {
    let timeout=300;
    let hands=['✊', '✋', '✌'];
    let rpc=['Rock', 'Paper', 'Scissors'];
    let startMessage=['Rock,', 'Paper,', 'Scissors,', '1,', '2,', '3'];
    document.getElementById('gametext').innerText = '';
    let message=document.getElementById('message');
    document.getElementById('round').innerText = `ROUND ${round}`;
    for (let i=1; i<=startMessage.length;i++) {
        setTimeout(()=>{
            message.innerText=startMessage.slice(0, i).join(' ');
            document.getElementById('cpu_choice').firstElementChild.innerHTML = hands[i%3];
            document.getElementById('your_choice').firstElementChild.innerHTML = hands[i%3];
            }, timeout*i);
    }
    computerSelection = computerPlay ();
    setTimeout(()=>{
        document.getElementById('cpu_choice').firstElementChild.innerHTML = hands[computerSelection];
        document.getElementById('your_choice').firstElementChild.innerHTML = hands[playerSelection];
        let node=document.createElement('p');
        let text=document.getElementById('gametext').appendChild(node);
        text.innerHTML=`Computer plays ${rpc[computerSelection]}`;
        node=document.createElement('p');
        text=document.getElementById('gametext').appendChild(node);
        text.innerHTML=`You play ${rpc[playerSelection]}`;
        node=document.createElement('p');
        text=document.getElementById('gametext').appendChild(node);
        text.innerHTML=playRound(rpc[playerSelection], rpc[computerSelection]);
        document.getElementById('cpu_score').innerText = `CPU: ${cpuScore}`;
        document.getElementById('your_score').innerText = `YOU: ${yourScore}`;
    }, timeout*7);
    round++;
    if (round===6) {
        round=1;
        node=document.createElement('p');
        text=document.getElementById('gametext').appendChild(node);
    }

}

function playRound (playerSelection, computerSelection) {
    let pSelection=playerSelection.toLowerCase();
    let cSelection=computerSelection.toLowerCase();
    let message = `It is a draw!`;

    switch (pSelection) {
        case 'rock':
            if (cSelection==='paper') {
                message = 'You lose! Paper beats Rock!';
                cpuScore++;
            }
            if (cSelection==='scissors') {
                message = 'You win! Rock beats Scissors!';
                yourScore++;
            }
            break;
        case 'paper':
            if (cSelection==='scissors') {
                message = 'You lose! Scissors beats Paper!';
                cpuScore++;
            }
            if (cSelection==='rock') {
                message = 'You win! Paper beats Rock!';
                yourScore++;
            }
            break;
        case 'scissors':
            if (cSelection==='rock') {
                message = 'You lose! Rock beats Scissors!';
                cpuScore++;
            }

            if (cSelection==='paper') {
                message = 'You win! Scissors beats Paper!';
                yourScore++;
            }
            break;
    }
    return message;
}

function computerPlay () {
    return Math.random()*3|0;
}