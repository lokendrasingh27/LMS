import React, { useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@edu.com",
      dp: "https://i.pravatar.cc/100?img=1", // Sample avatar
    },
    {
      id: 2,
      name: "Bob Williams",
      email: "bob@edu.com",
      dp: "https://i.pravatar.cc/100?img=2",
    },
  ]);

  const handleDelete = (id) => {
    setInstructors(instructors.filter((inst) => inst.id !== id));
  };

  return (
    <div className="p-6 md:p-10 bg-[#E8F1F2] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#00173D]">Instructor Management</h1>

<<<<<<< Updated upstream
    

=======
>>>>>>> Stashed changes
      {/* Instructor Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-[#00173D] text-white">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Photo</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((inst) => (
              <tr key={inst.id} className="border-b">
                <td className="py-2 px-4">{inst.id}</td>
                <td className="py-2 px-4">
                  <img
                    src={inst.dp}
                    alt={inst.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
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
                <td colSpan="5" className="text-center py-4 text-gray-500">
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
