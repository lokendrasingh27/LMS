import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaUsers } from 'react-icons/fa6';
import { FaChalkboardTeacher, FaCog, FaHome } from 'react-icons/fa';

const InstructorDashboard = () => {
   const Navigate = useNavigate();
   
   
  return (
    <div className=" flex h-[100vh] overflow-hidden  bg-[#e3f1f1]  ">
         <Sidebar />
         
      {/* Header */}
   <div className="flex-1 p-6">
       <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#011638]">Instructor Dashboard</h1>
        <p className="text-[#011638]">Here’s what’s happening with your courses today.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {/* Card 1 */}
        <div className="bg-[#006D77] rounded-2xl shadow-md p-6 flex items-center space-x-4">
          <div className="text-white text-2xl">📘</div>
          <div>
            <p className="text-xl font-semibold text-white">8</p>
            <p className="text-white">Active Courses</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#006D77] rounded-2xl shadow-md p-6 flex items-center space-x-4">
          <div className="text-white text-2xl">👥</div>
          <div>
            <p className="text-xl font-semibold text-white">220</p>
            <p className="text-white">Total Enrollments</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#006D77] rounded-2xl shadow-md p-6 flex items-center space-x-4">
          <div className="text-white text-2xl">⭐</div>
          <div>
            <p className="text-xl font-semibold text-white">4.8</p>
            <p className="text-white">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-3 text-[#011638]">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
         <Link to='/instructor/create-course'>
          <button className="bg-[#011638] hover:bg-[#006D77] text-white px-4 py-2 rounded-2xl shadow">
            Create New Course
          </button>
         </Link>
          <Link to='/instructor/manage-student'>
          <button className="border bg-[#011638] hover:bg-[#006D77] text-white px-4 py-2 rounded-2xl shadow">
            Manage Students
          </button>
          </Link>
         <Link to='/instructor/review'>
          <button className="border bg-[#011638] hover:bg-[#006D77] text-white px-4 py-2 rounded-2xl shadow">
            View Reviews
          </button>
         </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold  text-[#011638]">Student List</h2>
         <div className="bg-white rounded-2xl shadow divide-y  overflow-hidden    ">
          <div className='w-full flex justify-between mb-4'>
            <li className="p-4 text-[#011638]">Course Name</li>
          <li className="p-4 pl-[-12 ] text-[#011638]">Student Name</li>
          <li className="p-4 text-[#011638]">Student Email</li>
          </div>
       
        <ul className="StudentList bg-white  h-50 shadow divide-y overflow-hidden overflow-y-auto">
          <div className='w-full mb-4 px-4 flex justify-between'>
            <li  className=" w-60 h-fit  text-[#011638]"> web development lorem </li>
            <li className=" w-40 text-[#011638]"> Lokendra singh  </li>
            <li className="w-60 h-fit text-[#011638]"> singhlokendra9343@gmail.com  Lorem ipsum dolor sit amet consectetur. </li>
          </div>
           <div className='w-full mb-4 px-4 flex justify-between'>
            <li  className=" w-60 h-fit  text-[#011638]"> web development lorem </li>
            <li className=" w-40 text-[#011638]"> Lokendra singh  </li>
            <li className="w-60 h-fit text-[#011638]"> singhlokendra9343@gmail.com  Lorem ipsum dolor sit amet consectetur. </li>
          </div>
            <div className='w-full mb-4 px-4 flex justify-between'>
            <li  className=" w-60 h-fit  text-[#011638]"> web development lorem </li>
            <li className=" w-40 text-[#011638]"> Lokendra singh  </li>
            <li className="w-60 h-fit text-[#011638]"> singhlokendra9343@gmail.com  Lorem ipsum dolor sit amet consectetur. </li>
          </div>
            <div className='w-full mb-4 px-4 flex justify-between'>
            <li  className=" w-60 h-fit  text-[#011638]"> web development lorem </li>
            <li className=" w-40 text-[#011638]"> Lokendra singh  </li>
            <li className="w-60 h-fit text-[#011638]"> singhlokendra9343@gmail.com  Lorem ipsum dolor sit amet consectetur. </li>
          </div>
            <div className='w-full mb-4 px-4 flex justify-between'>
            <li  className=" w-60 h-fit  text-[#011638]"> web development lorem </li>
            <li className=" w-40 text-[#011638]"> Lokendra singh  </li>
            <li className="w-60 h-fit text-[#011638]"> singhlokendra9343@gmail.com  Lorem ipsum dolor sit amet consectetur. </li>
          </div>
            <div className='w-full mb-4 px-4 flex justify-between'>
            <li  className=" w-60 h-fit  text-[#011638]"> web development lorem </li>
            <li className=" w-40 text-[#011638]"> Lokendra singh  </li>
            <li className="w-60 h-fit text-[#011638]"> singhlokendra9343@gmail.com  Lorem ipsum dolor sit amet consectetur. </li>
          </div>
          

         
          
        </ul>
        </div>
      </div>
   </div>
    </div>
  );
};

export default InstructorDashboard;
