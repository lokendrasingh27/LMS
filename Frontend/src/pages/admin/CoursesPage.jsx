import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🔁 Required for navigation
import { courses as dummyCourses } from "./Dummydata";
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';

const CoursesPage = () => {
  const navigate = useNavigate(); // 🔁 Hook for redirection
  const [courses, setCourses] = useState(dummyCourses);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const handleApprove = (id) => {
    setCourses(prev =>
      prev.map(course => course.id === id ? { ...course, status: 'Approved' } : course)
    );
  };

  const handleReject = (id) => {
    setCourses(prev =>
      prev.map(course => course.id === id ? { ...course, status: 'Rejected' } : course)
    );
  };

  const handleEdit = (id) => {
    const newTitle = prompt('Enter new course title:');
    if (!newTitle) return;

    const newInstructor = prompt('Enter new instructor name:');
    if (!newInstructor) return;

    const newCategory = prompt('Enter new category:');
    if (!newCategory) return;

    setCourses(prev =>
      prev.map(course =>
        course.id === id
          ? { ...course, title: newTitle, instructor: newInstructor, category: newCategory }
          : course
      )
    );
  };

  const handleDelete = (id) => {
    setCourses(prev => prev.filter(course => course.id !== id));
    if (selectedCourseId === id) {
      setSelectedCourseId(null); // Deselect if deleted
    }
  };

  const selectedCourse = courses.find(course => course.id === selectedCourseId);

  return (
    <div className="min-h-screen bg-[#E8F1F2] p-4">

      {/* 🔁 Header with back button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl text-[#00173D] font-bold">Course Details</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-[#006D77] text-white px-4 py-2 rounded hover:bg-[#033b41db] transition"
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Course List and Details */}
      <CourseList
        courses={courses}
        onApprove={handleApprove}
        onReject={handleReject}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSelect={setSelectedCourseId}
        selectedCourseId={selectedCourseId}
      />

      <div className="mt-10 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <CourseDetails course={selectedCourse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
