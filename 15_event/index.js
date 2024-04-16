// how we can fire a event by clicking a button
// events module 
//node js has built in module caled events
// where we can create ,fire, and listen for our own events

//eg 1 registering for the event to be fired only one time using ones 
//eg 2 creating an event emmiter instance and register a couple of callbacks
//eg 3 registering gor the event with callback parameters

//creating a object name - events
const EventEmitter  =  require("events");
const event = new EventEmitter();

//another way or writing
/* 
const EventEmitter  =  require("events");
const event  =  require("events");
const EventEmitter = new event.EventEmitter();
*/

//eg 1
/*
event.on("saymyname",()=>{
    console.log('my neme is rudra')
});
event.on("saymyname",()=>{
    console.log('my neme is yadav')
});
event.on("saymyname",()=>{
    console.log('my neme is nothing')
});
event.emit("saymyname");
*/


//eg 2
event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkpage",200,"ok");