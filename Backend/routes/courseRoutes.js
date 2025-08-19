import express from 'express'
import { isAuthenticated } from '../middleware/isAuthenticated.js'
import { createCourse, createLecture, editCourse, getCourseById, getCreatorCourses, getPublishedCourse } from '../controllers/courseController.js'
import { singleUpload } from '../middleware/multer.js'


const router = express.Router()

router.route('/').post(isAuthenticated,createCourse)
router.route('/published-courses').get(getPublishedCourse)
router.route('/').get(isAuthenticated,getCreatorCourses)
router.route('/:courseId').put(isAuthenticated,singleUpload,editCourse)
router.route('/:courseId').get(isAuthenticated,getCourseById)
router.route('/:courseId/lecture').post(isAuthenticated,createLecture)


export default router