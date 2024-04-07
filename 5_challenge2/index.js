//ques
//1 create a folder name it rudra using core modules
//2 create a file in it named bio.txt and data into it.
//3 add more data into the file
//4 read fdata without buffer data
//file encoding
//5 rename file to mybio.txt
//6 now delete both file and folder

//(err,data) this is call back function which tells us that if err then stop else get data

const fs = require("fs");

//1
//fs.mkdir("thapa",(err) => {console.log("folder created");});


//2
//fs.writeFile("./thapa/bio.txt" , "my name is rudra yadav" , (err) =>{console.log("asyncronouly file created");});


//3
//fs.appendFile("./thapa/bio.txt" , " my enrollment is 221b312" , (err,data) =>{console.log("files data appendted");});


//4
// eg of err value in function by changing the name of bios
//fs.readFile("./thapa./bios.txt",'utf-8' , (err,data) =>{console.log(err);});


//utf-8 is used to get gata in string form if we dont use utf-8 then we will get buffer data = <Buffer 6d 79 20 6e 61 6d 65 20 69 73 20 72 75 64 72 61 20 79 61 64 61 76 20 6d 79 20 65 6e 72 6f 6c 6c 6d 65 6e 74 20 69 73 20 32 32 31 62 33 31 32>
//fs.readFile("./thapa/bio.txt",(err,data) =>{console.log(data);});

//fs.readFile("./thapa/bio.txt", "utf-8" , (err,data) =>{console.log(data);});


//5
//fs.rename("./thapa/bio.txt" , "./thapa/biodata.txt" , (err) => { console.log("renaming is done"); });


//6
//fs.unlink("./thapa/biodata.txt" , (err) => {console.log('file deleted');});


//7
//fs.rmdir("./thapa" , (err) => {console.log('folder deleted');});