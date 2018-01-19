//book Cricket
var roundScore, scores, activePlayer, gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener("click", function () {

    if (gamePlaying) {
        //random number
        var dice = random(1, 6);
        //display the results
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = "Images/run" + dice + ".jpg";
        // update the players f inal score if not-out
        if (dice !== 5) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next Player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //add current score to google 
        scores[activePlayer] += roundScore;

        // update UI 
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        //check if the player is won
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('#dice').style.display = "none";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            //next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}


function random(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector("#score-0").textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector("#current-0").textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.querySelector('#dice').style.display = "none";
    activePlayer = 0;
    document.querySelector('#name-0').textContent = 'INDIA';
    document.querySelector('#name-1').textContent = 'AUSTRALIA';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

}