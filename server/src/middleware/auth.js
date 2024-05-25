
const jwt= require("jsonwebtoken");
const auth=async (req, res, next) => {
    const token =req.headers.authorization
    try {
        if(!token){
            return res.status(400).json({msg:"please provide token"})   
        }
        if(!token.split(" ").length==0 || token.split(" ")[0]!=="Bearer "){
            return res.status(400).json({msg:"invalid token formate"})  
        }
        
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
}
module.exports ={auth}