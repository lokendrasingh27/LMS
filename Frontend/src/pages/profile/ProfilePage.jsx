// src/pages/ProfilePage.jsx
import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [program, setProgram] = useState('BSc in CS');
  const [year, setYear] = useState('2023 - 2027');
  const [gpa, setGpa] = useState('3.8');
  const [profileImage, setProfileImage] = useState(null); // For storing uploaded image preview

  const fileInputRef = useRef(null); // To trigger file input

  const handleSave = () => {
    alert('Changes Saved!');
    console.log({ firstName, lastName, program, year, gpa });
  };

  const handlePhotoUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Open file explorer
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Preview image
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      <div className="flex-1 overflow-y-auto bg-gray-50 p-10">
        <h1 className="text-4xl font-bold text-[#001F3F] mb-6 text-left">Public Profile</h1>

        {/* About Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left: Name Fields */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-[#001F3F] mb-4 text-left">About</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block font-medium mb-1 text-left">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 text-left"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1 text-left">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 text-left"
                  />
                </div>
              </div>
            </div>

            {/* Right: Upload Photo */}
            <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-3 flex items-center justify-center">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white bg-[#001F3F] w-full h-full flex items-center justify-center font-bold text-xl">
                    {firstName[0]}
                    {lastName[0]}
                  </span>
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />

              <button
                onClick={handlePhotoUpload}
                className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md"
              >
                Upload Photo
              </button>
            </div>
          </div>
        </div>

        {/* Academic Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#001F3F] mb-4 text-left">Academic Details</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1 text-left">Program</label>
            <input
              type="text"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-left"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1 text-left">Year</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-left"
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1 text-left">GPA</label>
            <input
              type="text"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-left"
            />
          </div>

          <button
            onClick={handleSave}
            className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
