const express = require('express');
const { logout, getAllUsers, login, createUser } = require('../controllers/userController');



const userRouter = express.Router();


userRouter.post('/register',createUser)
userRouter.post('/login',login)
userRouter.get('/getAll',auth,getAllUsers)
userRouter.get('/logout',logout)
module.exports = {userRouter}