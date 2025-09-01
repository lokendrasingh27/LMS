import React, { useState } from "react";
import CourseHeader from "./CourseHeader";
import ContentPane from "./ContentPane";
import CourseSidebar from "./CourseSidebar";

// This is a placeholder lesson to prevent the ContentPane from crashing.
const placeholderLesson = {
  id: 1,
  title: "Lesson Title",
  type: "text", 
};

function CoursePlayerPage() {
  // State to manage the sidebar's visibility on mobile.
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar's state.
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col h-screen bg-[#E3F1F1] font-sans">
      <CourseHeader 
        title="Course Title" 
        progress={0} 
        onToggleSidebar={toggleSidebar}
      />
      <div className="relative flex flex-grow overflow-hidden">
        <ContentPane
          lesson={placeholderLesson}
        />
        <CourseSidebar
          curriculum={[]} // Sidebar receives an empty array for curriculum
          currentLessonId={null}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
         {/* This overlay captures outside clicks to close the sidebar */}
         {isSidebarOpen && <div onClick={toggleSidebar} className="md:hidden fixed inset-0 z-40"></div>}
      </div>
    </div>
  );
}

export default CoursePlayerPage;