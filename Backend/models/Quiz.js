import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  type: { 
    type: String, 
    enum: ["multiple-choice", "true-false"], 
    default: "multiple-choice",
    required: true 
  },
  options: [{ type: String }], // true-false me options zaruri nahi honge
  correctAnswer: { type: String, required: true }
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lecture: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture" },
  submissionDeadline: { type: Date, required: true },
  timeLimit: { type: Number, required: false }, // quiz deadline
  questions: [questionSchema]
}, { timestamps: true });

export const Quiz = mongoose.model("Quiz", quizSchema);
