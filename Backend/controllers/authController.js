import {User} from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async(req, res) => {
    try{
        const {name , email ,password , role}= req.body;

        if(!name || !email || !password || !role){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
         const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            name,
            email,
            password: hashedPassword,
            role

        })
        return res.status(201).json({
            success: true,
            message: "User registered successfully"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to register user"
        });
    }
}

export const login = async(req ,res)=>{
    try{
          const {email, password} = req.body;

          if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
    }
            const user = await User.findOne({email})
            if(!user){
                return res.status(400).json({
                    success: false,
                    message: "Invalid email or password"
                });
            }

            const isPasswordMatch =await bcrypt.compare(password,user.password);
            if(!isPasswordMatch){
                return res,status(400).json({
                    success: false,
                    message: "Invalid email or password"
                })
            }
            const token = jwt.sign({userId: user._id},process.env.SECRET_KEY, {expiresIn:"1d"});
            return res.cookie('token',token,{
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 1*24*60*60*1000 // 1 day
            }).json({
                success: true,
                message: `Welcome back ${user.name}`,
                user
            })
    } catch(error){
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to login user"
        });
    }
}

export const logout = async(req ,res)=>{
    try{
        return res.status(200).cookie('tooken','',{maxAge:0}).json({
            success: true,
            message: "User logged out successfully"
        })
    } catch{error}{
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to logout user"
        });

    }
}