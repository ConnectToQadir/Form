const mongoose = require('mongoose')


module.exports = mongoose.model("students",new mongoose.Schema({
    fullName:String,
    gender:String,
}))


