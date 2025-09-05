import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const [metrics] = useState({
    users: 1500,
    instructors: 200,
    students: 1245,
    courses: 56,
  });

  const [activities] = useState({
    approvals: [
      'Course approved: React Fundamentals',
      'Course approved: UX/UI Design',
      'Course approved: Machine Learning Basics',
    ],
    registrations: [
      'New user registered: John Doe',
      'New user registered: Jane Smith',
      'New user registered: Michael Chen',
    ],
  });

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div className="w-64 h-screen fixed top-0 left-0 bg-white shadow-xl z-10">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8 md:p-12 overflow-y-auto h-screen">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">Admin Dashboard</h1>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <DashboardMetricCard title="Total Users" value={metrics.users} to="/users" icon="👥" color="text-indigo-600 bg-indigo-100" />
          <DashboardMetricCard title="Instructors" value={metrics.instructors} to="/instructors" icon="👨‍🏫" color="text-green-600 bg-green-100" />
          <DashboardMetricCard title="Students" value={metrics.students} to="/students" icon="🎓" color="text-blue-600 bg-blue-100" />
          <DashboardMetricCard title="Total Courses" value={metrics.courses} to="/courses" icon="📚" color="text-violet-600 bg-violet-100" />
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-10 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/create-course"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition duration-300 font-semibold shadow-md flex items-center gap-2"
            >
              <span className="text-xl">➕</span> Add Course
            </Link>
            <Link
              to="/manage-users"
              className="bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300 font-semibold shadow-md flex items-center gap-2"
            >
              <span className="text-xl">⚙️</span> Manage Users
            </Link>
            <Link
              to="/reports"
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition duration-300 font-semibold shadow-md flex items-center gap-2"
            >
              <span className="text-xl">📊</span> View Reports
            </Link>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-slate-800">Recent Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ActivityCard title="Course Approvals" items={activities.approvals} icon="✅" />
            <ActivityCard title="New User Registrations" items={activities.registrations} icon="✨" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Metric Card with dynamic colors
const DashboardMetricCard = ({ title, value, to, icon, color }) => (
  <Link
    to={to}
    className="block bg-white p-6 rounded-2xl shadow-md text-gray-800 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 border border-gray-200"
  >
    <div className="flex items-center gap-4">
      <div className={`text-4xl p-2 rounded-full ${color}`}>{icon}</div>
      <div>
        <h3 className="text-lg font-medium text-gray-500">{title}</h3>
        <p className="text-4xl font-bold mt-1 text-slate-800">{value}</p>
      </div>
    </div>
  </Link>
);

// Activity Card
const ActivityCard = ({ title, items, icon }) => (
  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
    <h4 className="text-lg font-bold mb-3 text-slate-700 flex items-center gap-2">
      <span className="text-xl">{icon}</span> {title}
    </h4>
    <ul className="list-none space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-sm text-gray-600 flex items-center">
          <span className="mr-2 text-indigo-400">➡️</span> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Dashboard;
