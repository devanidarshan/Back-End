const express = require("express");
const userRoutes = express.Router();
const {verifyToken} = require("../Helpers/verifyToken");

const {
  registerUser,
  getAllUsers,
  deleteUser,
  getUser,
  updateUser,
  loginUser,
} = require("../Controller/user.controller");

// Registered User
userRoutes.post("/register-user", registerUser);

// Login User
userRoutes.post("/login-user", loginUser);

// Get All Users
userRoutes.get("/get-all-users",verifyToken,getAllUsers);

// Get User
userRoutes.get("/get-user",verifyToken,getUser);

// Update User
userRoutes.put("/update-user",verifyToken,updateUser);

// Delete User
userRoutes.delete("/delete-user",verifyToken,deleteUser);

module.exports = userRoutes;
