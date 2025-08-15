import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    role:{
        type:String,
        enum:["instructor", "student", "admin"],
        required:true
    },
    photoUrl:{
        type:String,
        default:""
    },
      academicDetails: {
        course: { type: String, default: "" },  // e.g. "BCA", "B.Tech CSE"
        year: { type: Number, min: 1, max: 5 }, // e.g. 1, 2, 3, 4
        cgpa: { type: Number, min: 0, max: 10 } // e.g. 8.5
    },
    enrolledCourses: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Course'
        },
        
    ]
},{timestamps:true})

export const User = mongoose.model('User', userSchema);