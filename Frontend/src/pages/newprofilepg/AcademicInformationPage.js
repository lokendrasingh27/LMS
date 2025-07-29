import React from 'react';

const AcademicInformationPage = ({ profileData, handleChange, handleSave }) => (
  <div className="p-6 sm:p-8">
    <h2 className="text-3xl font-bold text-[#002147] mb-6">Academic Information</h2>
    <p className="text-gray-600 mb-8">Manage your academic details and progress.</p>

    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Current Academic Status</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="currentCourse" className="block text-sm font-medium text-gray-700 mb-1">Current Course</label>
          <input
            type="text"
            id="currentCourse"
            name="currentCourse"
            value={profileData.currentCourse}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="majorSpecialization" className="block text-sm font-medium text-gray-700 mb-1">Major / Specialization</label>
          <input
            type="text"
            id="majorSpecialization"
            name="majorSpecialization"
            value={profileData.majorSpecialization}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="enrollmentYear" className="block text-sm font-medium text-gray-700 mb-1">Enrollment Year</label>
          <input
            type="text"
            id="enrollmentYear"
            name="enrollmentYear"
            value={profileData.enrollmentYear}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="expectedGraduation" className="block text-sm font-medium text-gray-700 mb-1">Expected Graduation</label>
          <input
            type="text"
            id="expectedGraduation"
            name="expectedGraduation"
            value={profileData.expectedGraduation}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="gpaPerformanceScore" className="block text-sm font-medium text-gray-700 mb-1">GPA / Performance Score</label>
          <input
            type="text"
            id="gpaPerformanceScore"
            name="gpaPerformanceScore"
            value={profileData.gpaPerformanceScore}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
      </div>
    </div>

    <button
      onClick={handleSave}
      className="px-8 py-3 bg-[#002147] text-white font-semibold rounded-full shadow-md hover:bg-[#1a3a6b] transition duration-300 ease-in-out transform hover:scale-105"
    >
      Save Academic Information
    </button>
  </div>
);

export default AcademicInformationPage;