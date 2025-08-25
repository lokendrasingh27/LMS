import Razorpay from "razorpay";
import crypto from "crypto";
import dotenv from 'dotenv'
import { Course } from "../models/Course.js";
import { User } from "../models/User.js";
dotenv.config();

// Razorpay instance create
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ Create Order
export const createOrder = async (req, res) => {
  try {
        const {courseId} = req.body
        const course =await Course.findById(courseId)
        if(!course){
            return res.status(404).json({
                message:"Course is not found"
            })
        }
    const options = {
      amount: course.coursePrice*100, // paise me bhejna hai (499 Rs = 49900 paise)
      currency: "INR",
      receipt: `${courseId}.toString()`
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({ order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Verify Payment
export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, courseId,userId } = req.body;

       const orderInfo= await razorpay.orders.fetch(razorpay_order_id)

       if(orderInfo.status === 'paid'){
        const user = await User.findById(userId)
        if(!user.enrolledCourses.includes(courseId)){
            await user.enrolledCourses.push(courseId)
            await user.save()
        }
        const course = await Course.findById(courseId).populate("lectures")
        if(!course.enrolledStudents.includes(userId)){
            await course.enrolledStudents.push(userId)
            await course.save()
        }
        return res.status(200).json({
            message:"payment verified and enrollement successful"
        })
       }
       else{
         return res.status(400).json({
            message:"payment failed "
        })
       }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
