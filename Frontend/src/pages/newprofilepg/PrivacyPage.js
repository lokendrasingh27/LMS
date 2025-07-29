import React from 'react';

const PrivacyPage = ({ profileData, handleChange, handleSave }) => (
  <div className="p-6 sm:p-8">
    <h2 className="text-3xl font-bold text-[#002147] mb-6">Privacy</h2>
    <p className="text-gray-600 mb-8">Modify your privacy settings here.</p>

    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Profile page settings</h3>
      <div className="space-y-4">
        <label htmlFor="showProfileToLoggedUsers" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="showProfileToLoggedUsers"
            name="showProfileToLoggedUsers"
            checked={profileData.showProfileToLoggedUsers}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-[#002147] rounded focus:ring-[#002147]"
          />
          <span className="ml-2 text-gray-700">Show your profile to logged-in users</span>
        </label>
        <label htmlFor="showCoursesOnProfile" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="showCoursesOnProfile"
            name="showCoursesOnProfile"
            checked={profileData.showCoursesOnProfile}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-[#002147] rounded focus:ring-[#002147]"
          />
          <span className="ml-2 text-gray-700">Show courses you're taking on your profile page</span>
        </label>
      </div>
      <button
        onClick={handleSave}
        className="mt-6 px-6 py-2 bg-[#002147] text-white font-semibold rounded-full shadow-md hover:bg-[#1a3a6b] transition duration-300 ease-in-out transform hover:scale-105"
      >
        Save
      </button>
    </div>
  </div>
);

export default PrivacyPage;