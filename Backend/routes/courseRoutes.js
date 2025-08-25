import express from 'express'
import { isAuthenticated } from '../middleware/isAuthenticated.js'
import { addAssignment, addQuiz, createCourse, createLecture, editCourse, editLecture, getCourseById,
     getCourseLecture, getCreatorCourses, getPublishedCourse, removeLecture, 
     togglePublishedCourse} from '../controllers/courseController.js'
import { singleUpload } from '../middleware/multer.js'


const router = express.Router()

router.route('/').post(isAuthenticated,createCourse)
router.route('/published-courses').get(getPublishedCourse)
router.route('/').get(isAuthenticated,getCreatorCourses)
router.route('/:courseId').put(isAuthenticated,singleUpload,editCourse)
router.route('/:courseId').get(isAuthenticated,getCourseById)
router.route('/:courseId/lecture').post(isAuthenticated,createLecture)
router.route('/:courseId/lecture').get(isAuthenticated,getCourseLecture)
router.route('/:courseId/lecture/:lectureId').post(isAuthenticated,editLecture)
router.route('/lecture/:lectureId').delete(isAuthenticated,removeLecture)
router.route('/:courseId/lecture/:lectureId/assignment').post(isAuthenticated,addAssignment)
router.route('/:courseId/lecture/:lectureId/quiz').post(isAuthenticated,addQuiz)
router.route('/:courseId').patch(togglePublishedCourse)


export default router;