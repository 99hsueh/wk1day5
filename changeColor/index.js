var chalk = require("chalk");
var bb = chalk.yellow.bold;
var message = chalk.bold.underline("Hello") + " " + chalk.green.bold("World");
var input = bb(process.argv[2]);
console.log(message + " " + input);

