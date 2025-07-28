// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// (Import other pages later)
import React from 'react';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import OtpVerification from './pages/OtpVerification';
import InstructorDashboard from './pages/InstructorDashboard';
import AccountSecurityPage from './pages/Profilepages/AccountSecurityPage';
import PhotoUploadPage from './pages/Profilepages/PhotoUploadPage';
import EditProfilePage from './pages/Profilepages/EditProfilePage';
import PrivacySettings from './pages/Profilepages/PrivacySettings';

function App() {
  return (
    
    // <div>
    //   {/* <AccountSecurityPage/> */}
    //   {/* <PhotoUploadPage/> */}
    //   {/* <EditProfilePage/> */}
    //   {/* <PrivacySettings/> */}
      
    // </div>
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/forget-Password" element={<ForgotPassword/>} />
         <Route path="/forget-Password" element={<ForgotPassword/>} />
          <Route path="/instructor-dashboard" element={<InstructorDashboard/>} />
         <Route path="/otp-verification" element={<OtpVerification/>} />



      </Routes>
    </Router>
  );
}

export default App;
