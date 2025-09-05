import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  assignmentTitle: {
    type: String,
    required: true
  },
  question: {
    type: String
  }, 
  description: {
    type: String // multiple questions ya explanation
  },
  pdfUrl: {
    type: String,   // optional PDF link (cloudinary or direct link)
  },
  pdfPublicId: {
    type: String,   // agar Cloudinary use kar rahe ho to iska id store karna
  },
  submissionDeadline: {
    type: Date,     // last date for submission
    required: true  // isko required bhi bana sakte ho
  },
  lecture: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture" },
}, { timestamps: true });

export const Assignment = mongoose.model("Assignment", assignmentSchema);
