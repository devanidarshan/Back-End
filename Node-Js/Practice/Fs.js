// Asynchronous 
var fs = require ("fs");

// fs.open ('input.txt' , (err , data) => {
//      if(err) {
//         return console.log(err);
//      }
//      console.log("File open successfully");
// });

// Synchronous

fs.openSync ('input.txt');
console.log("File Open SuccessFully");
