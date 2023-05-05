const express = require('express');
const { registerUser , fetchUsersControllers ,loginUserControllers } = require("../../controllers/users/usersController");

// call our controllers function here then export  this to app file
const userRoute = express.Router();
userRoute.post('/Auth', registerUser); // back to it because AUTH 
userRoute.post('/login', loginUserControllers);

userRoute.get('/', fetchUsersControllers);

module.exports = userRoute;