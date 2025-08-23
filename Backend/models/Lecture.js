import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    lectureTitle: {
        type:String,
        required:true,
    },
    videoUrl:{type:String},
    publicId:{type:String},
    isPreviewFree : {type:Boolean},
        
     assignments: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }
  ],
  quizzes: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" }
  ]
},{timestamps:true});

export const Lecture = mongoose.model("Lecture", lectureSchema)