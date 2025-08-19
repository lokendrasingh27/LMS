// src/pages/courseplayer/CourseHeader.jsx
import React from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';

function CourseHeader({ title, progress, onResetProgress, onToggleSidebar }) {
  return (
    <header className="p-4 bg-white border-b border-gray-200 flex-shrink-0">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        
        <div className="flex items-center gap-4">
          <a 
            href="#dashboard" 
            className="text-sm font-medium text-gray-600 hover-text-indigo-600 hidden md:block"
          >
            Back to Dashboard
          </a>
          <button 
            onClick={onToggleSidebar} 
            className="text-gray-600 hover-text-indigo-600 md:hidden"
            aria-label="Toggle sidebar"
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </div>
      </div>
      <div className="flex justify-start i  tems-center gap-3 mt-2">
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-600" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="text-sm font-medium text-gray-600 w-25 text-right">{progress}% Complete</span>
      </div>
    </header>
  );
}

export default CourseHeader;