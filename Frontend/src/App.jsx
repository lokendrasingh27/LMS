// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

import React from 'react';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import OtpVerification from './pages/OtpVerification';
import InstructorDashboard from './pages/InstructorDashboard';
import AccountSecurityPage from './pages/newprofilepg/AccountSecurityPage';
import ProfilePage from './pages/newprofilepg/ProfilePage';
import PrivacyPage from './pages/newprofilepg/PrivacyPage';
import AcademicInformationPage from './pages/newprofilepg/AcademicInformationPage';
import CloseAccountPage from './pages/newprofilepg/CloseAccountPage';
import NotificationPreferencesPage from './pages/newprofilepg/NotificationPreferencesPage';
import PaymentMethodsPage from './pages/newprofilepg/PaymentMethodsPage';
import PhotoPage from './pages/newprofilepg/PhotoPage';
import SubscriptionsPage from './pages/newprofilepg/SubscriptionsPage';





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
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification/>} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard/>} />
        <Route path="/student-profile" element={<Student />} />
    
    



       
      </Routes>
    </Router>
   
  );
}

export default App;
