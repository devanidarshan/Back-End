require('dotenv').config();
const express = require('express');
const app = express();                  //Server Create
const port = process.env.PORT;
const morgan = require('morgan');

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
app.use(express.json());                 //Built-in
app.use(morgan('dev')); 


// PRODUCTS ROUTES
// const productRoute = require('./Routes/product.routes');
// app.use('/products', productRoute);

// USERS ROUTES
// const userRoute = require('./Task/Routes/user.routes');
// app.use('/users', userRoute);

// Database connection:-

// USER ROUTES
// const userRoutes = require('./Routes/user.routes');
// app.use('/api/user', userRoutes);

// PRODUCT1 ROUTES
// const product1Routes = require('./Routes/product1.routes');
// app.use('/api/products', product1Routes);

// CART ROUTES
const cartRoutes = require('./Routes/cart.routes');
app.use('/api/cart', cartRoutes);

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});
