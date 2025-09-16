import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import for navigation

const dummyUsers = [
  { id: 1, name: 'Alice Johnson', role: 'Instructor', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', role: 'Student', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', role: 'Student', email: 'charlie@example.com' },
];

const UserManagement = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate

  const [users, setUsers] = useState(dummyUsers);

  const handleEdit = (id) => {
    const user = users.find((u) => u.id === id);
    const newName = prompt('Enter new name:', user.name);
    if (!newName) return;

    const newEmail = prompt('Enter new email:', user.email);
    if (!newEmail) return;

    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, name: newName, email: newEmail } : u
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="p-6  mx-auto">
      
      {/* ✅ Title + Back button in same row */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#15315B]">User Management</h1>
        {/* <button
          onClick={() => navigate('/')}
          className="bg-[#006D77] text-white px-4 py-2 rounded hover:bg-[#033b41db] transition"
        >
          ← Back to Dashboard
        </button> */}
      </div>

      <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
        <thead className="bg-[#006D77] text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, role, email }) => (
            <tr key={id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-3">{name}</td>
              <td className="p-3">{role}</td>
              <td className="p-3">{email}</td>
              <td className="p-3 flex gap-2 justify-center">
                <button
                  onClick={() => handleEdit(id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
