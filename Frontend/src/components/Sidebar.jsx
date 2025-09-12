import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaGraduationCap,
  FaHome,
  FaChalkboardTeacher,
  FaUserPlus,
  FaSignInAlt,
  FaUsers,
  FaClipboardList,
  FaComments,
} from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { ImBook } from "react-icons/im";
import { CiLogout } from "react-icons/ci";
import { ChartColumnBig, FolderPlus, Menu, X } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/authSlice";
import userLogo from "/images/userimage.jpeg";
import { toast } from "sonner";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const [isOpen, setIsOpen] = useState(false); // mobile sidebar toggle

  const logoutHandler = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/logout", {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const baseLinkStyle =
    "flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] hover:bg-[#006D77] hover:text-white rounded-xl w-full";

  return (
    <>
      {/* ✅ Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center bg-[#001f3f] text-white p-4">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
        <div className="flex items-center gap-2">
          <FaGraduationCap className="text-2xl" />
          <h1 className="font-bold text-xl">Gradix</h1>
        </div>
        {user && (
          <img
            src={user?.photoUrl || userLogo}
            alt="User"
            className="w-8 h-8 rounded-full"
          />
        )}
      </div>

      {/* ✅ Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-[#001f3f] text-white p-4 z-50 transform transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:flex md:flex-col`}
      >
        {/* Close Button on Mobile */}
        <div className="md:hidden flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Logo */}
        <div className="flex flex-col items-center mb-8 mt-10 md:mt-0">
          <FaGraduationCap className="text-5xl" />
          <h1 className="text-2xl font-bold">Gradix</h1>
        </div>

        {/* Sidebar Links */}
        <div className="space-y-4">
          {!user ? (
            // ✅ Unauthenticated Sidebar
            <div className="flex flex-col gap-3">
              <Link to="/" className={baseLinkStyle}>
                <FaHome /> Home
              </Link>
              <Link to="/courses" className={baseLinkStyle}>
                <ImBook /> All Courses
              </Link>
              <Link to="/login" className={baseLinkStyle}>
                <FaSignInAlt /> Login
              </Link>
              <Link to="/signup" className={baseLinkStyle}>
                <FaUserPlus /> Signup
              </Link>
            </div>
          ) : (
            <>
              {/* ✅ User Profile Box */}
              <div className="bg-[#15315B] p-4 rounded-2xl text-center mb-4">
                <img
                  src={user?.photoUrl || userLogo}
                  alt="User"
                  className="w-16 h-16 rounded-full mx-auto mb-2 cursor-pointer"
                  onClick={() => navigate("/profile")}
                />
                <p className="text-sm">{user.name}</p>
                <p className="text-xs capitalize">{user.role}</p>
              </div>

              {/* ✅ Dynamic Sidebar Menu */}
              <div className="flex flex-col gap-3">
                {/* Instructor Menu */}
                {user.role === "instructor" && (
                  <>
                    <NavLink to="/" className={baseLinkStyle}>
                      <FaHome /> Home
                    </NavLink>
                    <NavLink to="/instructor/dashboard" className={baseLinkStyle}>
                      <ChartColumnBig /> Dashboard
                    </NavLink>
                    <NavLink to="/instructor/course" className={baseLinkStyle}>
                      <FolderPlus /> Courses
                    </NavLink>
                  </>
                )}

                {/* Admin Menu */}
                {user.role === "admin" && (
                  <>
                    <NavLink to="/admin" className={baseLinkStyle}>
                      <FaHome /> Dashboard
                    </NavLink>
                    <NavLink to="/admin/instructors" className={baseLinkStyle}>
                      <FaChalkboardTeacher /> Instructors
                    </NavLink>
                    <NavLink to="/admin/students" className={baseLinkStyle}>
                      <FaGraduationCap /> Students
                    </NavLink>
                    <NavLink to="/admin/courses" className={baseLinkStyle}>
                      <ImBook /> Courses
                    </NavLink>
                    <NavLink to="/admin/users" className={baseLinkStyle}>
                      <FaUsers /> Users
                    </NavLink>
                    <NavLink to="/admin/course-analytics" className={baseLinkStyle}>
                      <ChartColumnBig /> Analytics
                    </NavLink>
                    <NavLink to="/admin/enrollments" className={baseLinkStyle}>
                      <FaUserPlus /> Enrollments
                    </NavLink>
                    <NavLink to="/admin/assessments" className={baseLinkStyle}>
                      <FaClipboardList /> Assessments
                    </NavLink>
                    <NavLink to="/admin/communications" className={baseLinkStyle}>
                      <FaComments /> Announcement
                    </NavLink>
                    <NavLink to="/admin/financials" className={baseLinkStyle}>
                      <MdOutlinePayment /> Financials
                    </NavLink>
                  </>
                )}

                {/* Student Menu */}
                {user.role === "student" && (
                  <>
                    <NavLink to="/" className={baseLinkStyle}>
                      <FaHome /> Home
                    </NavLink>
                    <NavLink
                      to="/courseplayer/EnrolledDashboard"
                      className={baseLinkStyle}
                    >
                      <ImBook /> Enrolled Courses
                    </NavLink>
                    <NavLink to="/paymenthistory" className={baseLinkStyle}>
                      <MdOutlinePayment /> Payment History
                    </NavLink>
                  </>
                )}
              </div>

              {/* ✅ Logout Button */}
              <button
                onClick={logoutHandler}
                className="mt-6 bg-red-500 text-white rounded-xl py-2 px-4 flex items-center gap-2 w-full"
              >
                <CiLogout /> Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* ✅ Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
