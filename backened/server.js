require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const app= express();
connectDB();
app.use(express.json());//middleware
const authRoutes= require("./routes/authRoutes");
app.use("/api/auth",authRoutes);

const resumeRoutes= require("./routes/resumeRoutes");
app.use("/api/resume", resumeRoutes);

const jobRoutes=require("./routes/jobRoutes");
app.use("/api/jobs",jobRoutes);


app.listen(process.env.PORT,()=>{
    console.log("server started");
});