import React, { useState } from "react";
import { RxCross2 } from 'react-icons/rx';
const CourseSidebar = ({ isOpen, onClose }) => {
  const [openLecture, setOpenLecture] = useState(null);

  const toggleLecture = (index) => {
    setOpenLecture(openLecture === index ? null : index);
  };

  return (
    <aside
      className={`w-72 md:w-90 bg-[#00173D] border-l border-gray-200 overflow-y-auto p-5 flex-shrink-0 fixed md:static top-0 right-0 h-full z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-6 md:hidden">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider px-2">
          Course Content
        </h3>
        <button onClick={onClose} className="text-white">
          <RxCross2 className="text-2xl" />
        </button>
      </div>

      {/* Progress bar for mobile view */}
      <div className="md:hidden mb-6">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
            <div className="h-full bg-[#006D77]" style={{ width: "0%" }}></div>
          </div>
          <span className="text-sm font-medium text-white">0% Complete</span>
        </div>
      </div>

      <ul className="space-y-4">
        <li>
          <button
            className="w-full text-left p-3 bg-[#006D77] text-white rounded-md font-semibold"
            onClick={() => toggleLecture(1)}
          >
            Lecture 1: Introduction
          </button>
          {openLecture === 1 && (
            <ul className="mt-2 ml-4 space-y-2 text-sm font-normal">
              <li className="p-3 bg-[#C2E8F8] rounded-md font-semibold text-black">
                Lesson 1.1: Getting Started
              </li>
            </ul>
          )}
        </li>
        <li>
          <button
            className="w-full text-left p-3 bg-[#005c63] text-white rounded-md font-semibold"
            onClick={() => toggleLecture(2)}
          >
            Lecture 2: Basics
          </button>
          {openLecture === 2 && (
            <ul className="mt-2 ml-4 space-y-2 text-sm font-normal">
              <li className="p-3 bg-[#C2E8F8] rounded-md font-semibold text-black">
                Lesson 2.1: Fundamentals
              </li>
              
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default CourseSidebar;
