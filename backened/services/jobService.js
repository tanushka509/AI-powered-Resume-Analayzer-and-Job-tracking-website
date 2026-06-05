const Job=require("../models/Job");

const createJob=async(data)=>{
    return Job.create(data);// returns after creating new document
};
const updateJobStatus=async(id,status)=>{
    const changeTo= await Job.findByIdAndUpdate(
        id,
        { status },
        {new:true}
    );
    return changeTo;
}
module.exports={createJob,updateJobStatus};