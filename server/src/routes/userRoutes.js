const express = require('express');
const { logout, getAllUsers, login, createUser } = require('../controllers/userController');
const { auth } = require('../middleware/auth');



const userRouter = express.Router();


userRouter.post('/register',createUser)
userRouter.post('/login',login)
userRouter.get('/getAll',auth,getAllUsers)
userRouter.post('/logout',logout)
module.exports = {userRouter}