const express = require('express');
const app = express();                  //Server Create

const port  = 7777;
const morgan = require('morgan');
const products = require('./Public/Product.json');

// Middleware

app.use(express.json());
app.use(morgan('dev'));

// End-Points - CRUD
app.post('/products',(req,res) =>{
    // console.log(req.body);
    const product = req.body;
    products.push(product);
    // products.push({...req.body});                                   // Spread Operator
    res.status(201).json({message:'Product is added successfully'});
});

// Two Methods - Get (All Products and Single Product)
app.get('/products',(req,res) =>{                              // All
    res.status(200).json(products);
});

app.get('/products/single-product',(req,res) =>{               // Single Product
    const id = +req.query.id;                                  // Convert Number Method (+ Or Number)
    // console.log(id);
    let product = products.find((item) => item.id === id);
    res.status(200).json(product);
});

// Replace Single Product
app.put('/products/replace-product',(req,res) =>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id);
    let product = products[productIndex];
    products.splice(productIndex, 1 , {...req.body});
    // console.log(product);
    res.status(200).json({message:'Product is Replaced Successfully'});
});

// Update Single Product
app.patch('/products/update-product',(req,res) =>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id);
    let product = products[productIndex];
    let item = products.splice(productIndex, 1 , {...product, ...req.body});
    // console.log(product);
    res.status(200).json({message:'Product is Update Successfully'});
});

// Delete Single Product
app.delete('/products/delete-product',(req,res) =>{
    const id = +req.query.id;
    let productIndex = products.findIndex((item) => item.id === id);
    let product = products[productIndex];
    let item = products.splice(productIndex, 1);
    console.log(product);
    res.status(200).json({message:'Product Delete Successfully'});
});

app.listen(port, () => {
    console.log('Server start at http://localhost:7777');
});