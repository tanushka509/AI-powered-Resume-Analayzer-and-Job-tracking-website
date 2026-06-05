const Job = require("../models/Job");
const {createJob,updateJobStatus}= require("../services/jobService");

const addJob=async(req,res)=>{
    try
    {
        const {company , role, status}=req.body;
        const job=await createJob({company,role,status,user:req.user.id});
        res.status(201).json({
            job
        });
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            message:"internal server error"
        });
    }
};
const getJob=async(req,res)=>{
    try{
    const jobs= await Job.find({user:req.user.id});
    res.json(jobs);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"internal server error"
        })
    }
};
const changeStatus=async(req,res)=>{
    try
    {   const id= req.params.id;
        const {status}=req.body;
        const newJob= await updateJobStatus(id,status);
        res.json(newJob);
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            message:"internal server error"
        });
    }
}
module.exports={addJob,getJob,changeStatus};