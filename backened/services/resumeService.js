const fs= require("fs");
const pdfParse=require("pdf-parse");
const Resume = require("../models/Resume");

const extractTextFromPdf = async(filePath)=>{
    const dataBuffer= fs.readFileSync(filePath);
    const data= await pdfParse(dataBuffer);
    return data.text;
};
const skills=[
    "c++",
    "java",
    "python",
    "javascript",
    "node",
    "express",
    "mongodb",
    "sql",
    "react"
]
const analyze=(text)=>{
    const lowerText= text.toLowerCase();
    const foundSkills=[];
    for(const skill of skills){
        if(lowerText.includes(skill)){
            foundSkills.push(skill);
        }
    }
    let score=0;
    score+=foundSkills.length*10;
    if(lowerText.includes("project")){
        score+=20;
    }
    if(lowerText.includes("education")){
        score+=10;
    }
    return{
        score, foundSkills
    };
}
const getResume =async(id)=>{
   return  Resume.find({
                 user:id
            });

};
module.exports={
    extractTextFromPdf, analyze,getResume
};