
//we are read and writing in a file simultaniously
//3rd way
//reading from a stream
//creating a readabe stream
//handle stream events -- data,end ,error
//with out doing a lot of code as done in 16_streams we can do streaming(reading and writing data simultaniously) by writing single line code 
const fs  = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req,res) =>{

    const rstream = fs.createReadStream("input.txt");
     
    rstream.pipe(res);
});
server.listen(8000,"127.0.0.1");