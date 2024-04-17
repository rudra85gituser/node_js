//1
/*
    streaming means listening to music orwatching video in real time instead of downloading fole to your computer .

    In Node.js, streams are a powerful feature that allows you to read and write data in chunks, rather than all at once. Streams are especially useful when working with large amounts of data, as they can improve performance and reduce memory usage. There are four types of streams in Node.js:

- Readable streams: Used to read data from a source.
- Writable streams: Used to write data to a destination.
- Duplex streams: Streams that are both readable and writable, allowing for bidirectional data flow.
-  -Transform streams: A type of duplex stream where the output is computed based on the input.
   
Here's a basic example of how you can use readable and writable streams in Node.js to copy the contents of one file to another:
javascript
Copy code

const fs = require('fs');

// Create a readable stream from input.txt
const readableStream = fs.createReadStream('input.txt');

// Create a writable stream to output.txt
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream to the writable stream to copy the contents
readableStream.pipe(writableStream);

// Log a message when the copying is complete
writableStream.on('finish', () => {
    console.log('File copied successfully.');
});



//2

      In Node.js, streams are implemented using the EventEmitter class, which allows streams to emit events that can be listened to and acted upon. Streams emit various events depending on their state and the data being processed. Some common events emitted by streams include:

 - data: Emitted when data is available to be read from a readable stream.
 - end: Emitted when there is no more data to be read from a readable stream.
 - error: Emitted when an error occurs in a stream.
 - finish: Emitted when all data has been written to a writable stream.
 
 Here's an example of how you can use a readable stream as an event emitter to read data from a file:
javascript
Copy code
const fs = require('fs');

// Create a readable stream from input.txt
const readableStream = fs.createReadStream('input.txt');

// Listen for the 'data' event to read chunks of data
readableStream.on('data', (chunk) => {
    console.log('Received chunk of data:', chunk.toString());
});

// Listen for the 'end' event to know when all data has been read
readableStream.on('end', () => {
    console.log('Finished reading data.');
});

// Listen for the 'error' event to handle any errors
readableStream.on('error', (err) => {
    console.error('An error occurred:', err);
});
*/



//3
//we are read and writing in a non streaming manner
//1nd way
//writing in a file and then reading it through server

/*const fs  = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req,res) =>{
    var fs = require("fs");
    fs.readFile("input.txt", (err,data)=>{
        if(err) return console.error(err);
        res.end(data.toString());
    });
    });
server.listen(8000,"127.0.0.1");
*/



//4
//we are read and writing in a file simultaniously
//2nd way
//reading from a stream
//creating a readabe stream
//handle stream events -- data,end ,error

const fs  = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req,res) =>{

    const rstream = fs.createReadStream("input.txt");

    rstream.on("data" , (chunkdata)=>{
        res.write(chunkdata);
});
    rstream.on("end" , ()=>{
        res.end();
});
    rstream.on("error" , (err)=>{
        console.log(err);
        res.end("file not found");
});

});
server.listen(8000,"127.0.0.1");