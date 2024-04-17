import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    regno: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    }

},{timestamps:true});

const Student =  mongoose.model('student',studentSchema)
export default Student