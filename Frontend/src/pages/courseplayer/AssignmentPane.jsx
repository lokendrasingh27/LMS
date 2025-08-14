// src/pages/courseplayer/AssignmentPane.jsx
import React, { useState } from 'react';

function AssignmentPane({ lesson, onAssignmentSubmit }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Check if the selected file type is PDF
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
      } else {
        // If not a PDF, alert the user and clear the selection
        alert("Invalid file format. Please upload a PDF file only.");
        setFile(null);
        e.target.value = null; // Reset the file input field
      }
    }
  };

  const handleSubmit = () => {
    if (file) {
      onAssignmentSubmit(file);
    } else {
      alert("Please select a file to submit.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">Assignment: {lesson.title}</h2>
      
      {lesson.assignmentStatus === 'submitted' ? (
        <div className="p-4 bg-green-100 text-green-800 rounded-md">
          <p className="font-semibold">Assignment Submitted!</p>
          <p>Your assignment has been received. You can now proceed to the next lesson.</p>
        </div>
      ) : (
        <div>
          <p className="mb-4 prose">{lesson.instructions}</p>
          <div className="border-2 border-dashed rounded-lg p-6 text-center mt-6">
            <label htmlFor="file-upload" className="cursor-pointer text-indigo-600 font-semibold">
                Select a pdf file to upload
            </label>
            <input 
              id="file-upload"
              type="file" 
              onChange={handleFileChange} 
              className="hidden"
              accept="application/pdf" // Restrict file selection to PDFs
            />
            {file && <p className="text-sm text-gray-600 mt-4">Selected file: {file.name}</p>}
            <button
              onClick={handleSubmit}
              disabled={!file}
              className="mt-6 block w-full px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Submit Assignment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignmentPane;