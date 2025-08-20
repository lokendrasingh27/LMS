import React from 'react';

const CourseLayout = ({ weeks }) => (
  <div className="bg-white border-l-4 border-[#002147] p-6 rounded shadow mb-6">
    <h2 className="text-xl font-semibold text-[#002147] mb-4">Course Layout</h2>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {weeks.map((week, index) => (
        <li key={index}>{week}</li>
      ))}
    </ul>
  </div>
);

export default CourseLayout;
