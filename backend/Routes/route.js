const express = require("express");
const router = express.Router();

const StudentController = require("../Controllers/studentController");

router.get('/',(req,res)=>{
    res.send('Router Method connected');
})

router.post("/register", StudentController.createStudent);
router.post("/login", StudentController.loginStudent)

module.exports = router;
