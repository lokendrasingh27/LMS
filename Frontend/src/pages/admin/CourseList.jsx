// /components/CourseList.jsx
import React from 'react';

const CourseList = ({
  courses,
  onApprove,
  onReject,
  onEdit,
  onDelete,
  onSelect,
  selectedCourseId
}) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-[#00173D] font-bold mb-6">Course Management</h1>
      <div className="space-y-4">
        {courses.map(course => (
          <div
            key={course.id}
            className={`cursor-pointer bg-[#C2E8F8] rounded shadow p-4 flex flex-col md:flex-row justify-between items-start md:items-center border-2 ${
              selectedCourseId === course.id ? 'border-blue-600' : 'border-transparent'
            }`}
            onClick={() => onSelect(course.id)}
          >
            <div className="space-y-1">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-sm text-[#0A5F6F]">👨‍🏫 {course.instructor}</p>
              <p className="text-sm text-[#0A5F6F]">📂 {course.category}</p>
              <p className="text-sm text-[#0A5F6F]">📌 Status: {course.status}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
              {course.status === 'Pending' && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onApprove(course.id);
                    }}
                    className="bg-green-700 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Approve
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onReject(course.id);
                    }}
                    className="bg-yellow-600 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                  >
                    Reject
                  </button>
                </>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(course.id);
                }}
                className="bg-blue-800 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm('Are you sure you want to delete this course?')) {
                    onDelete(course.id);
                  }
                }}
                className="bg-red-700 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
