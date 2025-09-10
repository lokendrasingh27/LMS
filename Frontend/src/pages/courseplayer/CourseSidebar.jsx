import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLecture } from "../../redux/lectureSlice"; // Adjust the import path

const CourseSidebar = ({ isOpen }) => {
  const [openLecture, setOpenLecture] = useState(null);
  const dispatch = useDispatch();

  // Get the full list of lectures from the Redux store
  const lectures = useSelector((state) => state.lecture.lecture ?? []);

  const handleSelectLecture = (lecture) => {
    // Dispatch the selected lecture object to the Redux store
    dispatch(setCurrentLecture(lecture));
  };

  const toggleLecture = (index, lecture) => {
    setOpenLecture(openLecture === index ? null : index);
    handleSelectLecture(lecture);
  };

  return (
    <aside
      className={`w-72 md:w-90 bg-[#00173D] border-l border-gray-200 overflow-y-auto p-5 flex-shrink-0 fixed md:static top-0 right-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="space-y-4">
        {lectures.length === 0 && (
          <li className="text-white">Loading lessons...</li>
        )}
        {lectures.map((lecture, index) => (
          <li key={lecture._id}>
            <button
              className="w-full text-left p-3 bg-[#006D77] text-white rounded-md font-semibold"
              onClick={() => toggleLecture(index, lecture)}
            >
              {`Lecture ${index + 1}: ${lecture.lectureTitle}`}
            </button>
            {openLecture === index && (
              <ul className="mt-2 ml-4 space-y-2 text-sm font-normal">
                {/* This part can be dynamic later if you have sub-lessons */}
                <li className="p-3 bg-[#C2E8F8] rounded-md font-semibold text-black">
                  {`Lesson Details`}
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