import express from 'express';
import { createOrder, verifyPayment } from "../controllers/paymentController.js";
import { getTransactions } from '../controllers/paymentController.js';


const router = express.Router();

router.post("/create-order", createOrder);
router.post("/verify", verifyPayment);
router.get('/transactions', getTransactions);


export default router;
