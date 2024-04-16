//json stands for java script object notation . 
//json is a light waight format for storing and transporting data .
//json is often used when data is sent from server to a web page


//creating a object in js

/*const biodata = {
    name: "rudra",
    age: 21,
    enrollment: "221b312",
};
console.log(biodata.enrollment);
*/

// to convert the above object to json
//there are two methods to convert object into json

//const jsonData = JSON.parse(); means -  json to object 
//const jsonData = JSON.stringify(); -  object to json

//use second method
const biodata = {
    name: "rudra",
    age: 21,
    enrollment: "221b312",
};
const jsonData = JSON.stringify(biodata);
console.log(jsonData);
//this do not give us specific /individual data----console.log(jsonData.channel);   

// to get data in object format
const objectData = JSON.parse(jsonData);
console.log(objectData);
//this do  give us specific /individual data----console.log(jsonData.channel);
//eg
console.log(objectData.name);

