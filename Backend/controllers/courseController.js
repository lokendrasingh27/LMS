import { Course } from "../models/Course.js"

export const createCourse = async(req, res)=> {
    try {
    
        const {courseTitle, category} = req.body;
        if(!courseTitle || !category){
            return res.status(400).json({
                messge:"Course title and category is required",
                success:false
            })
        }
        const course = await Course.create({
            courseTitle,
            category,
            creator: req.id
        })
        return res.status(201).json({
            success:true,
            course,
            message:"Course created successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Failed to create course",
            success:false
        })
    }
}

export const getPublishedCourse =async(_,res)=>{
            try{

                const courses= await Course.find({isPublished:true})
                if(!courses){
                    return res.status(404).json({
                        message:"Course not found",
                        success:false
                    })
                }
                   return res.status(200).json({
                    success:true,
                    courses,

                   })

            }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Failed to create course",
            success:false
        })
       }
}

export const getCreatorCourses=async(req,res)=>{
           
    try{
         const userId=req.id;
         const courses =await Course.find({creator:userId})
     
         if(!courses){
            return res.status(404).json({
                success:false,
                courses:[],
                message:"Course not found"
            })
         }

         return res.status(200).json({
                 success:true,
                 courses
         })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Failed to create course",
            success:false
        })
       }
}