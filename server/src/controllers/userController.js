require('dotenv').config()
const { userModel } = require("../models/userModel");
const bcrypt= require("bcrypt")
const jwt= require("jsonwebtoken");
const { blackListTokenModel } = require('../models/blackListToken');
const saltRound=10;

const createUser=async(req,res)=>{
    const {firstName,lastName,email,phone,password,role}=req.body
    try {
        const checkEmail=await userModel.findOne({ email: email})
        if(checkEmail){
            return res.status(400).json({error:false,msg:'Email already exist'});   
        }
        const hashPassword= await bcrypt.hash(password,saltRound);
        const newUser=new userModel({firstName,lastName,email,phone,password:hashPassword,role});
          await newUser.save()
          return res.status(201).json({error:false,msg:'user registration Successful',user:newUser}); 
    } catch (error) {
      return res.status(500).json({error:error.message}); 
    }
}

const login=async (req, res)=>{
  const {email,password}=req.body
  try {
    const checkEmail=await userModel.findOne({ email: email})
    if(!checkEmail){
        return res.status(404).json({error:false,msg:'user not Found'});   
    }
    const match= bcrypt.compare(password,checkEmail.password);
    if(!match){
      return res.status(400).json({error:false,msg:'credential did not matched'});
    }
 const access_token= jwt.sign({userId:checkEmail.userId},process.env.SECRET_KEY,{expiresIn:"1d"})
 const refresh_token= jwt.sign({userId:checkEmail.userId},process.env.SECRET_KEY,{expiresIn:"15min"})
return res.status(200).json({error:false,msg:'user loggedIn successfully',access_token:access_token,refresh_token:refresh_token,username:`${checkEmail.firstName} ${checkEmail.lastName}`,role:checkEmail.role});
  } catch (error) {
    return res.status(500).json({error:error.message}); 
  }
}

const logout=async (req, res)=>{
  const token=req.headers.authorization.split(" ")[1]

  try {
    if(!token){
      return res.status(401).json({error:false,msg:'please provide token'});
    }
    const newBlackLIstToken=new blackListTokenModel({token});
          await newBlackLIstToken.save()
          return res.status(200).json({error:false,msg:'user loggedOut Successfully'});
  } catch (error) {
    return res.status(500).json({error:error.message}); 
  }
}

const getAllUsers=async (req, res)=>{
  const {page=1,limit=10}=req.query
  try {
    const skip=(page-1)*limit
    const getAllUser=await userModel.find().limit(limit).skip(skip);
     
      return res.status(200).json({error:false,msg:'user retrieved  Successfully',users:getAllUser}); 
  } catch (error) {
    return res.status(500).json({error:error.message}); 
  }
}
module.exports ={createUser,login,logout,getAllUsers}