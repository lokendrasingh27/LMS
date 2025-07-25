const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  // ...other fields...
})

module.exports = mongoose.model("Course", courseSchema)
