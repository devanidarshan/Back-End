const express = require('express');
const cartRoutes = express.Router();
const { verifyToken} = require('../Helpers/verifyToken');
const {
    addToCart,
    getAllCart,
    getCart,
    deleteCart,
    updateCart
} = require('../Controller/cart.controller');

// ADD CART
cartRoutes.post('/add-cart', verifyToken, addToCart);

// GET ALL CARTS
cartRoutes.get('/get-carts', verifyToken, getAllCart);

// GET SPECIFIC CART
cartRoutes.get('/get-cart', verifyToken, getCart);

// UPDATE CART
cartRoutes.patch('/update-cart', verifyToken, updateCart);

// DELETE CART
cartRoutes.delete('/delete-cart', verifyToken, deleteCart);

module.exports = cartRoutes;