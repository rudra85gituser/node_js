//stands for node package manager
//in node js we called packages as modules
//while doing projects we can manage AND TRACK OUT PACKAGES AND LIBRARIEA
//how we can do form validation and using package how we can do changes in terminal output and many more
//java script have highest npm



//firstly initialize npm module
//esc + ctrl + `
//secondly
//1 we have to import a validator package
//2 we have to import a chalk package

// all the packages which we store using npm will get stored in packsge.json as dependencies
//clearcut meaning  = while doing a project package.jsn stores all information of packages used / inatalled during project
//all project and libraries get stored in package.jsn++

//try to initialize packages in root folder

//package.json  this holds  information about all packages and chalk module
//package lock.json  this holds more information about chalk module

//1
//chalk package = Terminal string styling done using chalk , to make terminal colorful

const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
/*there are many editment options in node.js
Modifiers
reset - Resets the current color chain.
bold - Make text bold.
dim - Emitting only a small amount of light.
italic - Make text italic. (Not widely supported)
underline - Make text underline. (Not widely supported)
inverse- Inverse background and foreground colors.
hidden - Prints the text, but makes it invisible.
strikethrough - Puts a horizontal line through the center of the text. (Not widely supported)
visible- Prints the text only when Chalk has a color level > 0. Can be useful for things that are purely cosmetic.
*/
console.log("chalk module");
console.log("  ");
console.log(chalk.blue.italic('Hello world!'));
console.log(chalk.blue.underline('Hello world!'));
console.log(chalk.blue.inverse('Hello world!'));
console.log(chalk.blue.underline('Hello world!'));
console.log(chalk.red.underline('false'));
console.log(chalk.green.underline('true'));

console.log("  ");
console.log("validator module");
console.log("  ");
//2 using validator we can see current version,or a entry or input is valid or not 


//by default it show true
const validator = require('validator');
const res = validator.isEmail('rudra@rudra.com'); 
console.log(res);
//if gmail is valid
const res1 = validator.isEmail('rudra@rudra.com'); 
console.log(res1 ? chalk.green.inverse(res1) : chalk.red.inverse(res1));
console.log(res1);
//if gmail is not valid
const res2 = validator.isEmail('rudrarudra.com');
console.log(res2 ? chalk.green.inverse(res2) : chalk.red.inverse(res2));
console.log(res2);

E:\Study\node_js\10_nodemon\node_modules