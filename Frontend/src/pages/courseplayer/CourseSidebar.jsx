import React, { useState } from "react";
import { useSelector } from "react-redux";

const CourseSidebar = ({ isOpen, onSelectLecture }) => {
  const [openLecture, setOpenLecture] = useState(null);

  // This component now simply reads the lecture data from the Redux store.
  // The parent component is responsible for fetching and putting the data here.
  const lectures = useSelector((state) => state.lecture.lecture ?? []);

  const toggleLecture = (index) => {
    setOpenLecture(openLecture === index ? null : index);
    
    // Call the onSelectLecture prop if it's provided, passing the selected lecture
    if (onSelectLecture) {
      onSelectLecture(lectures[index]);
    }
  };

  return (
    <aside
      className={`w-72 md:w-90 bg-[#00173D] border-l border-gray-200 overflow-y-auto p-5 flex-shrink-0 fixed md:static top-0 right-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="space-y-4">
        {lectures.length === 0 && (
          <li className="text-white">Loading lectures...</li>
        )}
        {lectures.map((lecture, index) => (
          <li key={lecture._id}>
            <button
              className="w-full text-left p-3 bg-[#006D77] text-white rounded-md font-semibold"
              onClick={() => toggleLecture(index)}
            >
              {`Lecture ${index + 1}: ${lecture.lectureTitle}`}
            </button>
            {openLecture === index && (
              <ul className="mt-2 ml-4 space-y-2 text-sm font-normal">
                <li className="p-3 bg-[#C2E8F8] rounded-md font-semibold text-black">
                  {`Lesson ${index + 1}.1: Details`}
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CourseSidebar;