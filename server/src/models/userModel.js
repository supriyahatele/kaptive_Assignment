const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: { type: 'string',required: true},
    lastName: { type: 'string',required: true},
    email: { type: 'string',unique: true,required: true},
    phone: { type: 'number',required: true }  ,
    password: { type: 'string',required: true } ,
    role:{type:'string',enum:["admin","user"],default:"user"} 
},
{versionKey:false,timestamp:true})
const userModel=mongoose.model('user', userSchema)
module.exports ={userModel}