const express = require('express');
const userRoutes = express.Router();
const {addUser} = require('../Controller/user.controller');

userRoutes.post('/add-user', addUser);

module.exports = userRoutes;