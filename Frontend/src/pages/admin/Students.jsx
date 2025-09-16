import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const navigate = useNavigate();

  // 🔄 Sample student data with course enrolled
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', course: 'React Basics' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', course: 'Node.js Advanced' },
    { id: 3, name: 'Michael Chen', email: 'michael@example.com', course: 'UI/UX Design' },
  ]);

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="p-8 md:p-12 bg-gray-100 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Student Management</h1>
        {/* <button
          onClick={() => navigate('/')}
          className="bg-[#006D77] text-white px-4 py-2 rounded hover:bg-[#033b41db] transition"
        >
          ← Back to Dashboard
        </button> */}
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Course</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{student.id}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{student.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{student.email}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{student.course}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="text-red-600 hover:text-red-800 font-medium transition duration-200"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500 italic">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;
