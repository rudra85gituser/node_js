//when we have to pass single function 
//const add = (a,b)=>{return a+b;}
//module.exports = add;

//name module or variable
const name  = "vinod";

// we have done private scope public

// to pass two function in a file
const add = (a,b)=>{return a+b;}
const sub = (a,b)=>{return a-b;}
/*  module.exports.add = add;
module.exports.sub = sub;  */

//to write this  module.exports.add = add;  ,  module.exports.sub = sub;  in single line .
module.exports  = {add,sub,name} ;

