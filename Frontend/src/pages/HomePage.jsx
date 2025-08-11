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
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#eaf4f4]">
      {/* Sidebar */}
     <Sidebar  />

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
