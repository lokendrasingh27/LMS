// src/pages/courseplayer/CourseHeader.jsx
import React from 'react';

function CourseHeader({ title, progress, onResetProgress }) {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b border-gray-200 flex-shrink-0">
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-600 hidden md:block">{progress}% Complete</span>
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden hidden md:block">
          <div className="h-full bg-indigo-600" style={{ width: `${progress}%` }}></div>
        </div>
        <button
          onClick={onResetProgress}
          className="text-sm font-medium text-red-600 hover:text-red-800"
          title="Reset all course progress"
        >
          Reset Progress
        </button>
        <a href="#dashboard" className="text-sm font-medium text-gray-600 hover:text-indigo-600">
          Back to Dashboard
        </a>
      </div>
    </header>
  );
}

export default CourseHeader;