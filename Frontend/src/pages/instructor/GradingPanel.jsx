import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";

const GradingPanel = ({ submission, onSaveGrade }) => {
  const [grade, setGrade] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (submission) {
      setGrade(submission.grade || "");
      setFeedback(submission.feedback || ""); 
    }
  }, [submission]);

  const handleSave = () => {
    onSaveGrade(submission.id, grade, feedback);
  };

  if (!submission) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-zinc-50">
        <p className="text-zinc-500">Select a submission to begin grading.</p>
      </div>
    );
  }

  return (
    <div className="w-full md:w-2/3 h-full overflow-y-auto p-8 bg-[#E3F1F1]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-zinc-900">{submission.studentName}</h3>
            <p className="text-sm text-zinc-500">Assignment: React Project Final</p>
          </div>
          <a href={submission.file.url} download className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-zinc-300 rounded-lg hover:bg-zinc-100 transition-colors">
            <Download className="h-4 w-4" />
            <span>{submission.file.name}</span>
          </a>
        </div>
        
        {/* Grading Form */}
        <div className="space-y-6">
          <div className="bg-white">
            <label htmlFor="grade" className="block text-sm font-medium text-zinc-700 mb-1">Grade</label>
            <input
              id="grade"
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="e.g., A+, 95%, etc."
              className="w-full rounded-md border-zinc-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="bg-white">
            <label htmlFor="feedback" className="block text-sm font-medium text-zinc-700 mb-1">Feedback</label>
            <textarea
              id="feedback"
              rows={10}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Provide detailed feedback for the student..."
              className="w-full rounded-md border-black-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-[#006D77] text-white font-semibold rounded-lg hover:bg-[#005c63] transition-colors shadow-sm"
            >
              Save Grade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradingPanel;