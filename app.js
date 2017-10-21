
/* 

Author: Akash Patel
Mobile: 9806348736
Email:  mact.akash@gmail.com
Org:    Nanobi Data and Analytics

*/

var finalScore, currentScore, activePlayer, activeGame;

var playerName1=prompt("Please enter PLayer-1 name", "Akash");
var playerName2=prompt("Please enter PLayer-2 name", "Abhinesh");
init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (activeGame) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            currentScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = currentScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (activeGame) {
        finalScore[activePlayer] += currentScore;
        document.querySelector('#score-' + activePlayer).textContent = finalScore[activePlayer];
        if (finalScore[activePlayer] >= 20) {
            activeGame = false;
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.btn-hold').style.display = 'none';
            document.querySelector('#name-' + activePlayer).textContent = 'Winner !';
            document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');

        } else {
            nextPlayer();
        }
    }

});

function init() {
    finalScore = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    activeGame = true;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('name-0').textContent = playerName1;
    document.getElementById('name-1').textContent = playerName2;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
}

function nextPlayer() {

    activePlayer = activePlayer == 1 ? activePlayer = 0 : 1;
    currentScore = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);