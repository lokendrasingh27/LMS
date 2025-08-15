import React, { useState } from "react";
import CourseCreate from "./CreateCourse";
import StudentManagement from "./StudentManagement";
import Reviews from "./Review";
import InstructorDashboard from "./InstructorDashboard";

const Instructor=()=> {
  const [activeTab, setActiveTab] = useState("create");

  const renderContent = () => {
    switch (activeTab) {
      case "create":
        return <CourseCreate />;
      case "students":
        return <StudentManagement />;
      case "reviews":
        return <Reviews />;
      default:
        return <InstructorDashboard/>;
    }
  };

  return (
    <div className="p-4">
      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("create")}
          className={`px-4 py-2 rounded ${
            activeTab === "create" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Create Course
        </button>
        <button
          onClick={() => setActiveTab("students")}
          className={`px-4 py-2 rounded ${
            activeTab === "students" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Manage Students
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 rounded ${
            activeTab === "reviews" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="border p-4 rounded bg-white shadow">
        {renderContent()}
      </div>
    </div>
  );
}
export default Instructor;