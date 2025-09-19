// import mongoose from 'mongoose';

// const studentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   courseTitle: { type: String },
//   progress: { type: Number, default: 0 },
//   status: { type: String, default: 'Active', enum: ['Active', 'Inactive'] }
// }, { timestamps: true });

// export default mongoose.model('Student', studentSchema);


import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courseTitle: { type: String },
  progress: { type: Number, default: 0 },
  status: { type: String, default: 'Active', enum: ['Active', 'Inactive'] }
}, { timestamps: true });

// Prevent model overwrite error in dev
const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;
