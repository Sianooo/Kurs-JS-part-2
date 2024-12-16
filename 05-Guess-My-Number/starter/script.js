'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const secretNumber=Math.floor(Math.random()*20)+1;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});