const mongoose = require('mongoose')
const blackListTokenSchema = new mongoose.Schema({
    token: { typeof: 'string' },
    
})
const blackListTokenModel=mongoose.model('User', blackListTokenSchema)
module.exports ={blackListTokenModel}