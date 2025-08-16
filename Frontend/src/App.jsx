// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import React from 'react';
import LoginPage from './pages/auth/LoginPage';
import Signup from './pages/auth/Signup';
import CourseViewPage from "./pages/courseviewpage/CourseViewPage";
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import CoursePlayerPage from './pages/courseplayer/CoursePlayerPage';
// import Courses from './pages/instructor/Courses';
// import CreateCourse from './pages/instructor/CourseCreate';
import ProfilePage from './pages/profile/ProfilePage';
import CourseList from './pages/instructor/CourseList';
import Instructor from './pages/instructor/Instructor';




function App() {
  return (
    
    
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course-player" element={<CoursePlayerPage />} />
        <Route path="/instructor" element={<InstructorDashboard/>} />
        <Route path="/instructor/courses" element={<CourseList/>} />
        <Route path="/profile" element={
          

            <ProfilePage/>
          
          } />
        {/*<Route path="/courseviewpage" element ={<CourseViewPage />} />/*}


        {/* <Route path="/student-profile" element={<Student />} /> */}
        <Route path="/courses" element={<CourseViewPage />} />
    
      </Routes>
  
   
  );
}

export default App;
