import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaHome, FaChalkboardTeacher, FaUsers, FaCog, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import { ImBook } from "react-icons/im";
import { MdOutlinePayment } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/authSlice';
import userLogo from   '/images/userimage.jpeg'
import { toast } from 'sonner';
import { isAction } from '@reduxjs/toolkit';
import { ChartColumnBig, FolderPlus } from 'lucide-react';
const Sidebar = () => {
  const Navigate =useNavigate()
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const logoutHandler = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth/logout', {
        withCredentials: true,
      });
      if (res.data.success) {
          Navigate('/')
        dispatch(setUser(null));
        toast.success(res.data.message)
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  
  // const getNavItems = () => {
  //   if (!user) {
  //     return [
  //       { label: 'Home', icon: <FaHome />, link: '/' },
  //       { label: 'All Course', icon: <ImBook />, link: '/courses' },
  //       { label: 'Category', icon: <FaChalkboardTeacher />, link: '/category' },
  //       { label: 'Payment Method', icon: <FaCog />, link: '/payment' },
  //     ];
  //   }

  //   switch (user.role) {
  //     case 'student':
  //       return [
  //         { label: 'Home', icon: <FaHome />, link: '/' },
  //         { label: 'Enrolled Course', icon: <ImBook />, link: '/my-courses' },
  //         { label: 'Change Password', icon: <FaChalkboardTeacher />, link: '/change-password' },
  //         { label: 'Payment Method', icon: <MdOutlinePayment />, link: '/payment' },
  //       ];
  //     case 'instructor':
  //     case 'admin':
  //       return [
  //         { label: 'Dashboard', icon: <FaHome />, link: '/instructor' },
  //         { label: 'Courses', icon: <FaChalkboardTeacher />, link: '/instructor/courses' },
  //       ];
  //     default:
  //       return [];
  //   }
  // };

  return (
    <div className="w-72 hidden lg:block bg-[#001f3f] text-white flex flex-col h-[100vh] justify-between rounded-r-3xl p-4 overflow-hidden">
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <FaGraduationCap className="text-6xl" />
          <h1 className="text-2xl font-bold text-white">Gradix</h1>
        </div>

        {/* Auth buttons or profile */}
        <div className="space-y-4">
          {!user ? (
           <div>
             <div className="space-y-2 flex gap-2 items-center mb-10">
              <Link to="/login">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                  <FaSignInAlt /> <span>Login</span>
                </button>
              </Link>

              <div>

              <Link to="/signup">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                  <FaUserPlus /> <span>Home</span>
                </button>
              </Link>
              </div>
              
            </div>
             <div className='flex flex-col gap-3'>

             <Link to="/">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                   <FaHome /> <span>Home</span>
                </button>
              </Link>
               <Link to="/courses">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                   <ImBook /> <span>All Courses</span>
                </button>
              </Link>
              <Link to="/category">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                  <FaChalkboardTeacher /><span>Category</span>
                </button>
              </Link>
              <Link to="/payment-method">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
               <FaCog /><span>payment method</span>
                </button>
              </Link>
             </div>
            
           </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-[#15315B] p-4 rounded-2xl text-center">
                <Link to="/profile">
                  <img
                    src={user?.photoUrl || userLogo}
                    alt="User"
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                </Link>
                <p className="text-sm">{user.name}</p>
                <p className="text-xs">{user.role}</p>
              </div>

             {/* conditional Navigation for student and instructor */}
                {
                  user.role === "instructor"?(
                    <div className='flex flex-col gap-3'>
                    <NavLink to='/'className={({isActive})=>` text-black ${isActive ? "bg-[#006D77] text-white":"bg-[#b3e5fc]"} flex items-center gap-2  cursor-pointer
               p-2 rounded-xl w-full`} >
                   <FaHome /> <span>Home</span>
                
                    </NavLink>
              <NavLink to='/instructor/dashboard' className={({isActive})=>` text-black ${isActive ? "bg-[#006D77] text-white":"bg-[#b3e5fc]"} flex items-center gap-2  cursor-pointer
               p-2 rounded-xl w-full`}>
                <ChartColumnBig/>  
                <span>Dashboard</span>
               </NavLink>
               <NavLink to='/instructor/course' className={({isActive})=>` text-black ${isActive ? "bg-[#006D77] text-white":"bg-[#b3e5fc]"} flex items-center gap-2 cursor-pointer
               p-2 rounded-2xl w-full`}><FolderPlus/>  <span>Course</span>
               </NavLink>
            
              
             
             </div>
                  ):(
                    <div className='flex flex-col gap-3'>

             <Link to="/">
                <button className="flex cursor-pointer items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                   <FaHome /> <span>Home</span>
                </button>
              </Link>
               <Link to="/courseplayer/EnrolledDashboard">
                <button className="flex cursor-pointer items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                   <ImBook /> <span>Enrolled Course</span>
                </button>
              </Link>
              <Link to="/category">
                <button className="flex cursor-pointer items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                  <FaChalkboardTeacher /><span>Password Change</span>
                </button>
              </Link>
              <Link to="/payment-method">
                <button className="flex cursor-pointer items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
               <FaCog /><span>payment method</span>
                </button>
              </Link>
             </div>
                  )
                }
            </div>
          )}

          {/* Navigation */}
          <nav className="space-y-2 flex flex-col">
            {/* {getNavItems().map((item, idx) => (
              <Link key={idx} to={item.link}>
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  {item.icon} <span>{item.label}</span>
                </button>
              </Link>
            ))} */}

            {/* Logout only if logged in */}
            {user && (
              <button
                onClick={logoutHandler}
                className="flex  items-center gap-2 w-full font-bold py-2 px-4 bg-red-500 text-[#001f3f] rounded-xl"
              >
                <CiLogout/> <span>Logout</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
