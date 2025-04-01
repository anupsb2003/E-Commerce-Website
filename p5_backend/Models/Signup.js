const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
    name:String,
    fathername:String,
    dob:String,
    branch:String,
    rollno:String,
    section:String,
    address:String,
    mobileno:String,
    password:String,
});

const Signup = mongoose.model("Signup",signupSchema);
module.exports = Signup;