const express = require("express");
const userRoutes = express.Router();
const {
  registerUser,
  getAllUsers,
  deleteUser,
  getUser,
  updateUser,
  loginUser,
} = require("../Controller/user.controller");

userRoutes.post("/register-user", registerUser);
userRoutes.post("/login-user", loginUser);
// userRoutes.get("/get-all-users", getAllUsers);
// userRoutes.get("/get-user", getUser);
// userRoutes.put("/update-user", updateUser);
// userRoutes.delete("/delete-user", deleteUser);

module.exports = userRoutes;
