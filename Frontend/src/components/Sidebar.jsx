import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaHome, FaChalkboardTeacher, FaUsers, FaCog, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/authSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const logoutHandler = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth/logout', {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        alert(res.data.message);
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Role-based navigation items
  const getNavItems = () => {
    if (!user) {
      return [
        { label: 'Home', icon: <FaHome />, link: '/' },
        { label: 'All Course', icon: <FaHome />, link: '/courses' },
        { label: 'Category', icon: <FaChalkboardTeacher />, link: '/category' },
        { label: 'Payment Method', icon: <FaCog />, link: '/payment' },
      ];
    }

    switch (user.role) {
      case 'student':
        return [
          { label: 'Home', icon: <FaHome />, link: '/' },
          { label: 'Enrolled Course', icon: <FaHome />, link: '/my-courses' },
          { label: 'Change Password', icon: <FaChalkboardTeacher />, link: '/change-password' },
          { label: 'Payment Method', icon: <FaCog />, link: '/payment' },
        ];
      case 'instructor':
      case 'admin':
        return [
          { label: 'Dashboard', icon: <FaHome />, link: '/instructor' },
          { label: 'Courses', icon: <FaChalkboardTeacher />, link: '/instructor/courses' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="w-72 bg-[#001f3f] text-white flex flex-col h-[100vh] justify-between rounded-r-3xl p-4 overflow-hidden">
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <FaGraduationCap className="text-6xl" />
          <h1 className="text-2xl font-bold text-white">Gradix</h1>
        </div>

        {/* Auth buttons or profile */}
        <div className="space-y-4">
          {!user ? (
            <div className="space-y-2 flex gap-2 items-center">
              <Link to="/login">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                  <FaSignInAlt /> <span>Login</span>
                </button>
              </Link>
              <Link to="/signup">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                  <FaUserPlus /> <span>Sign Up</span>
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-[#15315B] p-4 rounded-2xl text-center">
                <Link to="/profile">
                  <img
                    src="/images/userimage.jpeg"
                    alt="User"
                    className="w-16 h-16 rounded-full mx-auto mb-2"
                  />
                </Link>
                <p className="text-sm">{user.name}</p>
                <p className="text-xs">{user.role}</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="space-y-2 flex flex-col">
            {getNavItems().map((item, idx) => (
              <Link key={idx} to={item.link}>
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  {item.icon} <span>{item.label}</span>
                </button>
              </Link>
            ))}

            {/* Logout only if logged in */}
            {user && (
              <button
                onClick={logoutHandler}
                className="flex items-center gap-2 w-full py-2 px-4 bg-red-500 text-[#001f3f] rounded-xl"
              >
                <FaUsers /> <span>Logout</span>
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
