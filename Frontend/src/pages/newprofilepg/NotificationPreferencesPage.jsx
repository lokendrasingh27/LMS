import React from 'react';

const NotificationPreferencesPage = ({ profileData, handleChange, handleSave }) => (
  <div className="p-6 sm:p-8">
    <h2 className="text-3xl font-bold text-[#002147] mb-6">Notification preferences</h2>
    <p className="text-gray-600 mb-8">Manage the types of communications you receive.</p>

    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Updates and offerings</h3>
      <label htmlFor="updatesAndOfferingsToggle" className="flex items-center cursor-pointer mb-4">
        <span className="relative">
          <input
            type="checkbox"
            id="updatesAndOfferingsToggle"
            name="updatesAndOfferings"
            checked={profileData.updatesAndOfferings}
            onChange={handleChange}
            className="sr-only"
          />
          <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out"></div>
        </span>
        <span className="ml-3 text-gray-700 font-medium">
          {profileData.updatesAndOfferings ? 'Enabled' : 'Disabled'}
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
      <div className="space-y-3 mt-4">
        <label htmlFor="productLaunches" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="productLaunches"
            name="productLaunches"
            checked={profileData.productLaunches}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-[#002147] rounded focus:ring-[#002147]"
          />
          <span className="ml-2 text-gray-700">Product launches and announcements</span>
        </label>
        <label htmlFor="offersAndPromotions" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="offersAndPromotions"
            name="offersAndPromotions"
            checked={profileData.offersAndPromotions}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-[#002147] rounded focus:ring-[#002147]"
          />
          <span className="ml-2 text-gray-700">Offers and promotions</span>
        </label>
      </div>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Your learning</h3>
      <label htmlFor="learningStatsToggle" className="flex items-center cursor-pointer mb-4">
        <span className="relative">
          <input
            type="checkbox"
            id="learningStatsToggle"
            name="learningStats"
            checked={profileData.learningStats}
            onChange={handleChange}
            className="sr-only"
          />
          <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out"></div>
        </span>
        <span className="ml-3 text-gray-700 font-medium">
          {profileData.learningStats ? 'Enabled' : 'Disabled'}
        </span>
      </label>
      <div className="space-y-3 mt-4">
        <label htmlFor="inspiration" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="inspiration"
            name="inspiration"
            checked={profileData.inspiration}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-[#002147] rounded focus:ring-[#002147]"
          />
          <span className="ml-2 text-gray-700">Inspiration (tips, stories, etc.)</span>
        </label>
        <label htmlFor="courseRecommendations" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="courseRecommendations"
            name="courseRecommendations"
            checked={profileData.courseRecommendations}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-[#002147] rounded focus:ring-[#002147]"
          />
          <span className="ml-2 text-gray-700">Course recommendations</span>
        </label>
        <label htmlFor="notificationsFromInstructors" className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            id="notificationsFromInstructors"
            name="notificationsFromInstructors"
            checked={profileData.notificationsFromInstructors}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-[#002147] rounded focus:ring-[#002147]"
          />
          <span className="ml-2 text-gray-700">Notifications from instructors</span>
        </label>
      </div>
    </div>
    <button
      onClick={handleSave}
      className="px-6 py-2 bg-[#002147] text-white font-semibold rounded-full shadow-md hover:bg-[#1a3a6b] transition duration-300 ease-in-out transform hover:scale-105"
    >
      Save Preferences
    </button>
  </div>
);

export default NotificationPreferencesPage;