
// import jwt from "jsonwebtoken"


// export const isAuthenticated = async (req, res, next) =>{
  
//     try {
//         const token = req.cookies.token;
//         if(!token){
//             return res.status(401).json({
//                 message:"User not authenticated",
//                 success:false,
//             })
//         }
//         const decode =  jwt.verify(token, process.env.SECRET_KEY)
//         if(!decode){
//             return res.status(401).json({
//                 message:"Invalid token",
//                 success:false,
//             })
//         }
//         req.id = decode.userId;
//         next();
//     } catch (error) {
//         console.log(error);
        
//     }
// }

import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }

    const user = await User.findById(decode.userId);
    if (!user) {
      return res.status(401).json({
        message: "User not found",
        success: false,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: "User not authenticated",
      success: false,
    });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Access denied: Admins only",
      success: false,
    });
  }

  next();
};
