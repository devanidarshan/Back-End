const express = require ('express');
const server = express();           // Create Server

server.get('/', (req , res) =>{
     res.end('Welcome To Express .js');
});
server.get('/user', (req , res) =>{
    res.end('Welcome To Express .js');
});
server.get('/product', (req , res) =>{
    res.end('Welcome To Express .js');
});

server.listen(7777,() =>{
    console.log(`Server start at http://localhost:7777`);
})