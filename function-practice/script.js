// function printNumbers() {
//     for (let i = 1; i <= 10; i++);
//     console.log(i)
// }

// printNumbers();

// Create a function that takes an array of numbers and prints out the numbers in the array
// Use an arrow function

// const printNumbers = (numberArray) => {
//     // for (let number of numberArray) {
//     //     console.log(number)
//     // }
//     for (let i=0; i<numberArray.length; i++) {
//         console.log(numberArray[i])
//     }
// }

// // printNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// printNumbers([2, 4, 6, 8, 10]);

// Create a function that takes a parameter of an array of numbers and returns a sum of all the numbers in the array
// Function name is sumArray
// Parameter name is numbers

// sumArray([1, 2, 3, 4]) // return 10

// const sumArray = (numbers) => {
//     let sum = 0;
//     for (let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }

// console.log(sumArray ([5, 55, 8, 20, 9]));

// function checkLeapYear(year) {
//     if (year % 4 === 0 && year % 100 !== 0) {
//         return console.log("leap year");
//     } else if (year % 400 === 0) {
//         return console.log("leap year");
//     } else {
//         return console.log("not a leap year");
//     }
// }

// function checkLeapYear(year) {
// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     return console.log("leap year");
// } else {
//     return console.log("not a leap year");
// }
// }

// checkLeapYear(2012) //"Year 2012 is a leap year"
// checkLeapYear(1900) //"Year 1900 is not a leap year"
// checkLeapYear(2000) //"Year 2000 is a leap year"
// checkLeapYear(2011) //"Year 2011 is not a leap year"

// function evalNumbers(num1, num2, operation) {
//     if (operation === "add") {
//         let outcome = num1 + num2;
//         return `Sum of ${num1} and ${num2} is ${outcome}.`;
//     } else if (operation === "subtract") {
//         let outcome = num1 - num2;
//         return `Difference of ${num1} and ${num2} is ${outcome}.`;
//     } else if (operation === "multiply") {
//         let outcome = num1 * num2;
//         return `Product of ${num1} and ${num2} is ${outcome}.`;
//     } else if (operation === "divide") {
//         let outcome = num1 / num2;
//         return `Division of ${num1} and ${num2} is ${outcome}.`;
//     } else if (operation === "modulus") {
//         let outcome = num1 % num2;
//         return `Modulus of ${num1} and ${num2} is ${outcome}.`;
//     } else {
//         return `${operation} is an invalid operation.`;
//     }
//  }

//  evalNumbers(15, 10, "add") // "Sum of 15 and 10 is 25"
//  evalNumbers(24, 24, "subtract") // "Difference of 20 and 8 is 12"
//  evalNumbers(24, 24, "multiply") // "Product of 12 and 4 is 48"
//  evalNumbers(24, 24, "divide") // "Division of 28 and 7 is 4"
//  evalNumbers(24, 24, "modulus") // "Modulus of 22 and 3 is 1"
//  evalNumbers(24, 24, "square") // "square is an invalid operation"

// Create a function called waterState. Tell me what state the water is in at certain temperatures. Solid, liquid, and gas. I also want you to only accept a number. If it is not a number. Say please enter a number

// function waterState(temperature) {
//   if (typeof temperature === "number") {
//     if (temperature <= 32) {
//       console.log("Solid");
//     } else if (temperature > 32 && temperature < 212) {
//       console.log("Liquid");
//     } else if (temperature >= 212) {
//       console.log("Gas");
//     }
//   } else {
//     console.log("Please enter a number.");
//   }
// }

// waterState(32);

// function waterState(temperature) {
//   if (typeof temperature !== "number") {
//     console.log("Please enter a number!!!!!");
//   }

//   if (temperature <= 32) {
//     console.log("Solid");
//   } else if (temperature >= 212) {
//     console.log("Gas");
//   } else {
//     console.log("Liquid");
//   }
// }

// function waterState(temperature) {
//   if (typeof temperature !== "number") {
//     console.log("Please enter a number!!!!!");
//   }

//   if (temperature <= 32) {
//     return "Solid";
//   } else if (temperature >= 212) {
//     return "Gas";
//   }

//   return "Liquid";
// }

// const state = waterState(100000000000);

// console.log(state);

// print numbers 1 to whatever
// console.log "FizzBuzz" if i is divisible by 3 and 5.
// console.log "Fizz" if i is divisible by 3.
// console.log "Buzz" if i is divisible by 5.
// console.log i if none of the above conditions are true.

// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(100);

// Mini-Code Challenge

// function logRectInfo(topLeft, bottomRight) {
//   let length, width, area, perimeter;

//   if (bottomRight[0] > topleft[0]) {
//     length = bottomRight[0] - topLeft[0];
//   } else {
//     length = topLeft[0] - bottomRight[0];
//   }

//   if (bottomRight[1] > topLeft[0]) {
//     width = bottomRight[1] - topLeft[1];
//   } else {
//     width = topLeft[1] - bottomRight[1];
//   }

//   area = length * width;
//   perimeter = 2 * (length + width);

//   console.log("area", area);
//   comsole.log("perimeter", perimeter);
// }

// logRectInfo([0, 5], [3, 2]);

// How to do random numbers in JavaScript
// console.log(Math.floor(Math.random() * 11));

// Rock Paper Scissors

// a function named rockPaperScissors that takes 2 parameters. Parameter 1 is named player1Selection and parameter 2 is named player2Selection

const rockPaperScissors = (player1Selection, player2Selection) => {
  // Rock beats scissors and loses to paper.
  // Scissors beats paper and loses to rock.
  // Paper beats rock and loses to scissors.

  // if player1Selection is equal to "rock" and player2Selection is equal to "paper" then print "Player 2 wins the round."
//   if (player1Selection === "rock" && player2Selection === "paper") {
//     console.log("Player 2 wins the round.");
//   } else if (player1Selection === "paper" && player2Selection === "scissors") {
//     console.log("Player 2 wins the round.");
//   } else if (player1Selection === "rock" && player2Selection === "scissors") {
//     console.log("Player 1 wins the round.");
//   } else if (player1Selection === "paper" && player2Selection === "rock") {
//     console.log("Player 1 wins the round.");
//   } else if (player1Selection === "scissors" && player2Selection === "paper") {
//     console.log("Player 1 wins this round.");
//   } else if (player1Selection === "scissors" && player2Selection === "rock") {
//     console.log("Player 2 wins this round.");
//   } else if (player1Selection === player2Selection) {
//     console.log("It's a tie.");
//   }
// };

// If plater one selects "paper", then return "Player 1 wins" otherwise return "Player 2 wins" (ternary example)
// return player1Selection === "paper" ? "Player 1 wins" : "Player 2 wins"

// const rockPaperScissors = (player1Selection) => {
//   return player1Selection === "paper" ? "Player 1 wins" : "Player 2 wins";
// };
// console.log(rockPaperScissors("paper"));

// rockPaperScissors("paper", "scissors");
// rockPaperScissors("rock", "scissors");
// rockPaperScissors("paper", "rock");
// rockPaperScissors("scissors", "paper");
// rockPaperScissors("scissors", "rock");
// rockPaperScissors("paper", "paper");

const whatDoesItReturn = (parameter) => {
  return parameter >= 21 ? 'Can drive' : false;
}

whatDoesItReturn(5); // number
whatDoesItReturn("Some words"); // string
whatDoesItReturn(true); // boolean