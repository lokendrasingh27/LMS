// src/pages/courseplayer/CourseHeader.jsx
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function CourseHeader({ title, progress, onToggleSidebar }) {
  return (
    <header className="p-4 bg-[#E3F1F1] border-b border-gray-200 flex-shrink-0">
      {/* Top Row for Mobile (Dashboard + Hamburger) */}
      <div className="flex justify-between items-center md:hidden">
        <a
          href="/dashboard"
          className="px-3 py-1 text-xs font-semibold text-white bg-[#006D77] rounded-md hover:bg-[#005c63] transition-colors"
        >
          Dashboard
        </a>

        <button
          onClick={onToggleSidebar}
          className="text-gray-600 hover:text-[#006D77]"
          aria-label="Toggle sidebar"
        >
          <RxHamburgerMenu className="text-2xl" />
        </button>
      </div>

      {/* Desktop Row: Dashboard | Title | Progress */}
      <div className="hidden md:flex justify-between items-center gap-4">
        {/* Dashboard Button */}
        <a
          href="/dashboard"
          className="px-4 py-2 text-sm font-semibold text-white bg-[#006D77] rounded-lg hover:bg-[#005c63] transition-colors"
        >
          Dashboard
        </a>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 flex-1 text-center">
          {title}
        </h1>

        {/* Progress Bar + % */}
        <div className="flex items-center gap-2 w-56">
          <div className="flex-1 h-2 bg-[#00173D] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#006D77] transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
            {progress}% Complete
          </span>
        </div>
      </div>

      {/* Mobile Title & Progress (stacked) */}
      <div className="mt-3 md:hidden">
        <h1 className="text-lg font-bold text-gray-800 text-center">{title}</h1>

        <div className="flex flex-col items-center gap-2 mt-2">
          <div className="w-full h-2 bg-[#00173D] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#006D77] transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-xs font-medium text-gray-600">
            {progress}% Complete
          </span>
        </div>
      </div>
    </header>
  );
}

export default CourseHeader;
