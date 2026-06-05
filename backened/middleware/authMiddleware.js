const jwt= require("jsonwebtoken");
 const protect= async(req,res,next)=>{

try{
 const token= req.headers.authorization;
 if(!token){
    return res.status(401).json({
        message:"NO token"
    });
 }
 const decoded=jwt.verify(token, process.env.JWT_SECRET);
 req.user=decoded;
 next();//to go to next middleware or controller , to continue request pipeline
}
catch(error){
    res.status(401).json({
        message:"invalid token"
    });
}
 };
 module.exports=protect;