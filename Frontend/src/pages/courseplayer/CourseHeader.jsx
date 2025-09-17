import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CourseHeader = ({ onToggleSidebar }) => {
  const course = useSelector((state) => state.course.course);
  const lectures = useSelector((state) => state.lecture.lectures ?? []);

  const completedLectures = lectures.filter((lec) => lec.completed).length;
  const progress = lectures.length
    ? Math.round((completedLectures / lectures.length) * 100)
    : 0;
  return (
    <header className="p-4 bg-[#E3F1F1] border-b border-gray-200 flex-shrink-0">
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

      <div className="hidden md:flex justify-between items-center gap-4">
        <NavLink to="/">
          <button  className="px-4 py-2 text-sm font-semibold text-white bg-[#006D77] rounded-lg">
            Back Dashboard
          </button>
        </NavLink>
        <h1 className="text-2xl font-bold text-gray-800 flex-1 text-center">
          {course?.courseTitle || "Course Title"}
        </h1>
        <div className="flex items-center gap-2 w-56">
          <div className="flex-1 h-2 bg-[#00173D] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#006D77]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-sm font-medium text-gray-600">
            {progress}% Complete
          </span>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;
