import React, { useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", email: "" });

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.email) return;

    const newId = students.length ? students[students.length - 1].id + 1 : 1;

    setStudents([...students, { id: newId, ...newStudent }]);
    setNewStudent({ name: "", email: "" });
  };

  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="p-6 md:p-10 bg-[#E8F1F2] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#00173D]">Student Management</h1>

      {/* Add New Student */}
      <div className="mb-6 bg-white p-4 rounded shadow-md max-w-md">
        <h2 className="text-xl font-semibold mb-2">Add New Student</h2>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full mb-2"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full mb-2"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
        />
        <button
          onClick={handleAddStudent}
          className="bg-[#0A5F6F] text-white px-4 py-2 rounded hover:bg-[#084e5b]"
        >
          Add Student
        </button>
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-[#00173D] text-white">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">
                <td className="py-2 px-4">{student.id}</td>
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.email}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
