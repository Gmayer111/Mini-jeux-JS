let newGameButton = document.getElementById('new-game');

let playerOne = document.getElementById('player-one');
let playerTwo = document.getElementById('player-two');

let scorePlayerOne = document.getElementById('scoreLeft');
let scorePlayerTwo = document.getElementById('score-right');

let temporaryScorePlayerOne = document.getElementById('temp-scoreleft');
let temporaryScorePlayerTwo = document.getElementById('temp-scoreright');


let rollDice = document.getElementById('roll-dice');
let hold = document.getElementById('hold');

newGameButton.addEventListener('click', initScore => {
    scorePlayerOne.innerHTML = "00";
    scorePlayerTwo.innerHTML = "00";
    temporaryScorePlayerOne.innerHTML = "00";
    temporaryScorePlayerTwo.innerHTML = "00";
});

