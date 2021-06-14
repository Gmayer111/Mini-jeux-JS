let newGameButton = document.getElementById('new-game');
let playerOne = document.getElementById('player-one');
let playerTwo = document.getElementById('player-two');
let scorePlayerOne = document.getElementById('scoreLeft');
let scorePlayerTwo = document.getElementById('score-right');
let temporaryScorePlayerOne = document.getElementById('temp-scoreleft');
let temporaryScorePlayerTwo = document.getElementById('temp-scoreright');
let rollDice = document.getElementById('roll-dice');
let hold = document.getElementById('hold');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');



newGameButton.addEventListener('click', initAndPlayer)

function initAndPlayer() {

    scorePlayerOne.innerHTML = "00";
    scorePlayerTwo.innerHTML = "00";
    temporaryScorePlayerOne.innerHTML = "00";
    temporaryScorePlayerTwo.innerHTML = "00";   
    
    let player = Math.floor(Math.random() * (3 - 1) + 1); 

    playerOne.style = "";
    playerTwo.style = "";

    if (player == 1) {
        playerTwo.style.display = "none"
    }else if (player == 2) {
        playerOne.style.display = "none"
    }else {
        alert(`Une erreur est survenue`);
    }
}


rollDice.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * (7 - 1) + 1);

    one.style.color = "";
    two.style.color = "";
    three.style.color = "";
    four.style.color = "";
    five.style.color = "";
    six.style.color = "";

    switch (randomNumber) {
        case 1:
            one.style.color = "white"
            two.style.color = "white"
            three.style.textAlign = "center";
            four.style.display = "none"
            five.style.color = "white"
            six.style.color = "white"
            break;
        case 2:
            two.style.color = "white";
            three.style.color = "white";
            four.style.color = "white";
            five.style.color = "white"; 
            break;
        case 3:
            two.style.color = "white";
            four.style.color = "white"
            four.style.display = "none"
            three.style.textAlign = "center";
            five.style.color = "white";  
            break;
        case 4:
            three.style.color = "white";
            four.style.color = "white";  
            break;
        case 5:
            four.style.color = "white"
            three.style.textAlign = "center";
            four.style.display = "none"
            break;
        case 6:
            one.style.display = "initial"
            two.style.display = "initial"
            three.style.display = "initial"
            three.style.textAlign = "left"
            four.style.display = "initial"
            five.style.display = "initial"
            six.style.display = "initial"
            break;
        default:
            alert(`Une erreur est survenue`);
            break;
    }    


});




