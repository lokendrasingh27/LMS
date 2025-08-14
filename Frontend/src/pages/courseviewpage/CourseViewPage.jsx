import React from "react";
import Sidebar from "../../components/Sidebar";
import Banner from "./banner";

const CourseViewPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-72 bg-[#001f3f] text-white rounded-r-3xl">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Banner at the top of main content */}
        <div className="w-full">
          <Banner />
        </div>

        {/* Rest of the content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">Course View</h1>
          <p>
            This is the main content area next to the sidebar. The banner above is part of this section.
          </p>
        </main>
      </div>
    </div>
  );
};

export default CourseViewPage;
