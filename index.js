const express = require('express')
const mongoose = require('mongoose')
const app = express()



app.set('view engine', 'ejs')
app.use(express.static("public"))

app.use('/api/students', require('./routes/students'))



app.get("/api/public", (req, res) => {
    res.render("some")
})

app.get('/', function (req, res) {
    res.render(__dirname + '/views/some');
});


mongoose.connect("mongodb+srv://qadir:qadir@edify.0i5koc5.mongodb.net/form?retryWrites=true&w=majority").then(() => {
    console.log("Connected!")
})


var port = process.env.port || 4500
app.listen(port, () => {
    console.log("Running...")
})