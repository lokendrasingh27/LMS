import React, { useState } from 'react';

// Dummy users data (replace with real API/data later)
const dummyUsers = [
  { id: 1, name: 'Alice Johnson', role: 'Instructor', email: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', role: 'Student', email: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', role: 'Student', email: 'charlie@example.com' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(dummyUsers);

  // Edit user - simple prompt for new name and email
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

  // Delete user from list
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers((prev) => prev.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#15315B]">User Management</h1>
      <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
        <thead className="bg-[#006D77] text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3">Actions</th>
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
