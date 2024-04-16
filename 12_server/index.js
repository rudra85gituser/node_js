//lecture 1
//how we can see,make and use it
// to access web pages of any web application  we need a web server
// the web server handles all the http request for the web application
// eg  - myntra online web application  -> about page ,order page , mens cloth page  -> all page served by web server
//node.js provides capabilities to create your own web server which will handle http request asynchronously 

//eg - IIS is a web server for asp.net web application
//eg - APACHE is a web server for the PHP or java web application

// web server serves web pages to user


//using we can make our own webserver

//the http.createserver() method includes request and response parameters which is supplied by node js
//the request object can used to get info about current web request , http request
//eg . url,request ,header ,data
// the response object is used to send a response for a current http request
//you should an  http with correct content type

//to create server we reqire http module

const http = require("http");

const server = http.createServer((req,res)=>{res.end("hello from the other side")});
//here 8000 is random port number and 127.0.0.1  is the local host number
server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the web server")
});


/*"Localhost" refers to the local computer that a program is running on. It is commonly used to establish a connection to the same computer that the program is running on, typically for testing and development purposes.

When you access "localhost" in a web browser, you are connecting to a web server running on your own computer. This is often used for web development to test websites or web applications before they are deployed to a live server.

In networking, "localhost" is usually represented by the IP address 127.0.0.1. This IP address is reserved for loopback testing, which means that any data sent to this address is routed back to the same computer.*/


