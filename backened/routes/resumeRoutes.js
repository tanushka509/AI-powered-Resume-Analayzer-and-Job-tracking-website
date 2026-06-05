const express= require("express");
const router = express.Router();
const protect= require("../middleware/authMiddleware");
const upload= require("../middleware/uploadMiddleware");
const{uploadResume,showResume}= require("../controllers/resumeController");
router.post(
    "/upload",//route 
/*middleware*/ protect,
   /*middleware*/  upload.single("resume"),//expect one file to be uploaded
    /*controller*/uploadResume
);
router.get(
    "/my-resumes",
    protect,
    showResume
);
module.exports= router;