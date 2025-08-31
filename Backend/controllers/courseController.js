import { Assignment } from "../models/Assignment.js";
import {Course} from "../models/Course.js"
import { Lecture } from "../models/Lecture.js";
import { Quiz } from "../models/Quiz.js";
import { User } from "../models/User.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/dataUri.js";

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
export const deleteInstructorCourse = async (req, res) => {
  try {
    const { instructorId } = req.body;
    console.log(instructorId)
              const courseId = req.params.courseId
    // 1. Course check
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    // 2. Instructor check (sirf wahi delete kar sake jo owner hai)
     if (course.creator.toString() !== instructorId.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to delete this course",
      });
    }

    // 3. Enrolled users se course remove karna
    await User.updateMany(
      { enrolledCourses: courseId },
      { $pull: { enrolledCourses: courseId } }
    );

    // 4. Course delete karna (lectures ke saath)
    await Course.findByIdAndDelete(courseId);

    return res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
export const getPublishedCourse = async(_, res)=>{
    try {
        const courses = await Course.find({isPublished:true}).populate({path:"creator", select:"name photoUrl description"})
        if(!courses){
            return res.status(404).json({
                message:"Course not found"
            })
        }
        return res.status(200).json({
            success:true,
            courses,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Failed to get course",
            success:false
        })
    }
}

export const getCreatorCourses = async (req, res)=>{
    try {
        const userId = req.id;
        const courses = await Course.find({creator:userId}).populate('lectures');
        if(!courses){
            return res.status(404).json({
                message:"Course not found",
                courses:[],
                success:false
            })
        }
        return res.status(200).json({
            success:true,
            courses,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Failed to get course",
            success:false
        })
    }
}

export const editCourse = async(req, res)=> {
    try {
        const courseId = req.params.courseId;
        const {courseTitle, subTitle, description, category, courseLevel, coursePrice} = req.body;
        const file = req.file;

        let course = await Course.findById(courseId).populate("lectures")
        if(!course){
            return res.status(404).json({
                message:"Course not found!"
            })
        }
        let courseThumbnail;
        if(file){
            const fileUri = getDataUri(file)
            courseThumbnail = await cloudinary.uploader.upload(fileUri)          
        }
        const updateData = {courseTitle, subTitle, description, category, courseLevel, coursePrice, courseThumbnail:courseThumbnail?.secure_url};
        course = await Course.findByIdAndUpdate(courseId, updateData, {new:true})
        return res.status(200).json({
            success:true,
            course,
            message:"Course updated successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Failed to update course",
            success:false
        })
    }
}

export const getCourseById = async (req, res)=> {
    try {
        const {courseId} = req.params;
        const course = await Course.findById(courseId)
        if(!course){
            return res.status(404).json({
                message:"Course not found",
                success:false
            })
        }
        return res.status(200).json({
            success:true,
            course
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Failed to get course",
            success:false
        })
    }
}


//lecture controllers

export const createLecture = async(req, res)=>{
    try {
        const {lectureTitle} = req.body;
        const {courseId} = req.params;

        if(!lectureTitle || !courseId){
            return res.status(400).json({
                message:"Lecture title is required"
            })
        }
        const lecture = await Lecture.create({lectureTitle});
        const course = await Course.findById(courseId);
        if(course){
            course.lectures.push(lecture._id);
            await course.save()
        }
        return res.status(201).json({
            success:true,
            lecture,
            message:"Lecture created successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to create Lecture"
        })
        
    }
}

export const getCourseLecture = async (req, res) => {
    try {
        const {courseId} = req.params;
        const course = await Course.findById(courseId).populate('lectures');
        if(!course){
            return res.status(404).json({
                message:"course not found"
            })
        }
        return res.status(200).json({
            success:true,
            lectures:course.lectures
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to get Lectures"
        })
    }
}


  export const editLecture = async (req, res) => {
    try {
      const { lectureTitle, videoInfo, isPreviewFree, videoLink } = req.body;
      const { courseId, lectureId } = req.params;

      const lecture = await Lecture.findById(lectureId);
      if (!lecture) {
        return res.status(404).json({
          message: "Lecture not found!",
        });
      }

      // update lecture fields
      if (lectureTitle) lecture.lectureTitle = lectureTitle;

      // ✅ Cloudinary video update
      if (videoInfo?.videoUrl) lecture.videoUrl = videoInfo.videoUrl;
      if (videoInfo?.publicId) lecture.publicId = videoInfo.publicId;

      // ✅ Direct video link update
      if (videoLink) {
        lecture.videoLink = videoLink;
        // agar direct link diya gaya hai, to Cloudinary ka url null kar do (optional)
        lecture.videoUrl = null;
        lecture.publicId = null;
      }

      lecture.isPreviewFree = isPreviewFree;

      await lecture.save();

      // ensure course contains lecture
      const course = await Course.findById(courseId);
      if (course && !course.lectures.includes(lecture._id)) {
        course.lectures.push(lecture._id);
        await course.save();
      }

      return res.status(200).json({
        success: true,
        lecture,
        message: "Lecture updated successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to edit lecture",
        success: false,
      });
    }
  };


export const removeLecture = async(req, res)=>{
    try {
        const {lectureId} = req.params;
        const lecture = await Lecture.findByIdAndDelete(lectureId);
        if(!lecture){
            return res.status(404).json({
                message:"Lecture not found!"
            })
        } 
         //Remove the lecture refference from the associated course
         await Course.updateOne(
            {lectures: lectureId}, //find the course that contains the lecture
            {$pull:{lectures:lectureId}} // Remove the lectures id from the lectures array
         );
         return res.status(200).json({
            success:true,
            message:"Lecture removed successfully"
         })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to remove lecture"
        })
        
    }
}

export const togglePublishedCourse = async (req, res)=>{
    try {
        const {courseId} = req.params;
        const {publish} = req.query; // true , false
        const course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({
                message:"Course not found!"
            })
        }
        course.isPublished = !course.isPublished
        await course.save()

        const statusMessage = course.isPublished ? "Published":"Unpublished";
        return res.status(200).json({
          success:true,
          message:`Course is ${statusMessage}`
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to update status"
        })
    }
}

export const addAssignment = async (req, res) => {
  try {
    const {   assignmentTitle,
      question,
      description,
    
      submissionDeadline } = req.body;
    const {lectureId}=req.params

    if (!assignmentTitle || !submissionDeadline || !question ) {
      return res.status(400).json({ message: "Lecture ID and questions are required" });
    }

    const lecture = await Lecture.findById(lectureId);
    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }
     // File upload to Cloudinary (req.file)
   let pdfUrl = null;
    let pdfPublicId = null;

    if (req.file) {
      const fileUri = getDataUri(req.file);
      const result = await cloudinary.uploader.upload(fileUri, {
        resource_type: "raw", // ⚡ pdf ke liye
        folder: "assignments",
         format: "pdf",
      });

      pdfUrl = result.secure_url;
      pdfPublicId = result.public_id;
    }
    const assignment = new Assignment({
      assignmentTitle,
      question,
      submissionDeadline,
      description,
      pdfUrl,
      pdfPublicId

    });

    await assignment.save();

    lecture.assignments.push(assignment._id);
    await lecture.save();

    res.status(201).json({ message: "Assignment created successfully", assignment,success:true});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAssignmentsByLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const lecture = await Lecture.findById(lectureId).populate("assignments");
    if (!lecture) {
      return res.status(404).json({ message: "Lecture not found" });
    }

    res.status(200).json({ assignments: lecture.assignments , success:true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addQuiz = async (req, res) => {
  try {
    const { lectureId } = req.params;
    const { questions, title, submissionDeadline } = req.body;

    // Validation
    if (!lectureId || !title || !submissionDeadline || !questions || questions.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Lecture ID, title, submissionDeadline, and questions are required" 
      });
    }

    // Validate each question's type and structure
    for (let q of questions) {
      if (!q.type || !["multiple-choice", "true-false"].includes(q.type)) {
        return res.status(400).json({
          success: false,
          message: "Each question must have a valid type: 'multiple-choice' or 'true-false'"
        });
      }

      if (q.type === "multiple-choice" && (!q.options || q.options.length<= 2)) {
        return res.status(400).json({
          success: false,
          message: "Multiple-choice questions must have at least 2 options"
        });
      }

      if (!q.correctAnswer) {
        return res.status(400).json({
          success: false,
          message: "Each question must have a correctAnswer"
        });
      }
    }

    // Create Quiz
    const quiz = await Quiz.create({
      title,

      submissionDeadline,
      questions
    });

    // Push quiz to lecture
    await Lecture.findByIdAndUpdate(lectureId, {
      $push: { quizzes: quiz._id },
    });

    res.status(201).json({
      success: true,
      message: "Quiz added successfully",
      quiz,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getQuizzesByLecture = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const lecture = await Lecture.findById(lectureId).populate("quizzes");
    if (!lecture) {
      return res.status(404).json({ success: false, message: "Lecture not found" });
    }

    res.status(200).json({
      success: true,
      quizzes: lecture.quizzes,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
