const express = require('express');
const app = express();                  //Server Create
const port = 7777;
const morgan = require('morgan');
const path = require('path');

// Middleware

let myfun = (req, res , next) => {
    console.log(req.query);

    if((req.query.age) >= 18){
        next();
    }else{
        res.send('Sorry! You have under below 18');
    }
}

// app.use(myfun);                                                      //Application Level Middleware
app.use(express.json());                                                //Built-in
app.use(express.urlencoded({extended: true}));                          //Built-in
app.use(express.static(path.join(__dirname,'Public','image.jpg')));     // Built-in

app.use(morgan('dev')); 
app.get('/', myfun, (req, res) => {
     res.send('Welcome to Express.js');
});

app.post('/',(req, res) => {
    console.log(req.body);
    res.send('Post Method');
});

app.listen(port, () => {
    console.log(`Server start at http://localhost:7777`);
});
