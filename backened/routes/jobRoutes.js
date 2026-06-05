const express= require("express");
const {addJob,getJob,changeStatus}=require("../controllers/jobController");
const router= express.Router();
const protect= require("../middleware/authMiddleware");
router.post(
    "/addNewJob",
    protect,
    addJob
);
router.get(
    "/getMyJob",
    protect,
    getJob
);
router.patch(
    "/:id",
    protect,
    changeStatus
);
module.exports= router;