// src/pages/PasswordPage.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const PasswordPage = () => {
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentPwd || !newPwd || !confirmPwd) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (newPwd !== confirmPwd) {
      setMessage('New password and confirm password do not match.');
      return;
    }

    setMessage('Password changed successfully!');
    setCurrentPwd('');
    setNewPwd('');
    setConfirmPwd('');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      <div className="flex-1 overflow-y-auto bg-gray-50 p-10">
        <h1 className="text-4xl font-bold text-[#001F3F] mb-6 text-left">Change Password</h1>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
          <div>
            <label htmlFor="currentPwd" className="block mb-2 font-semibold text-[#0A5F6F]">
              Current Password
            </label>
            <input
              type="password"
              id="currentPwd"
              value={currentPwd}
              onChange={(e) => setCurrentPwd(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A5F6F]"
              placeholder="Enter current password"
            />
          </div>

          <div>
            <label htmlFor="newPwd" className="block mb-2 font-semibold text-[#0A5F6F]">
              New Password
            </label>
            <input
              type="password"
              id="newPwd"
              value={newPwd}
              onChange={(e) => setNewPwd(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A5F6F]"
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label htmlFor="confirmPwd" className="block mb-2 font-semibold text-[#0A5F6F]">
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPwd"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A5F6F]"
              placeholder="Confirm new password"
            />
          </div>

          {message && (
            <p
              className={`font-semibold ${
                message.includes('successfully') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            className="bg-[#0A5F6F] hover:bg-[#08727c] text-white font-semibold py-2 px-6 rounded transition"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordPage;
