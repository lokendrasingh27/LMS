import React from "react";

const QuizInterface = () => {
  return (
    <div className="p-4 md:p-6 bg-white rounded-lg border">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <h2 className="text-xl md:text-2xl font-bold">Quiz in Progress...</h2>
        <div className="text-lg md:text-xl font-bold text-red-600 bg-red-100 px-3 py-1 rounded">
          --:--
        </div>
      </div>
      <div className="mb-6">
        <p className="font-semibold mb-2">Question goes here...</p>
        <div className="flex flex-col gap-2">
          <label className="flex items-center p-2 rounded-md border border-gray-200">
            <input type="radio" className="mr-3" /> Option 1
          </label>
          <label className="flex items-center p-2 rounded-md border border-gray-200">
            <input type="radio" className="mr-3" /> Option 2
          </label>
        </div>
      </div>
      <button className="w-full mt-4 px-6 py-3 text-base md:text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm">
        Submit Quiz
      </button>
    </div>
  );
};

export default QuizInterface;
