// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// (Import other pages later)
import React from 'react';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import OtpVerification from './pages/OtpVerification';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginPage/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/forget-Password" element={<ForgotPassword/>} />
         {/* <Route path="/otp-verification" element={<OtpVerification/>} /> */}




        {/* Add more routes later */}
      </Routes>
    </Router>
  );
}

export default App;
