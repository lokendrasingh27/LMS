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
import CourseViewPage from './courseviewpage/CourseViewPage';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-[#E3F1F1]">
      {/* Sidebar */}
     <Sidebar  />

      {/* Main Content */}
      <CourseViewPage/>
    </div> 
  );
};

export default Dashboard;
