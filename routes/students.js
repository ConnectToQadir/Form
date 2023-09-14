const StudentModel = require("../models/students")
const router = require("express").Router()



router.get("/",async(req,res)=>{
    await StudentModel.create(req.query)
    res.send("Submitted!")
})



module.exports = router