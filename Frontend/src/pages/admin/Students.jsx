import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '@/api/axiosInstance';

const Students = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    courseTitle: '',
  });

  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    email: '',
    courseTitle: '',
  });

  // Fetch students on mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axiosInstance.get('/students');
        if (res.data.success) {
          setStudents(res.data.students);
        } else {
          console.error('Failed to fetch students:', res.data.message);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  // Add new student
  const handleAddStudent = async (e) => {
    e.preventDefault();
    const { name, email, courseTitle } = newStudent;

    if (!name.trim() || !email.trim() || !courseTitle.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const res = await axiosInstance.post('/students', newStudent);
      if (res.data.success) {
        setStudents([res.data.student, ...students]);
        setNewStudent({ name: '', email: '', courseTitle: '' });
      } else {
        alert('Failed to add student');
      }
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Error adding student. Check console for details.');
    }
  };

  // Delete student
  const handleDelete = (id) => {
    // Optional: Call backend to delete
    setStudents((prev) => prev.filter((student) => student._id !== id));
  };

  // Start editing a student
  const handleEditClick = (student) => {
    setEditId(student._id);
    setEditData({
      name: student.name,
      email: student.email,
      courseTitle: student.courseTitle,
    });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditId(null);
    setEditData({ name: '', email: '', courseTitle: '' });
  };

  // Save edited student
  const handleSaveEdit = async (id) => {
    const { name, email, courseTitle } = editData;

    if (!name.trim() || !email.trim() || !courseTitle.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const res = await axiosInstance.put(`/students/${id}`, editData);
      if (res.data.success) {
        setStudents((prev) =>
          prev.map((student) =>
            student._id === id ? { ...student, name, email, courseTitle } : student
          )
        );
        setEditId(null);
        setEditData({ name: '', email: '', courseTitle: '' });
      } else {
        alert('Failed to update student');
      }
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Error updating student. Check console for details.');
    }
  };

  return (
    <div className="p-8 md:p-12 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Student Management</h1>
      </div>

      {/* Add Student Form */}
      <form
        onSubmit={handleAddStudent}
        className="mb-10 bg-white p-6 rounded-xl shadow border border-gray-200 space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Add New Student</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Course Title"
            value={newStudent.courseTitle}
            onChange={(e) => setNewStudent({ ...newStudent, courseTitle: e.target.value })}
            className="p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-[#006D77] text-white rounded hover:bg-[#024c52] transition"
        >
          Add Student
        </button>
      </form>

      {/* Student Table */}
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
                students.map((student, index) => (
                  <tr key={student._id || index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{index + 1}</td>

                    {editId === student._id ? (
                      <>
                        <td className="py-4 px-6 text-sm text-gray-700">
                          <input
                            type="text"
                            value={editData.name}
                            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                            className="p-1 border rounded w-full"
                          />
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-700">
                          <input
                            type="email"
                            value={editData.email}
                            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                            className="p-1 border rounded w-full"
                          />
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-700">
                          <input
                            type="text"
                            value={editData.courseTitle}
                            onChange={(e) => setEditData({ ...editData, courseTitle: e.target.value })}
                            className="p-1 border rounded w-full"
                          />
                        </td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => handleSaveEdit(student._id)}
                            className="text-green-600 hover:text-green-800 font-medium mr-4"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="text-gray-600 hover:text-gray-800 font-medium"
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="py-4 px-6 text-sm text-gray-700">{student.name}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{student.email}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{student.courseTitle || 'N/A'}</td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => handleEditClick(student)}
                            className="text-blue-600 hover:text-blue-800 font-medium mr-4"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(student._id)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    )}
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
