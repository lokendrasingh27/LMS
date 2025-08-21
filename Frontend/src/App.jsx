// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import React from "react";
import LoginPage from "./pages/auth/LoginPage";
import Signup from "./pages/auth/Signup";
import CourseViewPage from "./pages/courseviewpage/CourseViewPage";
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
import { Header, Footer } from "./pages/student/HeaderFooter";
import Catalog from "./pages/student/Catalog";
import Drawer from "./pages/student/Drawer";
import CourseDetails from "./pages/student/CourseDetails";
import MyCourses from "./pages/student/MyCourses";
import AddCourse from "./pages/student/AddCourse";
import Payments from "./pages/student/Payments";
import CourseCard from "./pages/student/CourseCard";
import EnrollModal from "./pages/student/EnrollModal";
import CourseListing from "./pages/student/CourseListing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/course-player" element={<CoursePlayerPage />} />

      <Route path="/instructor" element={<Instructor />}>
        {/* children route */}
        <Route path="dashboard" element={<InstructorDashboard />} />
        <Route path="course" element={<Courses />} />
        <Route path="course/create" element={<CreateCourse />} />
        <Route path="course/:courseId" element={<UpdateCourse />} />
        <Route path="course/:courseId/lecture" element={<CreateLecture />} />
      </Route>

      <Routes>
        {/* Existing routes */}
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>

      <Header />

      <Routes>
        <Route path="/student/catalog" element={<Catalog />} />
        <Route path="/student/course-details/:courseId" element={<CourseDetails />} />
        <Route path="/student/my-courses" element={<MyCourses />} />
        <Route path="/student/add-course" element={<AddCourse />} />
        <Route path="/student/payments" element={<Payments />} />
        <Route path="/student/course-list" element={<CourseListing />} />
      </Routes>

      <Footer />
      <Drawer />
    </Routes>
  );
}

export default App;
