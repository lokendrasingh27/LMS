// models/instructorModel.js
import mongoose from 'mongoose';

const instructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dp: { type: String }, // Display picture URL (optional)
}, { timestamps: true });

const Instructor = mongoose.model('Instructor', instructorSchema);
export default Instructor;


