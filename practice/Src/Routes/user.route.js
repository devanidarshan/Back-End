const express = require('express');
const userRoute = express.Router();
const { userVerifyToken} = require("../Helpers/userVerifyToken");

const {
     registerUser,
     loginUser,
     getUserById,
     getAllUser,
     updateUser,
     deleteUser,
} = require("../Controller/user.controller");

// Register user
userRoute.post('/register-User' , registerUser);

// Login user
userRoute.post('/login-User' , loginUser );

// Get Specific user
userRoute.get('/Get-Specific-User' , userVerifyToken , getUserById);

// Get All  user
userRoute.get('/Get-All-User' , userVerifyToken , getAllUser);

// Update user
userRoute.put('/update-User' , userVerifyToken , updateUser);

// Delete user
userRoute.delete('/delete-User' , userVerifyToken , deleteUser);

module.exports = userRoute;
