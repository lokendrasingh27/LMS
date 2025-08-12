import React, { useState } from "react";
import CourseCreate from "./CreateCourse";
import CourseEdit from "./CourseEdit";
import { FaChalkboardTeacher, FaGraduationCap, FaHome, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function CourseList() {
  const [courses, setCourses] = useState([
    { id: 1, title: "React Basics", description: "Intro to React" },
    { id: 2, title: "JavaScript Advanced", description: "Deep dive into JS" },
  ]);

  const [isCreating, setIsCreating] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const handleCreateCourse = (newCourse) => {
    setCourses([...courses, { id: Date.now(), ...newCourse }]);
    setIsCreating(false);
  };

  const handleUpdateCourse = (updatedCourse) => {
    setCourses(
      courses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
    setEditingCourse(null);
  };

  return (
    <>
    <div className="flex">

   <Sidebar />
    
    <div className="p-6 w-[80vw] ">
          
      <h1 className="text-2xl font-bold mb-4">Course List</h1>

      <button
        onClick={() => setIsCreating(true)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Course
      </button>

      <div className="space-y-4 ">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-4 border rounded flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
            <button
              onClick={() => setEditingCourse(course)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {isCreating && (
        <CourseCreate
          onCreate={handleCreateCourse}
          onCancel={() => setIsCreating(false)}
        />
      )}

      {editingCourse && (
        <CourseEdit
          course={editingCourse}
          onUpdate={handleUpdateCourse}
          onCancel={() => setEditingCourse(null)}
        />
      )}
    </div> </div>
  </>);
}
