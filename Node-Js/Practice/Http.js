// HTTP MODULE :-

const http = require('http');
// const fs = require('fs');
// const data = fs.readFileSync('./Http.json','utf-8');

// 1ST METHOD :- CREATE SERVER

const server = http.createServer((req,res) =>{
    // res.setHeader('Dummy','Dummy Value');
    // res.setHeader('Content-type','text/html');
    // res.setHeader('Content-type','application/json');
    // console.log(req.url);
       res.end('Welcome to Local Server...');
}); // Server Create

// 2ND METHOD :- CREATE SERVER

// const server = http.createServer();
// server.on('request',(req,res) =>{
//     // res.setHeader('Content-type','text/html');
//     // res.write('<h1 style = "color:red" >Hello</h1>');
//     // res.write('{"Hello" : 123}');
//     res.end();
// }) // Server Create

server.listen(7777,() =>{
    console.log('Server Start at Port 7777');
});




