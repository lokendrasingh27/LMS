// import Razorpay from "razorpay";
import dotenv from 'dotenv';
import { Course } from "../models/Course.js";
import { User } from "../models/User.js";
import { Transaction } from '../models/Transaction.js';

dotenv.config();

// Razorpay instance create
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, courseId, userId } = req.body;

    // Basic validation of inputs
    if (!razorpay_order_id || !courseId || !userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Fetch order info from Razorpay
    const orderInfo = await razorpay.orders.fetch(razorpay_order_id);

    if (!orderInfo) {
      return res.status(404).json({ message: "Order not found in Razorpay" });
    }

    if (orderInfo.status !== 'paid') {
      return res.status(400).json({ message: "Payment not completed" });
    }

    // Fetch user and course from DB
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const course = await Course.findById(courseId).populate("lectures");
    if (!course) return res.status(404).json({ message: "Course not found" });

    // Enroll user if not enrolled
    if (!user.enrolledCourses.includes(courseId)) {
      user.enrolledCourses.push(courseId);
      await user.save();
    }

    if (!course.enrolledStudents.includes(userId)) {
      course.enrolledStudents.push(userId);
      await course.save();
    }

    // Save transaction to DB
    const transaction = new Transaction({
      user: userId,
      course: courseId,
      razorpay_order_id,
      amount: orderInfo.amount_paid, // amount is in paise
      status: 'Completed',
      payment_date: new Date(orderInfo.created_at * 1000), // Unix timestamp to JS Date
    });

    await transaction.save();

    return res.status(200).json({
      message: "Payment verified and enrollment successful",
      user,
      course,
      transaction,
    });
  } catch (err) {
    console.error("Verify Payment Error:", err);
    return res.status(500).json({ error: err.message });
  }
};
