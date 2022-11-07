'use strict';
// random generation of secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// keep score record
let score = 20;
// keeps the high score record
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('No Number 😶');
    // document.querySelector('.message').textContent = 'No Number 😶';
  }
  // When the guess is correct
  else if (guess === secretNumber) {
    displayMessage('😁 Hurray! You guessed it');
    // document.querySelector('.message').textContent =
    //   '😁 Hurray! You guessed it';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when the guess is incorrect
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '😎 Too high' : '😪 Too low');
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '😎 Too high' : '😪 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😑 You lost the game');
      //   document.querySelector('.message').textContent = '😑 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // an alternate approach
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '😎 Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😑 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '😪 Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😑 You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// logic to restart the game and restore all the conditions
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  //   document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
