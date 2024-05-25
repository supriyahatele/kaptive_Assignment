require('dotenv').config()
const mongoose = require('mongoose')
const ConnectionToDB=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("connected to db")
    } catch (error) {
       console.log(`Failed to connect to db`) 
    }
}
module.exports = {ConnectionToDB}