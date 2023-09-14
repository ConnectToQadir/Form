const express = require('express')
const mongoose = require('mongoose')
const app = express()



app.use(express.static("public"))

app.use('/api/students',require('./routes/students'))





mongoose.connect("mongodb+srv://qadir:qadir@edify.0i5koc5.mongodb.net/form?retryWrites=true&w=majority").then(()=>{
    console.log("Connected!")
})


var port = process.env.port || 4500
app.listen(port,()=>{
    console.log("Running...")
})