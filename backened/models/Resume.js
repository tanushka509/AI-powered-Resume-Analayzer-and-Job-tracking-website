const mongoose = require("mongoose");
const resumeSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    score:Number,
    strengths:[String],
    weaknesses:[String],
    suggestions:[String],
    foundSkills:[String],
    extractedText:String,
    uploadedAt:{
        type:Date,
        default:Date.now()
    }
});
module.exports=mongoose.model("Resume",resumeSchema);