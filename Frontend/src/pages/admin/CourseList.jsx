import React from 'react';

const CourseList = ({
  courses,
  onApprove,
  onReject,
  onEdit,
  onDelete,
  onSelect,
  selectedCourseId,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map(course => (
        <div
          key={course.id}
          className={`border rounded-lg p-4 cursor-pointer shadow-sm ${
            selectedCourseId === course.id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'
          }`}
          onClick={() => onSelect(course.id)}
        >
          {/* Thumbnail placeholder */}
          <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
            <img
              src={course.thumbnail || "https://via.placeholder.com/400x240.png?text=Course+Thumbnail"}
              alt={course.title}
              className="object-cover w-full h-full rounded-md"
            />
          </div>

          <h3 className="text-xl font-semibold text-[#00173D] mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-1"><strong>Instructor:</strong> {course.instructor}</p>
          <p className="text-gray-600 mb-2"><strong>Category:</strong> {course.category}</p>
          <p className="text-sm font-medium mb-4">
            Status: <span className={`font-bold ${course.status === 'Approved' ? 'text-green-600' : course.status === 'Rejected' ? 'text-red-600' : 'text-gray-600'}`}>{course.status || 'Pending'}</span>
          </p>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onApprove(course.id);
              }}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
            >
              Approve
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onReject(course.id);
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Reject
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(course.id);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(course.id);
              }}
              className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
