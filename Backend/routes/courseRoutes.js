import express from 'express'
import { isAuthenticated } from '../middleware/isAuthenticated.js'
import { createCourse, getCreatorCourses, getPublishedCourse } from '../controllers/courseController.js'


const router = express.Router()

router.route('/').post(isAuthenticated,createCourse)
router.route('/published-courses').get(getPublishedCourse)
router.route('/').get(isAuthenticated,getCreatorCourses)


export default router