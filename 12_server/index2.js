//lecture 2
//how we can acces diff web pages in our server and how we can make server
//A URL, or Uniform Resource Locator, is a reference or address used to access resources on the internet. It typically consists of several components:

const http = require("http");

const server = http.createServer((req,res)=>{
   // console.log("req.url");
if(req.url == "/")
{
    res.end("hello from the other side");
}
else if(req.url =="./about")
{
    res.end("hello from the about    side");
}
else if(req.url =="./contact")
{
    res.end("hello from the contact        side");
}
else{
    res.end("error 404!");
}
});

//console.log("req.url");
//here 8001 is random port number and 127.0.0.1  is the local host number
server.listen(8001,"127.0.0.1",()=>{
    console.log("listening to the web server 2")
});
