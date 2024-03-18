const express = require('express');
const server = express();             // Server Create
const path = require('path');

const ejs = require('ejs');
// const hbs = require('hbs');

server.set("view engine","ejs");
// server.set("view engine","hbs");

server.get('/student', (req, res) =>{
    let data = {
        name: "Darshan",
        age: 23,
        address: "Bangalore",
        hobbies:['reading','music']
    }
    res.render('student', data);
});

server.listen(7777, () => {
    console.log("Server start at http://localhost:7777");
});