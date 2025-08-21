import React from "react";
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

// Helper to format dates
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const SubmissionList = ({ submissions, selectedSubmission, onSelect }) => {
  return (
    <div className="w-1/3 h-full bg-white border-r border-zinc-200 overflow-y-auto">
      <div className="p-4 border-b border-zinc-200">
        <h2 className="text-lg font-semibold text-zinc-800">Submissions</h2>
        <p className="text-sm text-zinc-500">{submissions.length} students</p>
      </div>
      <ul>
        {submissions.map((sub) => {
          const isSelected = selectedSubmission && selectedSubmission.id === sub.id;
          return (
            <li key={sub.id}>
              <button
                onClick={() => onSelect(sub)}
                className={`w-full text-left p-4 border-b border-zinc-100 hover:bg-zinc-50 transition-colors ${isSelected ? "bg-indigo-50" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <img src={sub.studentAvatar} alt={sub.studentName} className="h-10 w-10 rounded-full" />
                  <div className="flex-grow">
                    <p className={`font-medium ${isSelected ? "text-indigo-700" : "text-zinc-800"}`}>
                      {sub.studentName}
                    </p>
                    <p className="text-xs text-zinc-500">Submitted on {formatDate(sub.submissionDate)}</p>
                  </div>
                  {sub.status === "Graded" && <CheckCircle className="h-5 w-5 text-green-600" />}
                  {sub.status === "Needs Grading" && <Clock className="h-5 w-5 text-amber-600" />}
                  {sub.status === "Late" && <AlertTriangle className="h-5 w-5 text-red-600" />}
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubmissionList;