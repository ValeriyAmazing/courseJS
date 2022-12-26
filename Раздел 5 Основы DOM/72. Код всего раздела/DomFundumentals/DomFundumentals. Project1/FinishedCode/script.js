'use strict';

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.guess-message').textContent = 'Правильно!';

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;

// console.log(document.querySelector('.number-input').value);

// document.querySelector('.number-input').value = 13;

// console.log(document.querySelector('.number-input').value);

// const eventHandler = function () {
//   console.log(document.querySelector('.number-input').value);
// };

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  // No input
  if (!guessingNumber) {
    // document.querySelector('.guess-message').textContent = 'Введите число!';
    displayGuessMessage('Введите число!');

    // Player won
  } else if (guessingNumber === secretNumber) {
    // document.querySelector('.guess-message').textContent = 'Правильно!';
    displayGuessMessage('Правильно!');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Number from input is wrong
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.guess-message').textContent =
      //   guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!';
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.guess-message').textContent = 'Game Over!';
      displayGuessMessage('Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // Too high
  //  else if (guessingNumber > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Слишком много!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // Too low
  // } else if (guessingNumber < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.guess-message').textContent = 'Слишком мало!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.guess-message').textContent = 'Game Over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  // document.querySelector('.guess-message').textContent = 'Начни угадывать!';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';

  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
