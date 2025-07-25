import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#e8f1f4] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src="/logo.png" // place your logo in public folder
            alt="Logo"
            className="h-20"
          />
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">Sign in Your Account</h2>

        <form>
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="block mb-2 font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center justify-between text-sm text-gray-600 mt-2 mb-6">
                <label className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4" />
                <span>Remember my preference</span>
                </label>
                <a href="/forget-Password" className="hover:underline">Forgot Password?</a>
            </div>

          <button
            type="submit"
            className="w-full bg-[#041E42] text-white py-2 rounded-lg font-semibold hover:bg-[#0a2d5e]"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
