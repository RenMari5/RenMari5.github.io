// const character1 = {
//   name: "Leon",
//   health: 80,
// };

// const character2 = {
//   name: "Chris",
//   health: 80,
// };

// const character3 = {
//   name: "Ethan",
//   health: 80,
// };

const characters = [
  { name: "Leon", health: 80 },
  { name: "Chris", health: 80 },
  { name: "Ethan", health: 80 },
];

const opponent = {
  name: "Krauser",
  health: 120,
};

// const characters = [character1, character2, character3];

// for (let i = 0; i < characters.length; i++) {
//   console.log(`Name: ${characters[i].name}\nHealth: ${characters[i].health}`);
// }

for (let character of characters) {
  // console.log(`Name: ${character.name}, Health: ${character.health}`);
  // console.log(`Opponent: ${opponent.name}, Health: ${opponent.health}`);

  // console.log(`Name: ${opponent.name}\nHealth: ${opponent.health}`);

  const characterPick = prompt(`Pick a character by number (1, 2, or 3)!`);

  if (characterPick === null) break;

  // if (characterPick === 3) {
  //   characters[characters.length - 1].health =
  //     characters[characters.length - 1].health - 5;
  // }

  // if (characterPick === "3" || characterPick === "1") {
  //   characters[characters.length - 1].health =
  //     characters[characters.length - 1].health - 5;
  // } else {
  //   characters[characterPick].health = characters[characterPick].health - 5;
  // }

  characters[Number(characterPick) - 1].health = characters[
    Number(characterPick) - 1
  ].health -= 5;
  opponent.health = opponent.health -= 5;

  console.log(character);
  console.log(opponent);
}

// --Below here are examples of scope and closure--

// const x = 1; // declared variable (global)
// const parentFunction = () => {
//   // global scope function
//   const y = 5; // declared variable

//   function childFunction() {
//     // nested function
//     const innerFunction = () => {
//       // nested function
//       return (y += x);
//     };

//     return innerFunction;
//   }

//   return childFunction;
// };

// const resultFunction = parentFunction(); // declaring new variable function
// console.log(resultFunction()()); // calls resultFunction, which calls parentFunction, then additional () calls the childFunction

// console.log(parentFunction()()()); // first () calls childFunction, second () calls innerFunction, third () calls return within the innerFunction
