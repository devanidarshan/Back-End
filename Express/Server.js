const express = require ('express');
const server = express();       // Create Server
const path = require('path');

server.post('/', (req , res) =>{
     res.send('Post Method');
});

server.get('/', (req , res) =>{
    res.end('Welcome to Express.js');
});

server.put('/', (req , res) =>{
    res.status(400).json({message:'Put Method Call'});
});

server.patch('/', (req , res) =>{
    res.sendFile(path.join(__dirname,'abc.txt'));
})

server.delete('/', (req , res) =>{
    res.sendStatus(201);
})

server.listen(7777,() =>{
    console.log(`Server start at http://localhost:7777`);
})