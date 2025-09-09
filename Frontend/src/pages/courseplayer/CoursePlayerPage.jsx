import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setCourse } from "../../redux/courseSlice";
import { setLecture } from "../../redux/lectureSlice";
import { useParams } from "react-router-dom";
import CourseHeader from "./CourseHeader";
import ContentPane from "./ContentPane";
import CourseSidebar from "./CourseSidebar";

const CoursePlayerPage = () => {
  // ✅ FIX 1: Set initial state to true to show the sidebar on load
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    if (!courseId) return; // Good practice to have a guard clause

    const fetchCourseData = async () => {
      try {
        const courseResponse = await axios.get(
          `http://localhost:5000/api/course/${courseId}`,
          { withCredentials: true }
        );

        const lecturesResponse = await axios.get(
          `http://localhost:5000/api/course/${courseId}/lecture`,
          { withCredentials: true }
        );

        dispatch(setCourse(courseResponse.data.course));
        dispatch(setLecture(lecturesResponse.data.lectures));
      } catch (error) {
        console.error("Error fetching course or lectures:", error);
      }
    };

    fetchCourseData();
  // ✅ FIX 3: Add courseId to the dependency array
  }, [dispatch, courseId]);

  return (
    <div className="flex flex-col h-screen bg-[#E3F1F1] font-sans">
      <CourseHeader onToggleSidebar={toggleSidebar} />
      <div className="relative flex flex-grow overflow-hidden">
        <ContentPane />
        <CourseSidebar
          isOpen={sidebarOpen}
          onClose={toggleSidebar}
          // You can now remove courseId from here if you want, since the sidebar
          // no longer fetches its own data. But leaving it doesn't hurt.
          courseId={courseId}
        />
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </div>
  );
};

export default CoursePlayerPage;