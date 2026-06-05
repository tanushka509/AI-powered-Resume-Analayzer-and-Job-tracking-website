const healthCheck =(req,res)=>{
    res.send("API is running");
};

module.exports={
    healthCheck
};