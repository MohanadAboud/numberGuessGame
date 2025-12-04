'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20

let highScore = 0

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

const checkAnswer = document.querySelector('.check').addEventListener('click', function () {
  // the random number between 1 and 29
  const guess = Number(document.querySelector('.guess').value)
  // wrong input
  if (!guess || 1 > guess || 20 < guess) {
    displayMessage('ONLY NUMBER BETWEEN 1 & 20')
  }
  // correct answer
  else if (guess === secretNumber) {
    displayMessage('CORRECT ANSWER')

    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    document.querySelector('.guess').disable

    // Disable input and button when the player has won
    document.querySelector('.guess').disabled = true
    document.querySelector('.check').disabled = true

    if (score > highScore) {
      highScore = score
      document.querySelector('.highscore').textContent = highScore
    }
  }
  // wrong answer
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'TOO HIGH' : 'TOO LOW')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('YOU LOSE')
      document.querySelector('.score').textContent = 0
    }
  }
})

// reset game
const reset = document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...')
  secretNumber = Math.trunc(Math.random() * 20) + 1
  score = 20
  document.querySelector('.score').textContent = score
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.guess').value = ''
  document.querySelector('.guess').disabled = false
  document.querySelector('.check').disabled = false
})
