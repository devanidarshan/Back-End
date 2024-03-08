// ASYNCHRONOUS:-

const fs = require ("fs");
const {add , multiplication} = require('./basic')

fs.open ('input.txt' , (err , data) => {
     if(err) {
        return console.log(err);
     }
     console.log("File open successfully");
});

// SYNCHRONOUS:-

fs.openSync ('input.txt');
console.log("File Open SuccessFully");

// READ-FILE:-

let t1 = performance.now();
console.log("Addition is : ",add(10,5));
fs.readFile('input.txt' , 'utf-8' , (err , data) => {
    if(err) console.log(err);
    else console.log(data);
} )

let data = fs.readFileSync('input.txt', 'utf-8')
console.log(data); 

console.log("Multiplication is: " , multiplication(10,5));
let t2 = performance.now();
console.log("Time Diffrence: " ,t2-t1);

let txt = `#include<stdio.h>
int main()
{
    printf("Hello World);
}`

// WRITE-FILE:-

fs.writeFile("hello.c",txt,(err) =>{
    if(err) console.log(err);
    else console.log('File Write SuccessFully');
})

fs.writeFileSync("hello.c", "// Learning c Language");
console.log('File Write SuccessFully');

// APPEND-FILE:-

fs.appendFile('hello.c',txt,(err) =>{
    if(err) console.log(err);
    else console.log('File Append SuccessFully');
})


