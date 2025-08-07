// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import React from 'react';
import LoginPage from './pages/auth/LoginPage';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/ForgotPassword';
import OtpVerification from './pages/OtpVerification';
import InstructorDashboard from './pages/instructor/InstructorDashboard';
import AccountSecurityPage from './pages/newprofilepg/AccountSecurityPage';
import ProfilePage from './pages/newprofilepg/ProfilePage';
import PrivacyPage from './pages/newprofilepg/PrivacyPage';
import AcademicInformationPage from './pages/newprofilepg/AcademicInformationPage';
import CloseAccountPage from './pages/newprofilepg/CloseAccountPage';
import NotificationPreferencesPage from './pages/newprofilepg/NotificationPreferencesPage';
import PaymentMethodsPage from './pages/newprofilepg/PaymentMethodsPage';
import PhotoPage from './pages/newprofilepg/PhotoPage';
import SubscriptionsPage from './pages/newprofilepg/SubscriptionsPage';
import Courses from './pages/instructor/Courses';
import CreateCourse from './pages/instructor/CreateCourse';





function App() {
  return (
    
    
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      
        <Route path="/instructor" element={<InstructorDashboard/>} />
        <Route path="/instructor/courses" element={<Courses/>} />
        <Route path="/instructor/create-course" element={<CreateCourse/>} />

        {/* <Route path="/student-profile" element={<Student />} /> */}

    
      </Routes>
  
   
  );
}

export default App;
