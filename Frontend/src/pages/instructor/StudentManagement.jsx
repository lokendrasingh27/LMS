import React, { useState } from "react";
import { Search, Edit, Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

  const StudentManagement=()=> {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      enrolledCourses: ["React Basics", "Node.js Advanced"],
      progress: 75,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Verma",
      email: "priya@example.com",
      enrolledCourses: ["Python for Data Science"],
      progress: 40,
      status: "Inactive",
    },
  ]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Student Management</h2>
        <div className="flex items-center border rounded px-2">
          <Search className="text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search student..."
            className="p-2 outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Courses</th>
              <th className="p-3">Progress</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.email}</td>
                <td className="p-3">{student.enrolledCourses.join(", ")}</td>
                <td className="p-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {student.progress}%
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 text-sm rounded-full ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="p-3 flex space-x-2">
                  <button className="p-1 text-blue-500 hover:bg-blue-100 rounded">
                    <Eye size={18} />
                  </button>
                  <button className="p-1 text-yellow-500 hover:bg-yellow-100 rounded">
                    <Edit size={18} />
                  </button>
                  <button className="p-1 text-red-500 hover:bg-red-100 rounded">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to='/instructor'>
      <button className="ml-[90vw] m-4 rounded-xl px-6 py-2 bg-red-500 text-white font-bold">Close</button>
      </Link>
    </div>
  );
}
export default StudentManagement