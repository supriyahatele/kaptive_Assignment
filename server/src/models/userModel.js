const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { typeof: 'string',required: true},
    email: { typeof: 'string',unique: true,required: true},
    password: { typeof: 'string',required: true }   
},{versionKey:false,timestamp:true})
const userModel=mongoose.model('User', userSchema)
module.exports ={userModel}