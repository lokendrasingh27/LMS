import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const CourseHeader = ({ onToggleSidebar }) => {
  return (
    <header className="p-4 bg-[#E3F1F1] border-b border-gray-200 flex-shrink-0">
      {/* Mobile Header */}
      <div className="flex justify-between items-center md:hidden">
        <a
          href="#"
          className="px-3 py-1 text-xs font-semibold text-white bg-[#006D77] rounded-md"
        >
          Dashboard
        </a>
        <button onClick={onToggleSidebar} className="text-gray-600">
          <RxHamburgerMenu className="text-2xl" />
        </button>
      </div>
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center gap-4">
        <a
          href="#"
          className="px-4 py-2 text-sm font-semibold text-white bg-[#006D77] rounded-lg"
        >
          Dashboard
        </a>
        <h1 className="text-2xl font-bold text-gray-800 flex-1 text-center">
          Course Title
        </h1>
        <div className="flex items-center gap-2 w-56">
          <div className="flex-1 h-2 bg-[#00173D] rounded-full overflow-hidden">
            <div className="h-full bg-[#006D77]" style={{ width: "0%" }}></div>
          </div>
          <span className="text-sm font-medium text-gray-600">0% Complete</span>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;
