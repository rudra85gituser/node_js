//previosly we have seen how to work synchronously and asynchronously
//now diff b/w sync and async

//import file system module
const fs = require("fs");

//sync file module
//takes multiple request and print serial wise
//const data = fs.readFileSync("readwrite.txt","utf-8");
//console.log(data);
//console.log("after the data part");

//async file module
//takes multiple request and print the shortest first
fs.readFile("readwrite.txt","utf-8",(err,data) =>
{
    console.log(data);
});
console.log("after the data part");


// difference b/w aync and async
//we have created the readwrite file so what will run data in read and write or data written in async.js file which is calling read and write
// there is loss in synchronous if readwrite file is taking 10 seconds then data in async.js file has to wait for long 
