const mongoose =require("mongoose");

const jobSchema= new mongoose.Schema({
    company:String,
    role:String,
    status:String,
    dateApplied:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});
module.exports=mongoose.model("Job",jobSchema);