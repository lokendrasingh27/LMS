import React from 'react';

// Dummy data for assessments
const dummyAssessments = [
  {
    id: 1,
    title: "Quiz: React Basics",
    course: "React Basics",
    results: [
      { id: 1, name: "Alice", score: 85, feedback: "Good job!" },
      { id: 2, name: "Bob", score: 70, feedback: "Needs improvement." }
    ]
  },
  {
    id: 2,
    title: "Assignment: JavaScript Functions",
    course: "JavaScript Essentials",
    results: [
      { id: 3, name: "Charlie", score: 92, feedback: "Excellent work!" }
    ]
  }
];

const AssessmentResults = () => {
  return (
    <div className="p-8 bg-[#F0F8F8] min-h-screen">
      <h1 className="text-3xl font-bold text-[#15315B] mb-6">🧪 Assessment Results</h1>

      {dummyAssessments.map(assessment => (
        <div key={assessment.id} className="mb-6 bg-white p-6 rounded-xl shadow border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#006D77] mb-1">{assessment.title}</h2>
          <p className="text-gray-500 mb-3">Course: {assessment.course}</p>

          {assessment.results.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#E0F7FA] text-left">
                  <th className="py-2 px-4 border">Student</th>
                  <th className="py-2 px-4 border">Score</th>
                  <th className="py-2 px-4 border">Feedback</th>
                </tr>
              </thead>
              <tbody>
                {assessment.results.map(result => (
                  <tr key={result.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border">{result.name}</td>
                    <td className="py-2 px-4 border">{result.score} / 100</td>
                    <td className="py-2 px-4 border">{result.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-600">No submissions yet.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AssessmentResults;
