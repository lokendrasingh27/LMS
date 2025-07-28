import React from 'react';
import Sidebar from '../components/Sidebar';

const InstructorDashboard = () => {
  return (
    <div className=" flex min-h-screen bg-[#e3f1f1] ">
         <Sidebar/>
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
          <button className="bg-[#011638] hover:bg-[#02204d] text-white px-4 py-2 rounded-2xl shadow">
            Create New Course
          </button>
          <button className="border border-[#011638] text-[#011638] px-4 py-2 rounded-2xl shadow">
            Manage Students
          </button>
          <button className="border border-[#011638] text-[#011638] px-4 py-2 rounded-2xl shadow">
            View Reviews
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold mb-3 text-[#011638]">Recent Activity</h2>
        <ul className="bg-white rounded-2xl shadow divide-y">
          <li className="p-4 text-[#011638]">📝 New enrollment in <strong>React Basics</strong></li>
          <li className="p-4 text-[#011638]">⭐ New review added for <strong>Node.js Masterclass</strong></li>
          <li className="p-4 text-[#011638]">📤 Course <strong>UX Design 101</strong> published</li>
        </ul>
      </div>
   </div>
    </div>
  );
};

export default InstructorDashboard;
