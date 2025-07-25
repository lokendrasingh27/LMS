import React from 'react';
import { Link } from 'react-router-dom';
import OtpVerification from './OtpVerification';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-[#edf7f7] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-3xl shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Oxford Logo" className="w-20 h-20" />
        </div>

        <h2 className="text-center text-lg font-medium mb-6">Forgot Password</h2>

        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
           onClick={OtpVerification}
            type="submit"
            className="w-full bg-[#001f3f] text-white py-2 rounded-md hover:bg-[#003366] transition"
          >
            Submit
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
