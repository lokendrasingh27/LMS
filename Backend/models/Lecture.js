import mongoose from 'mongoose'

const lectureSchema= new mongoose.Schema({

    lectureTitle:{
        type:String,
        required:true
    },
    description: {
        type: String,
        trim: true,
    },
    videoUrl:{
        type:String,
        required:true
    },
    publicId:{type:String},
    isPreviewFree:{type:Boolean}
},{timestamps:true});

export const Lecture = mongoose.model("Lecture",lectureSchema)