const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const port = 7777;

app.listen( port , async () => {
    mongoose.connect('mongodb://127.0.0.1:27017/DDD')
    .then(() => console.log("DB is Connected..."))
    .catch(err => console.log(err.message));
    console.log("Server start at http://localhost:7777");
})

// User Routes
const usersRoute = require('./Src/Routes/index.route');
app.use('/api/user', usersRoute);

// async function main (){
//     mongoose.connect('mongodb://127.0.01.27017/Project')
// }

// main()
// .then(() => console.log('Db is Connected...'))
// .catch(err => console.log(err.message))

// app.listen( port , async () => {
//     console.log("Server start at http://localhost:7777");
// })
