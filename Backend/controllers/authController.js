// import {User} from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import getDataUri from '../utils/dataUri.js';
// import cloudinary from '../utils/cloudinary.js';
// import student from '../models/student.js';


// export const register = async(req, res) => {
//     try{
//         const {name , email ,password , role}= req.body;

//         if(!name || !email || !password || !role){
//             return res.status(400).json({
//                 success: false,
//                 message: "All fields are required"
//             });
//         }

//         const user = await User.findOne({email})
//         if(user){
//             return res.status(400).json({
//                 success: false,
//                 message: "User already exists"
//             });
//         }
//          const hashedPassword = await bcrypt.hash(password,10);

//         await User.create({
//             name,
//             email,
//             password: hashedPassword,
//             role

//         })
//         return res.status(201).json({
//             success: true,
//             message: "User registered successfully"
//         })
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             success: false,
//             message: "Failed to register user"
//         });
//     }
// }

// export const login = async(req ,res)=>{
//     try{
//           const {email, password} = req.body;

//           if(!email || !password){
//             return res.status(400).json({
//                 success: false,
//                 message: "All fields are required"
//             });
//     }
//             const user = await User.findOne({email})
//             if(!user){
//                 return res.status(400).json({
//                     success: false,
//                     message: "Invalid email or password"
//                 });
//             }

//             const isPasswordMatch =await bcrypt.compare(password,user.password);
//             if(!isPasswordMatch){
//                 return res.status(400).json({
//                     success: false,
//                     message: "Invalid email or password"
//                 })
//             }
//             const token = jwt.sign({userId: user._id},process.env.SECRET_KEY, {expiresIn:"1d"});
//             return res.cookie('token',token,{
//                 httpOnly: true,
//                 sameSite: 'strict',
//                 maxAge: 1*24*60*60*1000 // 1 day
//             }).json({
//                 success: true,
//                 message: `Welcome back ${user.name}`,
//                 user
//             })
//     } catch(error){
//         console.error(error);
//         return res.status(500).json({
//             success: false,
//             message: "Failed to login user"
//         });
//     }
// }

// export const logout = async(req ,res)=>{
//     try{
//         return res.status(200).cookie('tooken','',{maxAge:0}).json({
//             success: true,
//             message: "User logged out successfully"
//         })
//     } catch{error}{
//         console.log(error);
//         return res.status(500).json({
//             success: false,
//             message: "Failed to logout user"
//         });

//     }
// }

// export const updateProfile = async(req, res) => {
//     try {
//         const userId= req.id
//         const {name, description,course,year} = req.body;
//         const file = req.file;

      

//         const user = await User.findById(userId).select("-password")
        
//         if(!user){
//             return res.status(404).json({
//                 message:"User not found",
//                 success:false
//             })
//         }
           
//         // agar nayi photo hai tabhi cloudinary pe upload karo
//     if (file) {
//       const fileUri = getDataUri(file);
//       const cloudResponse = await cloudinary.uploader.upload(fileUri);
//       user.photoUrl = cloudResponse.secure_url;
//     }
//         // updating data
//         if(name) user.name = name
//         if(description) user.description = description
//         if(course) user.academicDetails.course=course
//         if(year) user.academicDetails.year=year

//         await user.save()
//         return res.status(200).json({
//             message:"profile updated successfully",
//             success:true,
//             user
//         })
        
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success: false,
//             message: "Failed to update profile"
//         })
//     }
// }

import { User } from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import getDataUri from '../utils/dataUri.js';
import cloudinary from '../utils/cloudinary.js';
import Student from '../models/student.js'; // ✅ Capitalized model import

// ================== REGISTER ==================
export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to register user"
    });
  }
};

// ================== LOGIN ==================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // ✅ Auto-add student to Student collection
    if (user.role === 'student') {
      const existingStudent = await Student.findOne({ email: user.email });

      if (!existingStudent) {
        await Student.create({
          name: user.name,
          email: user.email,
          courseTitle: user.academicDetails?.course || '',
        });
      }
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    return res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 1 * 24 * 60 * 60 * 1000 // 1 day
    }).json({
      success: true,
      message: `Welcome back ${user.name}`,
      user
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to login user"
    });
  }
};

// ================== LOGOUT ==================
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie('token', '', { maxAge: 0 }).json({
      success: true,
      message: "User logged out successfully"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to logout user"
    });
  }
};

// ================== UPDATE PROFILE ==================
export const updateProfile = async (req, res) => {
  try {
    const userId = req.id;
    const { name, description, course, year } = req.body;
    const file = req.file;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false
      });
    }

    // Upload photo to Cloudinary if file exists
    if (file) {
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri);
      user.photoUrl = cloudResponse.secure_url;
    }

    // Update fields
    if (name) user.name = name;
    if (description) user.description = description;
    if (course) user.academicDetails.course = course;
    if (year) user.academicDetails.year = year;

    await user.save();

    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
      user
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to update profile"
    });
  }
};
