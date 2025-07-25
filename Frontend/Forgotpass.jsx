import React, { useState } from 'react';
import './ForgotPassword.css';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // TODO: Replace this with your backend API call to send OTP or reset link
    console.log('Reset link will be sent to:', email);
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>

      <div className="input">
        <label htmlFor="email">Enter your registered Email:</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className="button" onClick={handleSubmit}>
        Submit
      </button>

      <div className="signup-line">
        <span>Already have an account?</span>
        <span><a href="/login">Sign in</a></span>
      </div>
    </div>
  );
};

export default ForgotPassword;
