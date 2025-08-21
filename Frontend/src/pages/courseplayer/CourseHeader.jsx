// src/pages/courseplayer/CourseHeader.jsx
import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";

function CourseHeader({ title, progress, onResetProgress, onToggleSidebar }) {
  return (
    <header className="p-4 bg-[#E3F1F1] border-b border-gray-200 flex-shrink-0">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <a
          href="/dashboard" // This link should point to your dashboard route
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#006D77] rounded-lg hover:bg-[#005c63] transition-colors"
        >
          
          <span>Dashboard</span>
        </a>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

        <div className="flex items-center gap-4">
          
          <button
            onClick={onToggleSidebar}
            className="text-gray-600 hover-text-indigo-600 md:hidden"
            aria-label="Toggle sidebar"
          >
            <RxHamburgerMenu className="text-3xl" />
          </button>
        </div>
      </div>
      <div className="flex justify-end items-center gap-3 mt-2">
        <div className="w-48 h-2 bg-[#00173D] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#006D77]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium text-gray-600 w-25 text-right">
          {progress}% Complete
        </span>
      </div>
    </header>
  );
}

export default CourseHeader;  