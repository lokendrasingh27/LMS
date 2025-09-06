import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBookOpen,
  FaUsers,
  FaClipboardList,
  FaChartLine,
  FaUserPlus,
  FaComments,
  FaDollarSign,
} from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <div className="flex h-screen bg-[#E3F1F1]">
        {/* Sidebar fixed with original width (assuming w-64) */}
        <div className="fixed top-0 left-0 h-screen w-64 ">
          <Sidebar />
        </div>

        {/* Main content with margin-left equal to sidebar width */}
        <div className="flex-1 ml-64 overflow-y-auto p-6">
          <main className="p-8 space-y-8 max-w-7xl mx-auto w-full">
            {/* Welcome Section */}
            <section className="bg-gradient-to-r from-[#15315B] to-[#1A406E] text-white rounded-2xl p-8 shadow-lg">
              <h1 className="text-3xl font-extrabold tracking-wide">
                Welcome back, {user?.name || 'Admin'}!
              </h1>
            </section>

            {/* Quick Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Instructors', count: 3, icon: <FaChalkboardTeacher size={30} />, link: '/admin/instructors' },
                { label: 'Students', count: 12, icon: <FaUserGraduate size={30} />, link: '/admin/students' },
                { label: 'Total Courses', count: 5, icon: <FaBookOpen size={30} />, link: '/admin/courses' },
                { label: 'Total Users', count: 20, icon: <FaUsers size={30} />, link: '/admin/users' },
              ].map(({ label, count, icon, link }) => (
                <div
                  key={label}
                  onClick={() => link && handleNavigate(link)}
                  className={`cursor-pointer bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-6 space-y-3
                    hover:shadow-xl transition-shadow duration-300
                    ${link ? 'hover:bg-[#17838d98] hover:text-white' : ''}
                  `}
                >
                  <div className="text-[#006D77] group-hover:text-white">{icon}</div>
                  <h2 className="text-4xl font-extrabold">{count}</h2>
                  <p className="text-lg font-semibold">{label}</p>
                </div>
              ))}
            </section>

            {/* Course Analytics */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <FaChartLine className="text-[#006D77]" />
                <span>Course Analytics</span>
              </h2>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <p className="text-gray-700 mb-4">Here’s a summary of course performance metrics:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>
                    Average Course Completion Rate: <strong>72%</strong>
                  </li>
                  <li>
                    Average Student Engagement Time: <strong>4.5 hours/week</strong>
                  </li>
                  <li>
                    Top Performing Course: <strong>React for Beginners</strong>
                  </li>
                  <li>
                    Most Enrolled Course: <strong>Advanced JavaScript</strong>
                  </li>
                </ul>
              </div>
            </section>

            {/* Assignment Results */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <FaClipboardList className="text-[#006D77]" />
                <span>Assignment Results</span>
              </h2>
              <div className="bg-white rounded-2xl shadow-md p-6 overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#006D77] text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Student</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Assignment</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Score</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { student: 'John Doe', assignment: 'Assignment 1', score: '85%', status: 'Passed' },
                      { student: 'Jane Smith', assignment: 'Assignment 2', score: '78%', status: 'Passed' },
                      { student: 'Mark Lee', assignment: 'Assignment 1', score: '65%', status: 'Passed' },
                      { student: 'Emily Davis', assignment: 'Assignment 2', score: '50%', status: 'Failed' },
                    ].map(({ student, assignment, score, status }, idx) => (
                      <tr key={idx} className="even:bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                        <td className="border border-gray-300 px-4 py-2">{student}</td>
                        <td className="border border-gray-300 px-4 py-2">{assignment}</td>
                        <td className="border border-gray-300 px-4 py-2">{score}</td>
                        <td
                          className={`border border-gray-300 px-4 py-2 font-semibold ${
                            status === 'Passed' ? 'text-green-600' : 'text-red-600'
                          }`}
                        >
                          {status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Enrollment Management */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <FaUserPlus className="text-[#006D77]" />
                <span>Enrollment Management</span>
              </h2>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <p className="text-gray-700 mb-4">Manage and track student enrollments.</p>
                <button
                  onClick={() => handleNavigate('/admin/enrollments')}
                  className="bg-[#006D77] hover:bg-[#00A3B7] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition duration-300"
                >
                  Go to Enrollment Management
                </button>
              </div>
            </section>

            {/* Communication Tools */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <FaComments className="text-[#006D77]" />
                <span>Communication Tools</span>
              </h2>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <p className="text-gray-700 mb-4">Send announcements, notifications, or messages to users.</p>
                <button
                  onClick={() => handleNavigate('/admin/communications')}
                  className="bg-[#006D77] hover:bg-[#00A3B7] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition duration-300"
                >
                  Manage Communications
                </button>
              </div>
            </section>

            {/* Financial Management */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                <FaDollarSign className="text-[#006D77]" />
                <span>Financial Management</span>
              </h2>
              <div className="bg-white rounded-2xl shadow-md p-6">
                <p className="text-gray-700 mb-4">View payment transactions, pricing plans, and financial reports.</p>
                <button
                  onClick={() => handleNavigate('/admin/financials')}
                  className="bg-[#006D77] hover:bg-[#00A3B7] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition duration-300"
                >
                  Go to Financial Management
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
