import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGraduationCap } from "react-icons/fa6";
import {
  FaHome,
  FaChalkboardTeacher,
  FaUsers,
  FaComments,
  FaCog,
  FaSignInAlt,
  FaUserPlus,
} from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/authSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const {user}= useSelector(store => store.auth);
   

  const logoutHandler = async(e)=>{
    try{
           const res=await axios.get('http://localhost:5000/api/auth/logout', {
          withCredentials: true
        });
        if(res.data.success){
          dispatch(setUser(null));
          alert(res.data.message);
          
        }
        else{
          alert("something went wrong");
        }
    } catch (error) {
      console.error("Error during logout:", error);
    }

  }

  return (
    <div className=" w-72 bg-[#001f3f] text-white flex flex-col h-[100vh] justify-between rounded-r-3xl p-4  overflow-hidden">
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          {/* <img src="/images/logo.jpg" alt="Logo" className="w-20 h-20 mb-2 rounded-full" /> */}
          <FaGraduationCap className='text-6xl' />
          <h1 className='text-2xl font-bold text-white'>Gradix</h1>
         
        </div>

      
       
          <div className="space-y-4">
            {/* Auth Buttons */}
            {
              !user ? (
            <div className="space-y-2 flex gap-2 items-center">
              <Link to="/login">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full ">
                  <FaSignInAlt /> <span>Login</span>
                </button>
              </Link>
              <Link to="/signup">
                <button className="flex items-center gap-2 py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl w-full">
                  <FaUserPlus /> <span>Sign Up</span>
                </button>
              </Link>
              
            </div>
            

              ):(
                 <div className='space-y-4'>
             <div className="bg-[#15315B] p-4 rounded-2xl text-center">
            <Link to='/profile'>
              <img
              
                src="/images/userimage.jpeg"
                alt="Instructor"
                className="w-16 h-16 rounded-full mx-auto mb-2"
                
              />
            </Link>
              <p className="text-sm">{user.name}</p>
              <p className="text-xs">{user.role}</p>
            </div>
             
           </div>
           
              )
            }
          <nav className="space-y-2 flex flex-col">
              <Link to="/">
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaHome /> <span>Home</span>
                </button>
              </Link>
             
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaHome /> <span>{user ? "Enrolled Course":"All  Course"}</span>
                </button>
              
             
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaChalkboardTeacher /> <span>
                    {user ? "Change Password":"Category"}
                  </span>
                </button>
              
              
                <button className="flex items-center gap-2 w-full py-2 px-4 bg-[#b3e5fc] text-[#001f3f] rounded-xl">
                  <FaCog /> <span>Payment  method</span>
                </button>
           
              {
                !user ?(
               ""

                ):(
                   <button onClick={logoutHandler} className="flex items-center gap-2 w-full py-2 px-4 bg-red-500 text-[#001f3f] rounded-xl">
                  <FaUsers /> <span>logOut</span>
                </button>
                )
              }
              
             
            </nav>

            {/* Optional guest greeting or static section */}
           
          </div>
      

       
         
      </div>
    </div>
  );
};

export default Sidebar;
