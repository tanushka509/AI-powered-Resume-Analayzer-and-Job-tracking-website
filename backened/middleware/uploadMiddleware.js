const multer= require("multer");
const storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "uploads/");//cb is a callback function , null means no error, value is the answer u asked for 
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});
const upload= multer({storage});
module.exports=upload;