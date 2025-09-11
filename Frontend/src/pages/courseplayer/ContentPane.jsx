import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ContentPane = () => {
  const currentLecture = useSelector((state) => state.lecture.currentLecture);
  const course = useSelector((state) => state.course.course);

  // --- State for Assignment ---
  const [selectedFile, setSelectedFile] = useState(null);
  const [assignmentStatus, setAssignmentStatus] = useState('initial'); // 'initial', 'submitting', 'submitted', 'error'

  // --- Quiz State (from previous implementation) ---
  const [quizState, setQuizState] = useState('initial');
  const [quizData, setQuizData] = useState(null);
  const [quizResult, setQuizResult] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  // Reset states when the lecture changes
  useEffect(() => {
    // Reset all states to default
    setQuizState('initial');
    setQuizData(null);
    setQuizResult(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setSelectedFile(null);
    setAssignmentStatus('initial');

    // Fetch quiz data if the lecture is a quiz
    if (currentLecture && currentLecture.type === 'quiz' && currentLecture.quizId) {
      const fetchQuiz = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/quizzes/${currentLecture.quizId}`);
          setQuizData(response.data);
          setQuizState('taking');
        } catch (err) {
          console.error("Failed to load the quiz.", err);
          setQuizState('error');
        }
      };
      fetchQuiz();
    }
  }, [currentLecture]);

  // --- Assignment Logic ---
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmitAssignment = async () => {
    if (!selectedFile) {
      return alert("Please select a file to submit.");
    }
    setAssignmentStatus('submitting');
    
    const formData = new FormData();
    formData.append('assignmentFile', selectedFile); // The key 'assignmentFile' must match your backend (Multer) setup

    try {
      await axios.post(
        `http://localhost:5000/api/assignments/${currentLecture.assignmentId}/submit`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setAssignmentStatus('submitted');
    } catch (err) {
      console.error("Assignment submission failed.", err);
      setAssignmentStatus('error');
    }
  };


  // --- Quiz Logic (condensed for brevity, same as before) ---
  const handleQuizComplete = async (finalAnswers) => {
    setQuizState('submitting');
    try {
      const response = await axios.post(`/api/quizzes/${currentLecture.quizId}/submit`, { answers: finalAnswers });
      const resultResponse = await axios.get(`/api/quiz-results/${response.data.resultId}`);
      setQuizResult(resultResponse.data);
      setQuizState('results');
    } catch (err) {
      setQuizState('error');
    }
  };
  
  // ... other quiz helper functions (handleSelectAnswer, handleNextQuestion)


  // --- RENDER LOGIC ---

  // Initial welcome message
  if (!currentLecture) {
    return (
      <main className="contentpane flex-grow overflow-y-auto p-4 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <h2 className="text-2xl font-semibold">Welcome to {course ? course.courseTitle : 'the course'}!</h2>
          <p>Please select a lesson from the sidebar to get started.</p>
        </div>
      </main>
    );
  }

  // Determine which content to render
  const renderContent = () => {
    switch (currentLecture.type) {
      case 'quiz':
        // --- QUIZ UI ---
        // (Your existing quiz UI logic goes here)
        return <div>Your Quiz UI</div>;
      
      case 'assignment':
        // --- ASSIGNMENT UI ---
        return (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">{currentLecture.title}</h1>
            <div className="p-6 bg-white rounded-lg border">
              <h2 className="text-2xl font-bold mb-4">Submit Your Assignment</h2>
              <div className="prose mb-6">
                 <p>{currentLecture.description || "Please follow the instructions and upload your file below."}</p>
              </div>
              
              {assignmentStatus === 'submitted' ? (
                 <div className="p-6 text-center bg-green-50 text-green-700 rounded-lg">
                    <h3 className="text-xl font-bold">Successfully Submitted! ✅</h3>
                    <p>Your assignment has been received.</p>
                 </div>
              ) : (
                <div className="border-2 border-dashed rounded-lg p-6 text-center mt-6">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer text-indigo-600 font-semibold">
                    {assignmentStatus === 'submitting' ? "Uploading..." : "Upload PDF File"}
                  </label>
                  {selectedFile && <p className="text-sm text-gray-600 mt-4">Selected file: {selectedFile.name}</p>}
                  
                  <button onClick={handleSubmitAssignment} disabled={assignmentStatus === 'submitting'} className="mt-6 block w-full px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm disabled:bg-gray-400">
                    {assignmentStatus === 'submitting' ? 'Submitting...' : 'Submit Assignment'}
                  </button>
                   {assignmentStatus === 'error' && <p className="text-red-500 mt-4">Submission failed. Please try again.</p>}
                </div>
              )}
            </div>
          </div>
        );
        
      default:
        // --- VIDEO UI ---
        return (
          <>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${currentLecture.videoUrl}`}
                title={currentLecture.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-5 pt-6 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl ml-2 font-bold text-[#00173D]">
                {currentLecture.title || "Loading..."}
              </h2>
            </div>
          </>
        );
    }
  };

  return (
    <main className="contentpane flex-grow overflow-y-auto p-4">
      {renderContent()}
    </main>
  );
};

export default ContentPane;