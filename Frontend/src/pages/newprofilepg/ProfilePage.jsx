import React from 'react';

const ProfilePage = ({ profileData, handleChange, handleSave }) => (
  <div className="p-6 sm:p-8">
    <h2 className="text-3xl font-bold text-[#002147] mb-6">Public Profile</h2>
    <p className="text-gray-600 mb-8">Add information about yourself</p>

    {/* Basics Section */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Basics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="headline" className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
          <input
            type="text"
            id="headline"
            name="headline"
            value={profileData.headline}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
            placeholder="Add a professional headline like 'Instructor at LMS' or 'Developer'"
          />
        </div>
      </div>
    </div>

    {/* Biography Section */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Biography</h3>
      <textarea
        id="bio"
        name="bio"
        value={profileData.bio}
        onChange={handleChange}
        rows="5"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
      ></textarea>
    </div>

    {/* Skills Section */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {profileData.skills.map((skill, index) => (
          <span key={index} className="bg-[#A6B1E1] text-[#002147] px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add new skill and press Enter"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleChange({ target: { name: 'skills', value: [...profileData.skills, e.target.value.trim()] } });
            e.target.value = '';
          }
        }}
        className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
      />
    </div>

    {/* Interests Section */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Interests</h3>
      <div className="flex flex-wrap gap-2">
        {profileData.interests.map((interest, index) => (
          <span key={index} className="bg-[#A6B1E1] text-[#002147] px-3 py-1 rounded-full text-sm">
            {interest}
          </span>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add new interest and press Enter"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleChange({ target: { name: 'interests', value: [...profileData.interests, e.target.value.trim()] } });
            e.target.value = '';
          }
        }}
        className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
      />
    </div>

    {/* Academic Details Section (Original) */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Academic Details (Summary)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="academicProgram" className="block text-sm font-medium text-gray-700 mb-1">Program</label>
          <input
            type="text"
            id="academicProgram"
            name="academicDetails.program"
            value={profileData.academicDetails.program}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="academicYear" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
          <input
            type="text"
            id="academicYear"
            name="academicDetails.year"
            value={profileData.academicDetails.year}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="academicGPA" className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
          <input
            type="text"
            id="academicGPA"
            name="academicDetails.gpa"
            value={profileData.academicDetails.gpa}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
      </div>
    </div>

    {/* Learning Goals Section */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Learning Goals</h3>
      <div className="flex flex-wrap gap-2">
        {profileData.learningGoals.map((goal, index) => (
          <span key={index} className="bg-[#A6B1E1] text-[#002147] px-3 py-1 rounded-full text-sm">
            {goal}
          </span>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add new learning goal and press Enter"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleChange({ target: { name: 'learningGoals', value: [...profileData.learningGoals, e.target.value.trim()] } });
            e.target.value = '';
          }
        }}
        className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
      />
    </div>

    {/* Courses Enrolled Section */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Courses Enrolled</h3>
      <div className="flex flex-wrap gap-2">
        {profileData.coursesEnrolled.map((course, index) => (
          <span key={index} className="bg-[#A6B1E1] text-[#002147] px-3 py-1 rounded-full text-sm">
            {course}
          </span>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add new course and press Enter"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleChange({ target: { name: 'coursesEnrolled', value: [...profileData.coursesEnrolled, e.target.value.trim()] } });
            e.target.value = '';
          }
        }}
        className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
      />
    </div>

    {/* Certifications Section */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Certifications</h3>
      <div className="flex flex-wrap gap-2">
        {profileData.certifications.map((cert, index) => (
          <span key={index} className="bg-[#A6B1E1] text-[#002147] px-3 py-1 rounded-full text-sm">
            {cert}
          </span>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add new certification and press Enter"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleChange({ target: { name: 'certifications', value: [...profileData.certifications, e.target.value.trim()] } });
            e.target.value = '';
          }
        }}
        className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
      />
    </div>

    {/* Projects & Work Experience Section */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">Projects & Work Experience</h3>
      <div className="flex flex-wrap gap-2">
        {profileData.projectsWorkExperience.map((item, index) => (
          <span key={index} className="bg-[#A6B1E1] text-[#002147] px-3 py-1 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add new project/work experience and press Enter"
        onKeyPress={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleChange({ target: { name: 'projectsWorkExperience', value: [...profileData.projectsWorkExperience, e.target.value.trim()] } });
            e.target.value = '';
          }
        }}
        className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
      />
    </div>

    {/* External Links Section */}
    <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-semibold text-[#002147] mb-4">External Links</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
          <input
            type="text"
            id="linkedin"
            name="externalLinks.linkedin"
            value={profileData.externalLinks.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">GitHub URL</label>
          <input
            type="text"
            id="github"
            name="externalLinks.github"
            value={profileData.externalLinks.github}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#002147] focus:border-[#002147] transition duration-200"
          />
        </div>
        <div>
          <label htmlFor="personalWebsite" className="block text-sm font-medium text-gray-700 mb-1">Personal Website URL</label>
          <input
            type="text"
            id="personalWebsite"
            name="externalLinks.personalWebsite"
            value={profileData.externalLinks.personalWebsite}
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
      Save Changes
    </button>
  </div>
);

export default ProfilePage;