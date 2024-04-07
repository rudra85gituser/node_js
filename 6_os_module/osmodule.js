// to store and use os module
const os = require("os");

// to see which architecture we are using 32bit or 64 bit
console.log(os.arch());

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
//visit node js.org to get all module info

//to see free memory in system in bytes
const freeMemory = os.freemem();
//console.log(freeMemory);
// to use template and literals to see free memory in gb
console.log(`${freeMemory/1024/1024/1024}`);

// to see total memory
const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);