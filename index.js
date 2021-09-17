let playerOne = document.getElementById('player-one');
let playerTwo = document.getElementById('player-two');
let scorePlayerOne = document.getElementById('scoreLeft');
let scorePlayerTwo = document.getElementById('score-right');
let temporaryScorePlayerOne = document.getElementById('temp-scoreleft');
let temporaryScorePlayerTwo = document.getElementById('temp-scoreright');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');

let clickCounter = 0;
document.getElementById('new-game').addEventListener('click', init)

function init() {
    
    scorePlayerOne.innerHTML = "00";
    scorePlayerTwo.innerHTML = "00";
    temporaryScorePlayerOne.innerHTML = "00";
    temporaryScorePlayerTwo.innerHTML = "00";  
    iniScoreL = 0;
    iniScoreR = 0;
    one.style = "";
    two.style = "";
    three.style = "";
    four.style = "";
    five.style = "";
    six.style = "";
    a = 0;
    b = 0;

    
    let player = Math.floor(Math.random() * (3 - 1) + 1); 
    clickCounter++

    if (clickCounter === 1) {
        playerOne.style.display = "";
        playerTwo.style.display = "none";
    }
    
    if (player === 1 && clickCounter > 1) {
        playerOne.style.display = "";
        playerTwo.style.display = "none";
    }else if (player === 2 && clickCounter > 1) {
        playerOne.style.display = "none";
        playerTwo.style.display = "";
    }
};

iniScoreL = 0;
iniScoreR = 0;

document.getElementById('roll-dice').addEventListener('click', () => {
        
    let result = Math.floor(Math.random() * (7 - 1) + 1);

    one.style = "";
    two.style = "";
    three.style = "";
    four.style = "";
    five.style = "";
    six.style = "";
    
    switch (result) {
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

    iniScoreL += result;
    iniScoreR += result;

    if (playerTwo.style.display === "none" ) {
        playeOne(iniScoreL)
    } else {
        playeTwo(iniScoreR)
    }    
    
    function playeOne(iniScoreL) {
   
        iniScoreR = 0;
        if (result !== 1) {
            temporaryScorePlayerOne.innerHTML = iniScoreL; 
            temporaryScorePlayerTwo.innerHTML = 0
        }else {
            playerOne.style.display = "none" 
            playerTwo.style.display = "" 
            result = 0;
            iniScoreL = 0;
            playeTwo(iniScoreR)
        }
    }

    function playeTwo(iniScoreR) {
        iniScoreL = 0;
        if (result !== 1){
            temporaryScorePlayerTwo.innerHTML = iniScoreR; 
            temporaryScorePlayerOne.innerHTML = 0;
        }else {
            playerOne.style.display = "" 
            playerTwo.style.display = "none" 
            result = 0;
            iniScoreR += result = 0;
            playeOne(iniScoreL)
        }
    }

    return result;

});

let a = 0;
let b = 0;
document.getElementById('hold').addEventListener('click', () => {
    
    a += Number(temporaryScorePlayerOne.innerHTML);
    b += Number(temporaryScorePlayerTwo.innerHTML)


    if (playerTwo.style.display === "none") {
            scorePlayerOne.textContent = a;
            playerOne.style.display = "none"
            playerTwo.style.display = ""
            temporaryScorePlayerOne.innerHTML = "00";
        if (a >= 100) {
            scorePlayerOne.textContent = "Winner"
            scorePlayerTwo.textContent = "Looser"
            temporaryScorePlayerOne.innerHTML = "00";
            temporaryScorePlayerTwo.innerHTML = "00";
            setTimeout(init, 3000);
        }            
    }else {
        scorePlayerTwo.innerHTML = b;
        playerTwo.style.display = "none"
        playerOne.style.display = ""
        temporaryScorePlayerTwo.innerHTML = "00";
        if (b >= 100) {
            scorePlayerTwo.textContent = "Winner"
            scorePlayerOne.textContent = "Looser"
            temporaryScorePlayerOne.innerHTML = "00";
            temporaryScorePlayerTwo.innerHTML = "00";
            setTimeout(init, 3000);
        }        
    }        
});

