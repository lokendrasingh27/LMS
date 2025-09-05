import React from "react";

const QuizResults = () => {
  return (
    <div className="p-4 md:p-6 bg-white rounded-lg border">
      <h2 className="text-xl md:text-2xl font-bold mb-2">Quiz Results</h2>
      <p className="text-base md:text-lg font-semibold mb-6 text-gray-600">
        Your Score: --%
      </p>
      <div className="mb-4 p-3 rounded-md bg-gray-50">
        <p className="font-semibold">Question text...</p>
        <p className="text-sm text-gray-700">Your answer: ---</p>
      </div>
      <button className="w-full mt-6 px-6 py-3 text-base md:text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm">
        Continue
      </button>
    </div>
  );
};

export default QuizResults;
