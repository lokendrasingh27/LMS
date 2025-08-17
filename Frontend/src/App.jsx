// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import React from 'react';
import LoginPage from './pages/auth/LoginPage';
import Signup from './pages/auth/Signup';
import CourseViewPage from "./pages/courseviewpage/CourseViewPage";
import InstructorDashboard from './pages/instructor/Dashboard';
import CoursePlayerPage from './pages/courseplayer/CoursePlayerPage';
// import Courses from './pages/instructor/Courses';
// import CreateCourse from './pages/instructor/CourseCreate';
import ProfilePage from './pages/profile/ProfilePage';
import Instructor from './pages/instructor/Instructor';
import Courses from './pages/instructor/Courses';
import CreateCourse from './pages/instructor/CreateCourse';
import UpdateCourse from './pages/instructor/UpdateCourse';




function App() {
  return (
    
    
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course-player" element={<CoursePlayerPage />} />
          
        <Route path="/instructor" element={<Instructor/>} >
           {/* children route */}
        <Route path='dashboard' element={<InstructorDashboard/>} />
        <Route path="course" element={<Courses/>} />
        <Route path="course/create" element={<CreateCourse/>} />
        <Route path="course/:courseId" element={<UpdateCourse/>} />
       
        </Route>


        
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
