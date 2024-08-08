const userRoute = require('../Routes/user.route');
const usersRoute = require('express').Router();

usersRoute.use('/user', userRoute);

module.exports = usersRoute;