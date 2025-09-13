import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Instructors = () => {
  const navigate = useNavigate();
  const [instructors, setInstructors] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@edu.com',
      dp: 'https://i.pravatar.cc/100?img=1',
    },
    {
      id: 2,
      name: 'Bob Williams',
      email: 'bob@edu.com',
      dp: 'https://i.pravatar.cc/100?img=2',
    },
    {
      id: 3,
      name: 'Charlie Davis',
      email: 'charlie@edu.com',
      dp: 'https://i.pravatar.cc/100?img=3',
    },
  ]);

  const handleDelete = (id) => {
    setInstructors(instructors.filter((inst) => inst.id !== id));
  };

  return (
    <div className="p-8 md:p-12 bg-gray-100 min-h-screen">
      
      {/* Header and Back Button aligned */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Instructor Management</h1>
        <button
          onClick={() => navigate('/admindemo')}
          className="bg-[#006D77] text-white px-4 py-2 rounded hover:bg-[#033b41db] transition"
        >
          ← Back to Dashboard
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">ID</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Photo</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
                <th className="py-4 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {instructors.length > 0 ? (
                instructors.map((inst) => (
                  <tr key={inst.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-4 px-6 text-sm font-medium text-gray-900">{inst.id}</td>
                    <td className="py-4 px-6">
                      <img
                        src={inst.dp}
                        alt={inst.name}
                        className="w-10 h-10 rounded-full object-cover shadow-sm"
                      />
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-700">{inst.name}</td>
                    <td className="py-4 px-6 text-sm text-gray-700">{inst.email}</td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handleDelete(inst.id)}
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
