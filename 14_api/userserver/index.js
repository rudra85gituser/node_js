/*api - 
API stands for Application Programming Interface. It's a set of rules and protocols that allows one software application to interact with another. APIs define the methods and data formats that applications can use to request and exchange information.

In simpler terms, an API can be thought of as a messenger that takes a request from you (the client) and tells a system (the server) what you want to do. The system then returns the requested information to you through the API.

APIs are used in many ways, such as:

Allowing different software systems to communicate with each other.
Enabling developers to access the functionality of a system or service without needing to understand its internal workings.
Providing a way for developers to extend the functionality of their own applications by integrating with other services or platforms.
For example, when you use a weather app on your phone, the app is making API calls to a weather service to get the current weather data for your location. The weather service's API defines how the app can request this data and how the data will be formatted when it's returned.
*/

 //whenever we used to do anything using data ,or commit,push, use ,fetch data we do or store it in json format

 const http = require("http");
 const fs = require("fs");

const server = http.createServer((req,res)=>{
   // console.log("req.url");
if(req.url == "/")
{
    res.end("hello from the other side");
}
else if(req.url =="/about")
{
    res.end("hello from the about    side");
}
else if(req.url =="/contact")
{
    res.end("hello from the contact        side");
}
else if(req.url =="/userapi")
{
    fs.readFile(`${__dirname}14_api/userapi/userapi.json` , "utf-8" , (err,data) =>
{
    console.log(data);
    res.end(data);
    // to get a particular data from api 
    const objData = JSON.parse(data);
    res.end(objData[2].name);
});

}
else{
    res.writeHead(404,{"Content-type":"text.html"});
    res.end("<h1>error 404! page does not exist</h1>");
}
});

//console.log("req.url");
//here 8001 is random port number and 127.0.0.1  is the local host number
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the web server 2")
});
