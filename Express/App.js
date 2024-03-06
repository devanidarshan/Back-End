const express = require('express');
const app = express();                  //Server Create
const port = 7777;
const morgan = require('morgan');

// Mongoose 
const mongoose = require('mongoose');

// Database Connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/product');
}
main()
.then(() => console.log('DB is connected...'))
.catch( err => console.log(err));


// Middleware
app.use(express.json());                 //Built-in
app.use(morgan('dev')); 


// const productRoute = require('./Routes/product.routes');
// app.use('/products', productRoute);

// const userRoute = require('./Task/Routes/user.routes');
// app.use('/users', userRoute);

// Database connection
// const userRoutes = require('./Routes/user.routes');
// app.use('/api/user', userRoutes);

const product1Routes = require('./Routes/product1.routes');
app.use('/api/products', product1Routes);

app.listen(port, () => {
    console.log(`Server start at http://localhost:7777`);
});
