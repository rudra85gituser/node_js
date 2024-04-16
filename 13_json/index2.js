
//convert to obj to json 
//add to other file
//read file
//convert json to obej
//print on console

//1
const biodata = {
    name: "rudra",
    age: 22,
    enrollment: "221b312",
    college: "juet",
    adhaar: 866347968884,
};
//2
const fs = require("fs");
//3
const jsondata = JSON.stringify(biodata);
//5
fs.writeFile("json1.json" , jsondata , (err) =>{
console.log("done");
});
//6
fs.readFile("json1.json" , "utf-8", (err,data) =>{
    console.log(data);
    const orgdata = JSON.parse(data);
    console.log(data);
    });