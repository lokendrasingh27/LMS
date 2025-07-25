import React from "react";
import { Link } from "react-router-dom";

const OtpVerification = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaf4f4]">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <img
          src="/logo.png" // Replace with your logo path
          alt="Oxford Logo"
          className="mx-auto mb-4 h-20"
        />
        <h2 className="text-lg font-medium mb-4">Sent OTP on Your Email</h2>

        <div className="flex justify-center gap-2 mb-2">
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="w-10 h-12 text-center border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>

        <p className="text-xs text-blue-600 underline cursor-pointer mb-6">
          Resent OTP
        </p>

        <button className="w-full bg-[#001b44] text-white py-2 rounded font-semibold">
          Submit
        </button>

        <Link to="/login" className="block mt-6 text-sm underline text-black">
          Back to Login Page
        </Link>
      </div>
    </div>
  );
};

export default OtpVerification;
