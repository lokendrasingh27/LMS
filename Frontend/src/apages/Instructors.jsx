import React, { useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@edu.com" },
    { id: 2, name: "Bob Williams", email: "bob@edu.com" },
  ]);

  const [newInstructor, setNewInstructor] = useState({ name: "", email: "" });

  const handleAddInstructor = () => {
    if (!newInstructor.name || !newInstructor.email) return;

    const newId = instructors.length ? instructors[instructors.length - 1].id + 1 : 1;
    setInstructors([...instructors, { id: newId, ...newInstructor }]);
    setNewInstructor({ name: "", email: "" });
  };

  const handleDelete = (id) => {
    setInstructors(instructors.filter((inst) => inst.id !== id));
  };

  return (
    <div className="p-6 md:p-10 bg-[#E8F1F2] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#00173D]">Instructor Management</h1>

      {/* Add New Instructor */}
      <div className="mb-6 bg-white p-4 rounded shadow-md max-w-md">
        <h2 className="text-xl font-semibold mb-2">Add New Instructor</h2>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-full mb-2"
          value={newInstructor.name}
          onChange={(e) => setNewInstructor({ ...newInstructor, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-full mb-2"
          value={newInstructor.email}
          onChange={(e) => setNewInstructor({ ...newInstructor, email: e.target.value })}
        />
        <button
          onClick={handleAddInstructor}
          className="bg-[#0A5F6F] text-white px-4 py-2 rounded hover:bg-[#084e5b]"
        >
          Add Instructor
        </button>
      </div>

      {/* Instructor Table */}
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
            {instructors.map((inst) => (
              <tr key={inst.id} className="border-b">
                <td className="py-2 px-4">{inst.id}</td>
                <td className="py-2 px-4">{inst.name}</td>
                <td className="py-2 px-4">{inst.email}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(inst.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {instructors.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No instructors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
