const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
  questions: Array,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  // ...other fields...
})

module.exports = mongoose.model("Quiz", quizSchema)
