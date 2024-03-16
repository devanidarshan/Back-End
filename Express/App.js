require('dotenv').config();
const express = require('express');
const app = express();                  //Server Create
const port = process.env.PORT;
const morgan = require('morgan');
const path = require('path');

// MONGOOOSE
const mongoose = require('mongoose');

// DATABASE COLLECTION
async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);                  // Online Database
    // await mongoose.connect('mongodb://127.0.0.1:27017/product');    // Local Database
}
main()
.then(() => console.log('DB is connected...'))
.catch( err => console.log(err));


// MIDDLEWARE
let imagePath = path.join(__dirname, 'public','images');
app.use(express.json());                 //Built-in
app.use(morgan('dev')); 
app.use('/public/images', express.static(imagePath));


// Database connection:-

// USER ROUTES
const userRoutes = require('./Routes/user.routes');
app.use('/api/user', userRoutes);

// PRODUCT ROUTES
const productRoute = require('./Routes/product.routes');
app.use('/api/product', productRoute);

// CART ROUTES
const cartRoutes = require('./Routes/cart.routes');
app.use('/api/cart', cartRoutes);

// ORDER ROUTES
const orderRoutes = require('./Routes/order.routes');
app.use('/api/order', orderRoutes);

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});
