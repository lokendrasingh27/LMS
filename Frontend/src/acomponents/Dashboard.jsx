// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [activities, setActivities] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setMetrics({
          users: 1500,
          instructors: 200,
          students: 1245,
          courses: 56,
        });

        setActivities({
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
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#E8F1F2] text-[#00173D] overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#00173D] p-6 shadow-lg flex-shrink-0 h-screen overflow-y-auto">
        <div className="text-2xl font-bold mb-10 text-[#C2E8F8]">Admin</div>
        <ul className="space-y-4">
          <SidebarItem label="Dashboard" to="/" />
          <SidebarItem label="Courses" to="/courses" />
          <SidebarItem label="Students" to="/students" />
          <SidebarItem label="Instructors" to="/instructors" />
          <SidebarItem label="Notifications" to="/notifications" />
          <SidebarItem label="Settings" to="/settings" />
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-8 bg-[#E8F1F2] overflow-y-auto h-screen">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-[#00173D]">Admin Dashboard</h1>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {!metrics ? (
            <p className="col-span-full text-center">Loading metrics...</p>
          ) : (
            <>
              <DashboardMetricCard title="Total Users" value={metrics.users} to="/users" />
              <DashboardMetricCard title="Instructors" value={metrics.instructors} to="/instructors" />
              <DashboardMetricCard title="Students" value={metrics.students} to="/students" />
              <DashboardMetricCard title="Total Courses" value={metrics.courses} to="/courses" />
            </>
          )}
        </div>

        {/* Quick Links */}
        <div className="bg-[#C2E8F8] p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4 text-[#00173D]">Quick Links</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/create-course"
              className="bg-[#00173D] text-white px-4 py-2 rounded hover:bg-[#0A5F6F] transition duration-200"
            >
              Add Course
            </Link>
            <Link
              to="/manage-users"
              className="bg-[#00173D] text-white px-4 py-2 rounded hover:bg-[#0A5F6F] transition duration-200"
            >
              Manage Users
            </Link>
            <Link
              to="/reports"
              className="bg-[#00173D] text-white px-4 py-2 rounded hover:bg-[#0A5F6F] transition duration-200"
            >
              View Reports
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#0A5F6F] p-6 rounded-lg border border-[#C2E8F8]">
          <h2 className="text-xl font-semibold mb-4 text-[#C2E8F8]">Recent Activities</h2>
          {!activities ? (
            <p className="text-[#C2E8F8]">Loading recent activity...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ActivityCard title="Course Approvals" items={activities.approvals} />
              <ActivityCard title="New User Registrations" items={activities.registrations} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Sidebar Item with Link
const SidebarItem = ({ label, to }) => (
  <li>
    <Link
      to={to}
      className="block p-3 rounded-lg hover:bg-[#C2E8F8] transition-colors duration-200 cursor-pointer text-[#E8F1F2] font-medium"
    >
      {label}
    </Link>
  </li>
);

// Metric Card wrapped with Link
const DashboardMetricCard = ({ title, value, to }) => (
  <Link
    to={to}
    className="block bg-[#C2E8F8] p-6 rounded-lg shadow-md text-[#00173D] hover:shadow-lg transition-shadow duration-200"
  >
    <h3 className="text-sm font-medium">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </Link>
);

// Activity Card
const ActivityCard = ({ title, items }) => (
  <div className="bg-[#0A5F6F] p-4 rounded-lg text-[#E8F1F2] border border-[#C2E8F8]">
    <h4 className="text-lg font-medium mb-2 text-[#C2E8F8]">{title}</h4>
    <ul className="list-disc list-inside space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-sm">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Dashboard;
