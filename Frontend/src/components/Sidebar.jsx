import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaChalkboardTeacher,
  FaUsers,
  FaComments,
  FaCog,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;

  const isInstructor = path.startsWith('/instructor');
  const isGuest = !isInstructor; // anything else is guest (like "/", "/login", etc.)

  return (
    <div className=" w-72 bg-[#001f3f] text-white flex flex-col h-[100vh] justify-between rounded-r-3xl p-4  overflow-hidden">
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img src="/images/logo.jpg" alt="Logo" className="w-20 h-20 mb-2 rounded-full" />
        </div>

        {/* GUEST SIDEBAR */}
        {isGuest && (
          <div className="space-y-4">
            {/* Auth Buttons */}
            <div className="space-y-2 flex gap-2 justify-center items-center">
              <Link to="/login">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full justify-center">
                  <FaSignInAlt /> <span>Login</span>
                </button>
              </Link>
              <Link to="/signup">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full justify-center">
                  <FaUserPlus /> <span>Sign Up</span>
                </button>
              </Link>
            </div>

            {/* Optional guest greeting or static section */}
            <div className="bg-[#15315B] p-4 rounded-2xl text-center">
              <p className="text-sm">Welcome, Guest!</p>
              <p className="text-xs">Explore our LMS platform</p>
            </div>

            <nav className="space-y-2 flex flex-col gap-2">
              <Link to="/">
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaHome /> <span>Home</span>
                </button>
              </Link>
              <Link to="/All-Courses">
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaHome /> <span>All courses</span>
                </button>
              </Link>
               <Link to="/All-Courses">
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaHome /> <span>Category</span>
                </button>
              </Link>
               <Link to="/Contact-Us">
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaHome /> <span>Contact</span>
                </button>
              </Link>
            </nav>
          </div>
        )}

        {/* INSTRUCTOR SIDEBAR */}
        {isInstructor && (
          <div className="space-y-4">
            {/* User Info */}
            <div className="bg-[#15315B] p-4 rounded-2xl text-center">
              <img
                src="/images/userimage.jpeg"
                alt="Instructor"
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
              <p className="text-sm">Hi, Alex</p>
              <p className="text-xs">Instructor Panel</p>
            </div>

            <nav className="space-y-2 flex flex-col">
              <Link to="/instructor">
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaHome /> <span>Dashboard</span>
                </button>
              </Link>
              <Link to="/instructor/courses">
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaChalkboardTeacher /> <span>Courses</span>
                </button>
              </Link>
              <Link to="/settings">
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaCog /> <span>Settings</span>
                </button>
              </Link>
              <Link to="/Logout">
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-red-500 text-[#001f3f] rounded-xl">
                  <FaUsers /> <span>logOut</span>
                </button>
              </Link>
             
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
