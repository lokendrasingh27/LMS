// // routes/instructorRoutes.js
// import express from 'express';
// import Instructor from '../models/instructorModel.js';

// const router = express.Router();

// // Get all instructors
// router.get('/', async (req, res) => {
//   try {
//     const instructors = await Instructor.find();
//     res.json({ success: true, instructors });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// // Create a new instructor
// router.post('/', async (req, res) => {
//   const { name, email, dp } = req.body;
//   if (!name || !email) {
//     return res.status(400).json({ success: false, message: 'Name and email are required' });
//   }
//   try {
//     const existing = await Instructor.findOne({ email });
//     if (existing) {
//       return res.status(409).json({ success: false, message: 'Instructor already exists' });
//     }
//     const instructor = new Instructor({ name, email, dp });
//     await instructor.save();
//     res.status(201).json({ success: true, instructor });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// // Delete instructor by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Instructor.findByIdAndDelete(id);
//     res.json({ success: true, message: 'Instructor deleted' });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Server error' });
//   }
// });

// export default router;


import express from 'express';
import {
  getAllInstructors,
  createInstructor,
  updateInstructor,
  deleteInstructor
} from '../controllers/instructorController.js';

const router = express.Router();

router.get('/', getAllInstructors);
router.post('/', createInstructor);
router.put('/:id', updateInstructor);
router.delete('/:id', deleteInstructor);

export default router;
