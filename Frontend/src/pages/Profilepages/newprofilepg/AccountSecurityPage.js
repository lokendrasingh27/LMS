import React, { useState, useEffect } from 'react';

const AccountSecurityPage = ({ profileData, handleChange, handleSave }) => {
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    if (profileData.newPassword && profileData.confirmPassword) {
      setPasswordMatch(profileData.newPassword === profileData.confirmPassword);
    } else {
      setPasswordMatch(true);
    }
  }, [profileData.newPassword, profileData.confirmPassword]);

  const handlePasswordChange = () => {
    if (passwordMatch && profileData.newPassword) {
      alert('Password changed successfully!');
      // In a real app, send new password to backend
      handleChange({ target: { name: 'newPassword', value: '' } });
      handleChange({ target: { name: 'confirmPassword', value: '' } });
    } else if (!passwordMatch) {
      alert('New password and confirm password do not match.');
    } else {
      alert('Please enter a new password.');
    }
  };

  return (
    <div className="p-6 sm:p-8">
      <h2 className="text-3xl font-bold text-[#002147] mb-6">Account Security</h2>
      <p className="text-gray-600 mb-8">Edit your account settings and change your password here.</p>

      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-[#002147] mb-4">Email</h3>
        <div className="flex items-center mb-4">
          <input
            type="email"
            id="accountEmail"
            name="accountEmail"
            value={profileData.accountEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
            readOnly // Email typically not directly editable here without re-verification
          />
          <button
            onClick={() => alert('Email change functionality not implemented.')}
            className="px-4 py-2 bg-[#A6B1E1] text-[#002147] rounded-r-md hover:bg-[#8e9acf] transition duration-300"
            title="Edit Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-3.586 3.586l-7.793 7.793A2 2 0 002 17.172V19h1.828a2 2 0 001.414-.586l7.793-7.793-2.828-2.828z" />
            </svg>
          </button>
        </div>

        <h3 className="text-xl font-semibold text-[#002147] mb-4">Change Password</h3>
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">New password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={profileData.newPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${!passwordMatch ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200`}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm new password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={profileData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${!passwordMatch ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200`}
            />
            {!passwordMatch && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match.</p>
            )}
          </div>
        </div>
        <button
          onClick={handlePasswordChange}
          className="px-6 py-2 bg-[#002147] text-white font-semibold rounded-full shadow-md hover:bg-[#1a3a6b] transition duration-300 ease-in-out transform hover:scale-105"
        >
          Change password
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-[#002147] mb-4">Multi-factor Authentication</h3>
        <p className="text-gray-700 mb-4">
          Increase your account security by requiring a code emailed to you or sent to your authenticator app when you log in.
        </p>
        <label htmlFor="multiFactorAuthToggle" className="flex items-center cursor-pointer">
          <span className="relative">
            <input
              type="checkbox"
              id="multiFactorAuthToggle"
              name="multiFactorAuthEnabled"
              checked={profileData.multiFactorAuthEnabled}
              onChange={handleChange}
              className="sr-only"
            />
            <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out"></div>
          </span>
          <span className="ml-3 text-gray-700 font-medium">
            {profileData.multiFactorAuthEnabled ? 'Enabled' : 'Disabled'}
          </span>
        </label>
        <style jsx>{`
          input:checked + .block {
            background-color: #002147;
          }
          input:checked + .block + .dot {
            transform: translateX(100%);
          }
        `}</style>
      </div>
    </div>
  );
};

export default AccountSecurityPage;