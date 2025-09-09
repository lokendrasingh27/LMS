import React from "react";

const AssignmentPane = () => {
  return (
    <div className="p-6 bg-white rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">Assignment Title</h2>
      <p className="mb-4 prose">Assignment instructions go here...</p>
      <div className="border-2 border-dashed rounded-lg p-6 text-center mt-6">
        <label className="cursor-pointer text-indigo-600 font-semibold">
          Upload PDF File
        </label>
        <p className="text-sm text-gray-600 mt-4">Selected file: ---</p>
        <button className="mt-6 block w-full px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm">
          Submit Assignment
        </button>
      </div>
    </div>
  );
};

export default AssignmentPane;
