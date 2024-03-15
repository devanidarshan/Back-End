const express = require('express');
const productRoutes = express.Router();
const {verifyToken} = require('../Helpers/verifyToken')

const {addProduct , getAllProduct , getProduct , updateProduct , deleteProduct} = require('../Controller/product.controller')

// ADD PRODUCT
productRoutes.post('/add-product' , verifyToken, addProduct );

// GET ALL PRODUCTS
productRoutes.get('/get-all-product' , verifyToken,  getAllProduct );

// GET PRODUCT
productRoutes.get('/get-product' , verifyToken, getProduct );

// UPDATE PRODUCT
productRoutes.patch('/update-product' , verifyToken , updateProduct );

// DELETE PRODUCT
productRoutes.delete('/delete-product' , deleteProduct );


module.exports = productRoutes;