// if we have created some function and variables in operator.js file so how we can use thosse function in index.js file
//now we are going to create out own modules not using built in modules

//in node js we call each individual file as module

// in node js each individual file we can say as a module and each module scope is inside its function

//no how we can access operator file and add function , or how we can do changes in scope of a file

// we have done private scope public in operator.js file

//to require file
/*  const add = require("./operator.js");
console.log(add(5,5,));  */

/*  const name = require("./operator.js");
console.log(name);  */

//now if there are two function and we want to access them 
/*  const oper = require("./operator.js");
console.log(oper);
console.log(oper.add(5,5,));
console.log(oper.sub(10,5,));  */

//to directely call add and sub function without referencing variable oper
const {add,sub,name} = require("./operator.js");

console.log(add(5,5,));
console.log(sub(10,5,));
console.log(name);