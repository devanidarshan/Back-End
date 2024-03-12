const express = require('express');
const productRoute = express.Router();

const { addProduct,
    deleteProduct,
    getAllProduct,
    getProduct,
    replaceProduct,
    updateProduct} = require('../Controller/product.controller');

// Create Product
productRoute.post('/',addProduct);

// Get all products
productRoute.get('/',getAllProduct);

// Get single product
productRoute.get('/single-product',getProduct);

// Replace single product
productRoute.put('/replace-product',replaceProduct);

// Update single product
productRoute.patch('/update-product',updateProduct);

// Delete single product
productRoute.delete('/delete-product',deleteProduct);   

module.exports = productRoute;