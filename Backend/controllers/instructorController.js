// // controllers/instructorController.js
// import Instructor from '../models/Instructor.js';

// // GET all instructors
// export const getAllInstructors = async (req, res) => {
//   try {
//     const instructors = await Instructor.find();
//     res.status(200).json({ success: true, instructors });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // POST create a new instructor
// export const createInstructor = async (req, res) => {
//   try {
//     const instructor = new Instructor(req.body);
//     await instructor.save();
//     res.status(201).json({ success: true, instructor });
//   } catch (err) {
//     res.status(400).json({ success: false, message: err.message });
//   }
// };

// // DELETE an instructor
// export const deleteInstructor = async (req, res) => {
//   try {
//     await Instructor.findByIdAndDelete(req.params.id);
//     res.status(200).json({ success: true, message: "Instructor deleted" });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };

// // PUT update an instructor
// export const updateInstructor = async (req, res) => {
//   try {
//     const updatedInstructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedInstructor) {
//       return res.status(404).json({ success: false, message: "Instructor not found" });
//     }
//     res.status(200).json({ success: true, instructor: updatedInstructor });
//   } catch (err) {
//     res.status(400).json({ success: false, message: err.message });
//   }
// };


import Instructor from '../models/instructorModel.js';

// GET all instructors
export const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json({ success: true, instructors });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST create a new instructor
export const createInstructor = async (req, res) => {
  const { name, email, courseTitle, dp } = req.body;
  if (!name || !email || !courseTitle) {
    return res.status(400).json({ success: false, message: 'Name, email and courseTitle are required' });
  }
  try {
    const existing = await Instructor.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, message: 'Instructor already exists' });
    }
    const instructor = new Instructor({ name, email, courseTitle, dp });
    await instructor.save();
    res.status(201).json({ success: true, instructor });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT update an instructor
export const updateInstructor = async (req, res) => {
  const { id } = req.params;
  const { name, email, courseTitle, dp } = req.body;
  if (!name || !email || !courseTitle) {
    return res.status(400).json({ success: false, message: 'Name, email and courseTitle are required' });
  }
  try {
    const instructor = await Instructor.findById(id);
    if (!instructor) {
      return res.status(404).json({ success: false, message: 'Instructor not found' });
    }
    instructor.name = name;
    instructor.email = email;
    instructor.courseTitle = courseTitle;
    if (dp !== undefined) instructor.dp = dp;
    await instructor.save();
    res.status(200).json({ success: true, instructor });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// DELETE an instructor
export const deleteInstructor = async (req, res) => {
  try {
    const { id } = req.params;
    await Instructor.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Instructor deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
