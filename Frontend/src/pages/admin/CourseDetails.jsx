// /components/CourseDetails.jsx
import React from 'react';

const CourseDetails = ({ course }) => {
  if (!course) return <div className="text-center text-gray-600">Select a course to view details.</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-2"><strong>Instructor:</strong> {course.instructor}</p>
      <p className="text-gray-700 mb-2"><strong>Category:</strong> {course.category}</p>
      <p className="text-gray-700 mb-4"><strong>Description:</strong> {course.description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">👥 Enrolled Students</h2>
        <ul className="list-disc list-inside">
          {course.students.map(s => <li key={s.id}>{s.name}</li>)}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2"> Reviews</h2>
        <div className="space-y-3">
          {course.reviews.map(r => (
            <div key={r.id} className="border rounded p-3">
              <p className="font-semibold">{r.studentName} ({r.rating}/5)</p>
              <p className="text-gray-700">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;