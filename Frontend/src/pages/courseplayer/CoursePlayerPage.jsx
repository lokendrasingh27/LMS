import React, { useState } from "react";
import CourseHeader from "./CourseHeader";
import ContentPane from "./ContentPane";
import CourseSidebar from "./CourseSidebar";

const CoursePlayerPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col h-screen bg-[#E3F1F1] font-sans">
      <CourseHeader onToggleSidebar={toggleSidebar} />
      <div className="relative flex flex-grow overflow-hidden">
        <ContentPane />
        <CourseSidebar isOpen={sidebarOpen} onClose={toggleSidebar} />
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
