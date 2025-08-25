import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true }
});

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lecture: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture" },
  questions: [questionSchema]
}, { timestamps: true });

export const Assignment = mongoose.model("Assignment", assignmentSchema);