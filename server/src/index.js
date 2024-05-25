
require('dotenv').config()
const express = require('express');
const { ConnectionToDB } = require('./config/dbConnection');
const { userRouter } = require('./routes/userRoutes');

const app=express();
app.use(express.json())

app.use('/users',userRouter)
app.listen(process.env.PORT||8080, async ()=>{
    try {
         await ConnectionToDB()
        console.log(`server is running at ${process.env.PORT}`)   
    } catch (error) {
      console.log(error.message)  
    }  
})