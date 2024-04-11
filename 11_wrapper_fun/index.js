// in node js individual file are called modules
//all variables and functions have private scope inside their file

// in advance js the IFEE function is known as wrapper function in node js

//now this is module wrapper function 
//exports , require , module , _filename , _dirname these are local variables or modules which are attaches with each code to get the access of various function

//exports , require , module , _filename , _dirname the code of these functions are get wrapped and we can use it by simply using their name

//eg using require we can get diffirent predefined mofules and packages

(function(exports , require , module , _filename , _dirname){
    const name  = "vinod";
    comsole.log(name);   
});

//this are basic function   and varibles
const name  = "vinod";
comsole.log(name);

// module wrapper function  gives privacy to vatiables and functions
(function(){
     var a = "mslv"   
})();

console.log(a);