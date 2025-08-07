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
import CoursePlayerPage from './pages/courseplayer/CoursePlayerPage';




function App() {
  return (
    
    // <div>
    //  {/* <AccountSecurityPage/> */}
    //  {/* <StudentProfile/> */}
    //  {/* <AcademicInformationPage/> */}
    //  {/* <CloseAccountPage/> */}
    //  {/* <NotificationPreferencesPage/> */}
    //  {/* <PaymentMethodsPage/> */}
    //  {/* <PhotoPage/> */}
    //   {/* <ProfilePage/> */}
    //   {/* <SubscriptionsPage/> */}
      
    // </div>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification/>} />
        <Route path="/instructor" element={<InstructorDashboard/>} />
        <Route path="/course-player" element={<CoursePlayerPage/>} />

        {/* <Route path="/student-profile" element={<Student />} /> */}

    
      </Routes>
  
   
  );
}

export default App;
