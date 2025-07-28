import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaClipboardList, FaCalendarAlt, FaComments, FaCog, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
     <div className="w-64 bg-[#001f3f] text-white flex flex-col justify-between rounded-r-3xl p-4">
            <div>
              <div className="flex flex-col items-center mb-8">
                <img src="/images/logo.jpg" alt="Logo" className="w-20 h-20 mb-2" />
                
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
                src="/images/userimage.jpeg"
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
  )
}

export default Sidebar
