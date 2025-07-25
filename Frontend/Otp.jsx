import React, { useState } from 'react';

const OtpVerification = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only last digit
    setOtp(newOtp);

    // Move to next input if exists
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    alert(`Entered OTP: ${enteredOtp}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="/logo.png" // Replace with actual logo path
            alt="Oxford Logo"
            className="mx-auto h-16"
          />
        </div>

        {/* Heading */}
        <h2 className="text-lg font-semibold mb-4">Sent OTP on Your Email</h2>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-2 mb-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={digit}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>

        {/* Resend Link */}
        <button className="text-sm text-blue-500 hover:underline mb-5">
          Resend OTP
        </button>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition mb-3"
        >
          Submit
        </button>

        {/* Back to Login */}
        <a href="/login" className="text-sm text-gray-600 hover:underline">
          Back to Login Page
        </a>
      </div>
    </div>
  );
};

export default OtpVerification;
