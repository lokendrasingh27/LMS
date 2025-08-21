import React, { useState } from "react";
import { assignmentSubmissions } from "./demodata";
import SubmissionList from "./SubmissionList";
import GradingPanel from "./GradingPanel";
import { LayoutDashboard } from "lucide-react"; // Icon for the button

const AssignmentGradingPage = () => {
  const [submissions, setSubmissions] = useState(assignmentSubmissions);
  const [selectedSubmission, setSelectedSubmission] = useState(submissions[0]);

  const handleSelectSubmission = (submission) => {
    setSelectedSubmission(submission);
  };

  const handleSaveGrade = (submissionId, grade, feedback) => {
    const updatedSubmissions = submissions.map((sub) => {
      if (sub.id === submissionId) {
        return { ...sub, grade, feedback, status: "Graded" };
      }
      return sub;
    });
    setSubmissions(updatedSubmissions);
    // Update the selected submission to show changes immediately
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
      <header className="flex-shrink-0 bg-white border-b border-zinc-200 p-3 shadow-sm">
        <a
          href="/dashboard" // This link should point to your dashboard route
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#006D77] rounded-lg hover:bg-[#005c63] transition-colors"
        >
          <LayoutDashboard className="h-4 w-4" />
          <span>Dashboard</span>
        </a>
      </header>
      
      {/* Main Content Area */}
      <div className="flex flex-grow overflow-hidden">
        {/* Grading Panel (Right Panel) */}
        <GradingPanel
          submission={selectedSubmission}
          onSaveGrade={handleSaveGrade}
        />
        {/* Submission List (Left Panel) */}
        <SubmissionList
          submissions={submissions}
          selectedSubmission={selectedSubmission}
          onSelect={handleSelectSubmission}
        />
        
        
      </div>
    </div>
  );
};

export default AssignmentGradingPage;