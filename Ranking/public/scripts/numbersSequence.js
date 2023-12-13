let displayNumber = document.getElementById('display-number');

let numbersList = document.getElementById('keyboard-numbers-container');

let numbersSequence = [];

let score = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function display () {
  if (numbersSequence.length > 0) {
    for (number of numbersSequence) {
      displayNumber.innerHTML = number;
      await sleep(300);
    }
    i = 0;
  }

  const currentNumber = Math.ceil(Math.random() * 9);

  displayNumber.innerHTML = currentNumber;
  numbersSequence.push(currentNumber);
  await sleep(300);

  displayNumber.innerHTML = '';
  return keyboard();
}

display();

let numbersKeyboard = [];

let i = 0;

function keyboard() {
  numbersList.onclick = function(event) {
  
    numbersKeyboard[i] = parseInt(event.target.innerHTML);

    for (let count = 1; count <= 9; count++) {
      document.getElementById('number0' + count).style.background = 'var(--color-background)';   
      document.getElementById('number0' + count).style.color = 'var(--color-text-complement)'; 
    }
    document.getElementById('number0' + numbersKeyboard[i]).style.background = 'var(--color-secondary)';   
    document.getElementById('number0' + numbersKeyboard[i]).style.color = 'var(--color-primary)'; 
      
    if (numbersKeyboard.length === numbersSequence.length) {
      if (numbersKeyboard[i] !== numbersSequence[i]) {
        localStorage.setItem('scoreNumber', score);
        location.href = './end-game.html';
      } else {
        numbersKeyboard = [];
        i++;
      }
    } else if (numbersKeyboard[i] !== numbersSequence[i]) {
      localStorage.setItem('scoreNumber', score);
      location.href = './end-game.html';
    } else {
      numbersKeyboard = [];
      i++;
    }

    if (i === numbersSequence.length) {
      score++;
      return display();
    }
  }
}