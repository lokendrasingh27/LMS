// /pages/admin/CourseAnalytics.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy data for beginner-friendly demo
const dummyCourses = [
  {
    id: 1,
    title: 'React Basics',
    status: 'Approved',
    students: [{ id: 1 }, { id: 2 }],
    reviews: [{ rating: 4 }, { rating: 5 }]
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    status: 'Pending',
    students: [{ id: 3 }],
    reviews: [{ rating: 3 }]
  },
  {
    id: 3,
    title: 'CSS Mastery',
    status: 'Approved',
    students: [],
    reviews: []
  }
];

const CourseAnalytics = () => {
  const navigate = useNavigate();
  const totalCourses = dummyCourses.length;
  const approved = dummyCourses.filter(c => c.status === 'Approved').length;
  const pending = dummyCourses.filter(c => c.status === 'Pending').length;
  const rejected = dummyCourses.filter(c => c.status === 'Rejected').length;

  const mostPopular = dummyCourses.reduce((max, course) =>
    course.students.length > max.students.length ? course : max
  , dummyCourses[0]);

  const allRatings = dummyCourses.flatMap(course => course.reviews.map(r => r.rating));
  const averageRating = allRatings.length
    ? (allRatings.reduce((sum, r) => sum + r, 0) / allRatings.length).toFixed(1)
    : 'N/A';

  return (
    <div className="p-8 bg-[#E3F1F1] min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#15315B] mb-6">📊 Course Analytics</h1>
        <button
          onClick={() => navigate('/admindemo')}
          className="bg-[#006D77] text-white px-4 py-2 rounded hover:bg-[#033b41db] transition"
        >
          ← Back to Dashboard
        </button>
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-xl font-semibold text-gray-700">Total Courses</p>
          <p className="text-3xl text-[#006D77] font-bold">{totalCourses}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-xl font-semibold text-gray-700">Approved</p>
          <p className="text-3xl text-green-600 font-bold">{approved}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-xl font-semibold text-gray-700">Pending</p>
          <p className="text-3xl text-yellow-600 font-bold">{pending}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-xl font-semibold text-gray-700">Rejected</p>
          <p className="text-3xl text-red-600 font-bold">{rejected}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2 text-[#15315B]">🔥 Most Popular Course</h2>
          <p className="text-lg text-gray-700">
            {mostPopular?.title} ({mostPopular?.students.length} students)
          </p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-2 text-[#15315B]">⭐ Average Rating</h2>
          <p className="text-lg text-gray-700">{averageRating} / 5</p>
        </div>
      </div>
    </div>
  );
};

export default CourseAnalytics;
