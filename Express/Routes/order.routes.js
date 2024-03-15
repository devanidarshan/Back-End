const express = require('express');
const orderRoutes = express.Router();
const {verifyToken} = require('../Helpers/verifyToken');

const {
    newOrder,
    getAllOrders,
    getOrder,
    deleteOrder,
} = require('../Controller/order.controller');

// ADD ORDER
orderRoutes.post('/add-order', verifyToken, newOrder);

// GET ALL ORDER
orderRoutes.get('/get-all-order', verifyToken, getAllOrders);

// GET SPECIFIC ORDER
orderRoutes.get('/get-order', verifyToken, getOrder);

// DELETE ORDER
orderRoutes.delete('/delete-order', verifyToken, deleteOrder);

module.exports = orderRoutes;