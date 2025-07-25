import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaBook,
  FaClipboardList,
  FaCalendarAlt,
  FaComments,
  FaCog,
  FaBell,
  FaRegCommentDots,
  FaSignInAlt,
  FaUserPlus
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#eaf4f4]">
      {/* Sidebar */}
      <div className="w-64 bg-[#001f3f] text-white flex flex-col justify-between rounded-r-3xl p-4">
        <div>
          <div className="flex flex-col items-center mb-8">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 mb-2" />
            <h2 className="text-lg font-semibold text-center">OXFORD</h2>
          </div>
           <div className="space-y-3 gap-2 flex">
          <Link to="/login">
            <button className="flex items-center space-x-2 w- py-2 px-3 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
              <FaSignInAlt /> <span>Login</span>
            </button>
          </Link>
          <Link to="/signup">
            <button className="flex items-center space-x-2  py-2 px-3 bg-white text-[#001f3f] rounded-xl">
              <FaUserPlus /> <span>Sign Up</span>
            </button>
          </Link>
        </div>
          <div className="bg-[#15315B] p-4 rounded-2xl text-center mb-4">
            <img
              src="/avatar.png"
              alt="User"
              className="w-16 h-16 rounded-full mx-auto mb-2"
            />
            <p className="text-sm">Hi, Alex</p>
            <p className="text-xs">E173037</p>
          </div>
          <nav className="space-y-3">
            <button className="flex items-center space-x-2 w-full py-2 px-3 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
              <FaHome /> <span>Home</span>
            </button>
            <button className="flex items-center space-x-2 w-full py-2 px-3 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
              <FaBook /> <span>My Courses</span>
            </button>
            <button className="flex items-center space-x-2 w-full py-2 px-3 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
              <FaClipboardList /> <span>Assignments</span>
            </button>
            <button className="flex items-center space-x-2 w-full py-2 px-3 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
              <FaCalendarAlt /> <span>Time Table</span>
            </button>
            <button className="flex items-center space-x-2 w-full py-2 px-3 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
              <FaComments /> <span>Forum</span>
            </button>
            <button className="flex items-center space-x-2 w-full py-2 px-3 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
              <FaCog /> <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* Login and Signup Buttons */}
      
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-[#001f3f]">Dashboard</h1>
            <p className="text-lg mt-1">Welcome Back, <strong>Alex</strong></p>
          </div>
          <div className="flex space-x-4 text-2xl text-[#001f3f]">
            <FaBell />
            <FaRegCommentDots />
          </div>
        </div>

        <div className="my-6">
          <img
            src="/oxford-banner.png"
            alt="Banner"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#006d77] text-white p-4 rounded-xl">
            <p className="font-semibold">Diploma in English</p>
            <p className="text-xs">OXF/ENG/01</p>
          </div>
          <div className="bg-[#006d77] text-white p-4 rounded-xl">
            <p className="font-semibold">Diploma in IT</p>
            <p className="text-xs">OXF/DIT/01</p>
          </div>
          <div className="bg-[#006d77] text-white p-4 rounded-xl">
            <p className="font-semibold">HND in Computing</p>
            <p className="text-xs">OXF/HND/01</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#001f3f] text-white p-4 rounded-xl">
            <p>Module Progress : <strong>90%</strong></p>
          </div>
          <div className="bg-[#001f3f] text-white p-4 rounded-xl">
            <p>Assignment Progress : <strong>10%</strong></p>
          </div>
          <div className="bg-[#001f3f] text-white p-4 rounded-xl">
            <p>Attendance Progress : <strong>97%</strong></p>
          </div>
          <div className="bg-[#001f3f] text-white p-4 rounded-xl">
            <p>Course Progress : <strong>50%</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
