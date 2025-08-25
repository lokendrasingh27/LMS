import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import courseRoutes from  './routes/courseRoutes.js'
import mediaRoutes from  './routes/mediaRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
import cookieParser from 'cookie-parser';

import cors from 'cors';
dotenv.config();
connectDB();

const app = express();

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({
       origin:"http://localhost:5173",
    credentials:true
}))

app.use('/api/auth', authRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/payment', paymentRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
