//ques
//1 create a folder name it rudra
//2 create a file in it named bio.txt and data into it.
//3 add more data into the file
//4 read fdata without buffer data
//file encoding
//5 rename file to mybio.txt
//now delete both file and folder


//CURD OPERATION - (CREATE , UPDATE , READ , DELETE)

// to go out from folder cd ..
const fs = require("fs");
//new file created
//fs.mkdirSync("rudra");
// to write in file
fs.writeFileSync("rudra/bio.txt","my name is rudra aydab");
//overwrite
fs.writeFileSync("rudra/bio.txt","my name is rudra yadav singh pratap");
//to add data
fs.appendFileSync("rudra/bio.txt","221b312");
// to read data on terminal
const data = fs.readFileSync("rudra/bio.txt","utf8");//search utf8
console.log(data);
//rename this file
fs.renameSync("rudra/bio.txt","rudra/myybio.txt")
//delete file
fs.unlinkSync("rudra/myybio.txt");
//delete file method two
//fs.rmdirSync("rudra");



