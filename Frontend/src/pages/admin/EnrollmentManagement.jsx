import React from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy course data
const dummyCourses = [
  {
    id: 1,
    title: 'React Basics',
    students: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]
  },
  {
    id: 2,
    title: 'JavaScript Essentials',
    students: [
      { id: 3, name: 'Charlie' }
    ]
  },
  {
    id: 3,
    title: 'CSS Mastery',
    students: []
  }
];

const EnrollmentManagement = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = React.useState(dummyCourses);

  const handleRemoveStudent = (courseId, studentId) => {
    const updatedCourses = courses.map(course => {
      if (course.id === courseId) {
        return {
          ...course,
          students: course.students.filter(student => student.id !== studentId)
        };
      }
      return course;
    });

    setCourses(updatedCourses);
  };

  return (
    <div className="p-8 bg-[#E3F1F1] min-h-screen">
       <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#15315B]">Enrollment Management</h1>
        <button
          onClick={() => navigate('/')}
          className="bg-[#006D77] text-white px-4 py-2 rounded hover:bg-[#033b41db] transition"
        >
          ← Back to Dashboard
        </button>
      </div>
      {/* <h1 className="text-3xl font-bold mb-6 text-[#15315B]">📋 Enrollment Management</h1> */}

      {courses.map(course => (
        <div
          key={course.id}
          className="mb-6 bg-white p-6 rounded-xl shadow"
        >
          <h2 className="text-2xl font-semibold text-[#006D77] mb-3">
            {course.title} ({course.students.length} enrolled)
          </h2>

          {course.students.length > 0 ? (
            <ul className="space-y-2">
              {course.students.map(student => (
                <li
                  key={student.id}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded border"
                >
                  <span className="text-gray-700">{student.name}</span>
                  <button
                    onClick={() => handleRemoveStudent(course.id, student.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No students enrolled in this course.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default EnrollmentManagement;
