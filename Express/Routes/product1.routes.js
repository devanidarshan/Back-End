const express = require('express');
const product1Route = express.Router();
const { addProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct} = require('../Controller/product1.controller');

// Create Product
product1Route.post('/',addProduct);

// Get all products
product1Route.get('/',getAllProducts);

// Get single product
product1Route.get('/single-product',getProduct);

// Update single product
product1Route.patch('/update-product',updateProduct);

// Delete single product
product1Route.delete('/delete-product',deleteProduct);   

module.exports = product1Route;