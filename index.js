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

    let n = Math.floor(Math.random() * 10);
    
    if (n%2 == 0) {
        playerTwo.remove();
    }else {
        playerOne.remove();
    }
    
});



//Au premier tour lors du clic new game
// un algo aléatoire entre player 1 et player 2



