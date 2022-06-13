const chalk = require("chalk");

const { helloWorld, greeting } = require("./some-module.js");

// const someModule = require("./some-module.js"); // Provides relative path

// console.log(someModule);

// console.log(chalk.blue(someModule.helloWorld));

console.log(chalk.blue(helloWorld));

// someModule.greeting(someModule.helloWorld);
greeting(helloWorld);

const myObject = {
  name: "Ren",
  age: 40,
};

// Destructuring
const { name, age } = myObject;

console.log(name);
console.log(age);
