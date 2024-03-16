const express = require("express");
const userRoutes = express.Router();
const {upload} = require("../Helpers/imageUpload");
const {verifyToken} = require("../Helpers/verifyToken");

const {
  registerUser,
  getAllUsers,
  deleteUser,
  getUser,
  updateUser,
  loginUser,
  addNewUser
} = require("../Controller/user.controller");

// REGISTERED USER
userRoutes.post("/register-user", registerUser);

// LOGIN USER
userRoutes.post("/login-user", loginUser);

// GET ALL USERS
userRoutes.get("/get-all-users",verifyToken,getAllUsers);

// GET USER
userRoutes.get("/get-user",verifyToken,getUser);

// UPDATE USER
userRoutes.put("/update-user",verifyToken,updateUser);

// DELETE USER
userRoutes.delete("/delete-user",verifyToken,deleteUser);

// ADD NEW USER
userRoutes.post('/add-user',upload.single('profileImage'), addNewUser);

module.exports = userRoutes;
