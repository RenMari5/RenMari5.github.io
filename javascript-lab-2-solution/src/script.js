"use strict";

// TODO - write your code here.

// const nameOfFunction = () => {
// return randomNumberStuff
// }

// const randomDamage = () => {
//     return
//     }

const randomDamage = () => {
  return Math.floor(Math.random() * 10) + 1; // To make the random number between 1 and 10
};

// ternary operator
const chooseOption = (opt1, opt2) => {
  const randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

// function expression
const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`); // Template string/String interpolation
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

// Declare an arrow function with boolean return
function isDead(health) {
  return health <= 0 ? true : false;
}

function fight(_player1, _player2, _player1Health, _player2Health) {
  while (true) {
    const attacker = chooseOption(_player1, _player2); // Changed to const

    if (attacker === _player1) {
      _player2Health = attackPlayer(_player2Health);
      logHealth(_player2, _player2Health); // Removed console.log

      if (isDead(_player2Health)) {
        logDeath(_player1, _player2);
        break;
      }
    } else {
      _player1Health = attackPlayer(_player1Health);
      logHealth(_player1, _player1Health);

      if (isDead(_player1Health)) {
        logDeath(_player2, _player1);
        break;
      }
    }
  }
}

fight("Leon", "Chris", 100, 100);

// Not sure why it keeps giving me a return of "Leon/Chris health: NaN"
