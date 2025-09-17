import express from 'express';
import { isAuthenticated, isAdmin } from '../middleware/isAuthenticated.js';
import { getAllUsers, deleteUser, getAllCourses } from '../controllers/adminController.js';

const router = express.Router();

router.use(isAuthenticated);
router.use(isAdmin);

router.get('/users', getAllUsers);
router.delete('/user/:userId', deleteUser);
router.get('/courses', getAllCourses);

export default router;
