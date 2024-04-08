// path module in node js prevents us to use extra modules ,plugins and dependencies 
// path module provides utility for working with file and directory paths and it can be accessed using 
const path = require("path");

//now if we have any restriction of only use or upload pdf file or txt file in our project then we have to hustle a lot
//but by using path module we can easily use a particular file
//previously  we have to write command on terminal to find the directory ,path ,ecxtension   but   by unsing this module we can do this in a file/server under repl environnment 
//previously it is vrry difficult in js to do these operation

//to find the name of directory , in directoyr name we have to pass the exact path
console.log(path.dirname("E:\ Study\ node_js\ 7_path_module\ path.js"));

//to find the extension name of file
console.log(path.extname("E:\ Study\ node_js\ 7_path_module\ path.js"));

//to get name of path or file name
console.log(path.basename("E:\ Study\ node_js\ 7_path_module\ path.js"));

// to get various information related to path , directiory , basename etcc
console.log(path.parse("E:\ Study\ node_js\ 7_path_module\ path.js"));

//to call single property of parse module
const myPath = path.parse("E:\ Study\ node_js\ 7_path_module\ path.js");
console.log(myPath.name);