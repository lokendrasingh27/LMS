// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from "react";
import LoginPage from "./pages/auth/LoginPage";
import Signup from "./pages/auth/Signup";
import InstructorDashboard from "./pages/instructor/Dashboard";
import CoursePlayerPage from "./pages/courseplayer/CoursePlayerPage";
// import Courses from './pages/instructor/Courses';
// import CreateCourse from './pages/instructor/CourseCreate';
import ProfilePage from "./pages/profile/ProfilePage";
import Instructor from "./pages/instructor/Instructor";
import Courses from "./pages/instructor/Courses";
import CreateCourse from "./pages/instructor/CreateCourse";
import UpdateCourse from "./pages/instructor/UpdateCourse";
import CreateLecture from "./pages/instructor/CreateLecture";
import CourseDetails from "./pages/CourseDetail";
import EnrolledDashboard from "./pages/courseplayer/EnrolledDashboard";
import EditLecture from "./pages/instructor/EditLecture";
import CoursePayment from "./pages/student/CoursePayment";
import AssignmentGradingPage from "./pages/instructor/AssignmentGradingPage";
import Instructors from "./apages/Instructors";
import Students from "./apages/Students";
import Dashboard from "./acomponents/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/course-player" element={<CoursePlayerPage />} />
      <Route path="/courseplayer/EnrolledDashboard" element={<EnrolledDashboard />} />

      <Route path="/instructor" element={<Instructor />}>
        {/* children route */}
        <Route path="dashboard" element={<InstructorDashboard />} />
        <Route path="course" element={<Courses />} />
        <Route path="course/create" element={<CreateCourse />} />
        <Route path="course/:courseId" element={<UpdateCourse />} />
        <Route path="course/:courseId/lecture" element={<CreateLecture />} />
        <Route path="course/:courseId/lecture/:lectureId" element={<EditLecture />} />
        

      </Route>
      <Route path="/courses/:courseId" element={<CourseDetails/>}/>
      <Route path="/course-player/:courseId" element={<CoursePlayerPage />} />

      <Route path="/profile" element={<ProfilePage />} />
   
      
     
     
    </Routes>
  );
}
export default App;