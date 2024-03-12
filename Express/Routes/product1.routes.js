const express = require('express');
const product1Route = express.Router();
const {verifyToken} = require("../Helpers/verifyToken");


const { addProduct,
    deleteProduct,
    getAllProducts,
    getProduct,
    updateProduct} = require('../Controller/product1.controller');

// Register Product
product1Route.post('/add-product',addProduct);

// Get all products
product1Route.get('/get-all-product',verifyToken,getAllProducts);

// Get single product
product1Route.get('/single-product',verifyToken,getProduct);

// Update single product
product1Route.patch('/update-product',verifyToken,updateProduct);

// Delete single product
product1Route.delete('/delete-product',verifyToken,deleteProduct);   

module.exports = product1Route;