import React, { useState, useEffect } from 'react';
import axiosInstance from '@/api/axiosInstance';

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [newInstructor, setNewInstructor] = useState({
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

  // Fetch instructors on mount
  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const res = await axiosInstance.get('/instructors');
        if (res.data.success) {
          setInstructors(res.data.instructors);
        } else {
          console.error('Failed to fetch instructors:', res.data.message);
        }
      } catch (error) {
        console.error('Error fetching instructors:', error);
      }
    };
    fetchInstructors();
  }, []);

  // Add new instructor
  const handleAddInstructor = async (e) => {
    e.preventDefault();
    const { name, email, courseTitle } = newInstructor;

    if (!name.trim() || !email.trim() || !courseTitle.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const res = await axiosInstance.post('/instructors', newInstructor);
      if (res.data.success) {
        setInstructors([res.data.instructor, ...instructors]);
        setNewInstructor({ name: '', email: '', courseTitle: '' });
      } else {
        alert('Failed to add instructor');
      }
    } catch (error) {
      console.error('Error adding instructor:', error);
      alert('Error adding instructor. Check console for details.');
    }
  };

  // Delete instructor
  const handleDelete = (id) => {
    // Optionally, call backend to delete instructor here
    setInstructors((prev) => prev.filter((inst) => inst._id !== id));
  };

  // Start editing an instructor
  const handleEditClick = (inst) => {
    setEditId(inst._id);
    setEditData({
      name: inst.name,
      email: inst.email,
      courseTitle: inst.courseTitle,
    });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditId(null);
    setEditData({ name: '', email: '', courseTitle: '' });
  };

  // Save edited instructor
  const handleSaveEdit = async (id) => {
    const { name, email, courseTitle } = editData;

    if (!name.trim() || !email.trim() || !courseTitle.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const res = await axiosInstance.put(`/instructors/${id}`, editData);
      if (res.data.success) {
        setInstructors((prev) =>
          prev.map((inst) =>
            inst._id === id ? { ...inst, name, email, courseTitle } : inst
          )
        );
        setEditId(null);
        setEditData({ name: '', email: '', courseTitle: '' });
      } else {
        alert('Failed to update instructor');
      }
    } catch (error) {
      console.error('Error updating instructor:', error);
      alert('Error updating instructor. Check console for details.');
    }
  };

  return (
    <div className="p-8 md:p-12 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Instructor Management</h1>
      </div>

      {/* Add Instructor Form */}
      <form
        onSubmit={handleAddInstructor}
        className="mb-10 bg-white p-6 rounded-xl shadow border border-gray-200 space-y-4"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Add New Instructor</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={newInstructor.name}
            onChange={(e) => setNewInstructor({ ...newInstructor, name: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newInstructor.email}
            onChange={(e) => setNewInstructor({ ...newInstructor, email: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Course Title"
            value={newInstructor.courseTitle}
            onChange={(e) => setNewInstructor({ ...newInstructor, courseTitle: e.target.value })}
            className="p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-[#006D77] text-white rounded hover:bg-[#024c52] transition"
        >
          Add Instructor
        </button>
      </form>

      {/* Instructor Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {instructors.length > 0 ? (
                instructors.map((inst, index) => (
                  <tr
                    key={inst._id || index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{index + 1}</td>

                    {editId === inst._id ? (
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
                            onClick={() => handleSaveEdit(inst._id)}
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
                        <td className="py-4 px-6 text-sm text-gray-700">{inst.name}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{inst.email}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{inst.courseTitle || 'N/A'}</td>
                        <td className="py-4 px-6">
                          <button
                            onClick={() => handleEditClick(inst)}
                            className="text-blue-600 hover:text-blue-800 font-medium mr-4"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(inst._id)}
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
                    No instructors found.
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

export default Instructors;
