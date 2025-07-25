const mongoose = require("mongoose")

const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  // ...other fields...
})

module.exports = mongoose.model("Lesson", lessonSchema)
