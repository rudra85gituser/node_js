//modules are as same as the java script libraries 
// a set of function you want to include in your aplication
//node js has a set of build in modules which we can use without furthur inatallation


//using node js we can run js code on terminal without accessing brouser
const name = "rudra yadav";
console.log(name);


//node gives us authority to access files\os
//to access the modules of node js
//brouser--node.org--docs--long file system


//eg -- module to create file
//fs are core mudule
//file module
//here fs is used to store the functionality of the library/module fs
const fs = require("fs");
fs.writeFileSync("read.txt","welcome to my channel");
//this fs.writeFileSync module first creates a file read.txt and then writes welcome to my channel in this file 
//repeating this with extra info adds data to read file fs.writeFileSync("read.txt","welcome to my channel");
// to add data to file
fs.appendFileSync("read.txt","ksnwjngwojnvdlvnjeg");


//eg -- module to read file
const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);
//node js include one additional data type called buffer
//not available in brousers js
//buffer is mainly used to store binary data
// while reading from a file or recieving packets over the network

//<Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79 20 63 68 61 6e 6e 65 6c 6b 73 6e 77 6a 6e 67 77 6f 6a 6e 76 64 6c 76 6e 6a 65 67> 

//whenever we use to read file we get buffer data  on terminal 
//to convert this data to string
org_data = buf_data.toString();
console.log(org_data);


// to rename a file
fs.renameSync("read.txt","readwrite.txt");





