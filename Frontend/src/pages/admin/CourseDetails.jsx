import React from 'react';

const CourseDetails = ({ course }) => {
  if (!course) {
    return <p className="text-gray-500 italic">Select a course to see details</p>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <h3 className="text-2xl font-bold text-[#00173D] mb-4">{course.title}</h3>
      <p className="mb-2"><strong>Instructor:</strong> {course.instructor}</p>
      <p className="mb-2"><strong>Category:</strong> {course.category}</p>
      <p className="mb-4"><strong>Status:</strong> {course.status || 'Pending'}</p>
      <p className="text-gray-700">{course.description || "No description available."}</p>
    </div>
  );
};

export default CourseDetails;
