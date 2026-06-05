const jwt= require("jsonwebtoken");
const User= require("../models/User");
const bycrypt= require("bcryptjs");
const registerUser= async(req,res)=>{
    try{
        const{ name, email, password}= req.body;
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:"user already exists"
            });
        }
        const hasedPass= await bycrypt.hash(password,10);
        const user= await User.create({
            name,
            email, 
            password:hasedPass
        });
        res.status(201).json({message:"User registered successfully",
            user
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"server error"
        });
    }
};
const loginUser= async(req,res)=>{
    try{
        const { email, password}= req.body;
        const user=await  User.findOne({email});
        if(!user){
            return res.status(404).json({
                message:"user not found"
            });
        }
        const ismatch= await bycrypt.compare(
            password, user.password
        );
        if(!ismatch){
            res.status(401).json({
                message:"incorrect password"
            })
        }
        //create jwt token
        const token=jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );
        res.json({
            token
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"server error"
        });
    }
}
const getProfile=async(req,res)=>{
    res.json({
        message:"protected route accessed",
        user:req.user
    });
};
module.exports={
    registerUser,
    loginUser,
    getProfile
};