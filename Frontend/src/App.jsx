// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import React from 'react';
import LoginPage from './pages/auth/LoginPage';
import Signup from './pages/auth/Signup';

import InstructorDashboard from './pages/instructor/InstructorDashboard';

import Courses from './pages/instructor/Courses';
import CreateCourse from './pages/instructor/CreateCourse';
import ProfilePage from './pages/profile/ProfilePage';





function App() {
  return (
    
    
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/instructor" element={<InstructorDashboard/>} />
        <Route path="/instructor/courses" element={<Courses/>} />
        <Route path="/instructor/create-course" element={<CreateCourse/>} />
        <Route path="/user" element={<ProfilePage/>} />


        {/* <Route path="/student-profile" element={<Student />} /> */}

    
      </Routes>
  
   
  );
}

export default App;
