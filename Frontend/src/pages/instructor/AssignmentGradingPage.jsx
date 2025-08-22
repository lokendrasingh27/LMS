import React, { useState } from "react";
import { assignmentSubmissions } from "./demodata";
import SubmissionList from "./SubmissionList";
import GradingPanel from "./GradingPanel";
import { LayoutDashboard, Menu } from "lucide-react"; // Import Menu icon

const AssignmentGradingPage = () => {
  const [submissions, setSubmissions] = useState(assignmentSubmissions);
  const [selectedSubmission, setSelectedSubmission] = useState(submissions[0]);
  const [isListVisible, setIsListVisible] = useState(false); // State for mobile visibility

  const handleSelectSubmission = (submission) => {
    setSelectedSubmission(submission);
    setIsListVisible(false); // Hide list after selection on mobile
  };

  const handleSaveGrade = (submissionId, grade, feedback) => {
    const updatedSubmissions = submissions.map((sub) => {
      if (sub.id === submissionId) {
        return { ...sub, grade, feedback, status: "Graded" };
      }
      return sub;
    });
    setSubmissions(updatedSubmissions);
    setSelectedSubmission((prev) => ({
      ...prev,
      grade,
      feedback,
      status: "Graded",
    }));
    alert(`Grade for ${selectedSubmission.studentName} has been saved!`);
  };

  return (
    <div className="flex flex-col w-full h-screen bg-zinc-100 font-sans">
      {/* Header Bar */}
      <header className="flex-shrink-0 bg-white border-b border-zinc-200 p-3 shadow-sm flex items-center justify-between">
        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#006D77] rounded-lg hover:bg-[#005c63] transition-colors"
        >
          <LayoutDashboard className="h-4 w-4" />
          <span>Dashboard</span>
        </a>
        {/* Hamburger Icon - Visible only on mobile */}
        <button
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900"
          onClick={() => setIsListVisible(true)}
          aria-label="Toggle submission list"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>
      
      {/* Main Content Area */}
      <div className="flex flex-grow overflow-hidden relative">
        {/* Grading Panel (Right Panel) */}
        <GradingPanel
          submission={selectedSubmission}
          onSaveGrade={handleSaveGrade}
        />
        {/* Submission List (Left Panel on Desktop, Hidden Overlay on Mobile) */}
        <div
          className={`
            h-full w-4/5 max-w-xs absolute top-0 right-0 z-20 bg-white border-l border-zinc-200
            transform transition-transform duration-300 ease-in-out
            md:relative md:w-1/3 md:max-w-none md:translate-x-0 md:border-l-0 md:border-r md:z-auto
            ${isListVisible ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          `}
        >
          <SubmissionList
            submissions={submissions}
            selectedSubmission={selectedSubmission}
            onSelect={handleSelectSubmission}
            onClose={() => setIsListVisible(false)} // Pass close handler for the 'X' button
          />
        </div>
        
        
      </div>
    </div>
  );
};

export default AssignmentGradingPage;