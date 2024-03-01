const express = require('express');
const app = express();                  //Server Create
const port = 7777;
const morgan = require('morgan');

// Middleware
app.use(express.json());                //Built-in
app.use(morgan('dev')); 


const userRoute = require('./Task/Routes/user.routes');
app.use('/users', userRoute);

app.listen(port, () => {
    console.log(`Server start at http://localhost:7777`);
});
