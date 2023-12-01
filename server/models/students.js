const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name:String,
    usn:String,
    mobile:Number,
    email:String,
    branch:String,
    year:Number,
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const StudentsModel = mongoose.model("students",StudentSchema)
module.exports = StudentsModel