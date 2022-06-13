const chalk = require("chalk");

const helloWorld = "Hello world!";

function greeting(message) {
  console.log(chalk.red(message));
}

module.exports = { helloWorld, greeting };
