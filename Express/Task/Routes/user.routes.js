const express = require('express');
const userRoute = express.Router();
const { addUser,
    deleteUser,
    getAllUser,
    getUser,
    replaceUser,
    updateUser} = require('../Controller/user.controller');

// Create Product
userRoute.post('/',addUser);

// Get all products
userRoute.get('/',getAllUser);

// Get single product
userRoute.get('/single-user',getUser);

// Replace single product
userRoute.put('/replace-user',replaceUser);

// Update single product
userRoute.patch('/update-user',updateUser);

// Delete single product
userRoute.delete('/delete-user',deleteUser);   

module.exports = userRoute;