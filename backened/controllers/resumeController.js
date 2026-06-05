const {extractTextFromPdf,getResume}= require("../services/resumeService");
const {analyzeResumeAI}= require("../services/aiService");
const Resume= require("../models/Resume");
const uploadResume= async(req,res)=>{
    try{
        const text= await extractTextFromPdf(req.file.path);
        //const analysis= analyze(text);
        const analysis=await analyzeResumeAI(text);
        await Resume.create({
            user:req.user.id,
            score:analysis.score,
            strengths:analysis.strengths,
            weaknesses: analysis.weaknesses,
            suggestions: analysis.suggestions,
            extractedText: text,
            extractedText:text
        });
        res.json(analysis);
    }
    catch(error){
        console.error("UPLOAD ERROR:");
        console.log(error);
        res.status(500).json({
            message:"server error"
        });

    }

};
const showResume= async(req,res)=>{
    try
    {
        const resumes=await getResume(req.user.id);
        res.json(resumes);
    }
    catch(error)
    {
        res.status(500).json({
            message:"internal server error"
        });
    }
}

module.exports={
    uploadResume,showResume
};