import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

// --- Icon Components (self-contained) ---
const PlusCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
);
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const CreateQuiz = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

   const [quizTitle, setQuizTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [timeLimit, setTimeLimit] = useState(""); // minutes
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
    type: "multiple-choice", // default type
  });
  const {courseId,lectureId}=useParams()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [getQuizess , setGetQuizess ] = useState(null)

  // handle input change for question
  const handleQuestionChange = (e) => {
    setCurrentQuestion({ ...currentQuestion, question: e.target.value });
  };
 console.log(currentQuestion)
  // handle option change
  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  // add question to list
  const addQuestion = () => {
    if (!currentQuestion.question || !currentQuestion.correctAnswer) {
      alert("Please fill question and correct answer!");
      return;
    }
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
      type: "multiple-choice",
    });
  };

  // submit quiz to backend
  const handleSubmitQuiz = async () => {
    if (!quizTitle || questions.length === 0) {
      alert("Please enter title and at least one question");
      return;
    }

    setIsSubmitting(true);
    try {
      const quizData = {
        title: quizTitle,
        submissionDeadline: dueDate, // backend field
        timeLimit,
        questions,
      };

      const res = await axios.post(`http://localhost:5000/api/course/:${courseId}/lecture/${lectureId}/quiz`,
        quizData,
        {
          headers: {
            "Content-Type": "application/json",
            // agar auth laga hai
          },withCredentials:true
        }
      );

     if(res.data.success){
      toast.success(res.data.message)
       setShowSuccessModal(true);
       setQuizTitle("");
       setDueDate("");
       setTimeLimit("");
       setQuestions([]);
     }
    } catch (error) {
      console.error("❌ Error creating quiz:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to create quiz");
    } finally {
      setIsSubmitting(false);
    }
  };
   
      useEffect(()=>{
        try{

        } catch(error){
          console.log(error)
        }
      })
  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="bg-[#E3F1F1] min-h-screen font-sans p-4 sm:p-6 md:p-10">
        <div className="max-w-6xl mx-auto relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-4 mr-4 text-slate-400 hover:text-slate-700 transition-colors z-10"
            aria-label="Close Quiz Modal"
          >
            <XIcon />
          </button>

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-slate-800 pt-8">Create New Quiz</h1>
            <p className="text-black mt-2">Design a new quiz by setting the details and adding your questions below.</p>
          </header>

          {/* Quiz Details */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-slate-700 mb-6">Quiz Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">Quiz Title</label>
                <input type="text" 
               placeholder="Quiz Title"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)} 
                className="w-full px-4 py-2 bg-slate-100 border-slate-200 rounded-lg" />
              </div>
              <div>
                <label className="flex items-center text-sm font-medium text-slate-600 mb-1">
                  <CalendarIcon /><span className="ml-2">Due Date</span></label>
                <input 
                 type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                 className="w-full px-4 py-2 bg-slate-100 border-slate-200 rounded-lg" />
              </div>
              <div>
                <label className="flex items-center text-sm font-medium text-slate-600 mb-1"><ClockIcon />
                <span className="ml-2">Time Limit (Minutes)</span></label>
                <input type="number"
               
                placeholder="Time Limit (minutes)"
                value={timeLimit}
                onChange={(e) => setTimeLimit(e.target.value)}
                 className="w-full px-4 py-2 bg-slate-100 border-slate-200 rounded-lg" />
              </div>
            </div>
          </div>

          {/* Questions + Add Question */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Questions List */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-slate-700 mb-6">Questions (0)</h2>
              <div className="space-y-6">
                <p className="text-center text-slate-500 py-10">No questions added yet.</p>
              </div>
            </div>

            {/* Right: Add New Question */}
            <div className="bg-white p-8 rounded-2xl shadow-lg lg:sticky lg:top-10">
              <h2 className="text-2xl font-bold text-slate-700 mb-6">Add a New Question</h2>
              <div className="space-y-4">
                <textarea 
                  type="text"
         
                value={currentQuestion.question}
                onChange={handleQuestionChange}
                placeholder="Type your question here..." className="w-full p-4 bg-slate-100 border-slate-200 rounded-lg" rows="3"></textarea>
                <select 
                  value={currentQuestion.type}
                  onChange={(e) =>
                    setCurrentQuestion({ ...currentQuestion, type: e.target.value })
                  }
                   className="w-full p-3 bg-slate-100 border-slate-200 rounded-lg"
                   >
                   <option value="multiple-choice">Multiple Choice</option>
                   <option value="true-false">True / False</option>
                </select>
                <div className="space-y-3  pt-2">
                  <h3 className="font-medium text-slate-600">Options</h3>
                  {currentQuestion.options.map((opt, idx) => (
                  <input type="text"  placeholder={`Option ${idx + 1}`} 
                  value={opt}
                  onChange={(e) => handleOptionChange(idx, e.target.value)}
                    key={idx}
                  className="w-full p-2 bg-slate-100 border-slate-200 rounded-lg" />
                  ))}
                  {/* <button className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"><PlusCircleIcon /> Add Option</button> */}
                </div>
                <div className="pt-2">
                  <h3 className="font-medium text-slate-600 mb-2">Correct Answer</h3>
                  <select
                   type="text"
                   placeholder="Correct Answer"
                    value={currentQuestion.correctAnswer}
                  onChange={(e) =>
                 setCurrentQuestion({ ...currentQuestion, correctAnswer: e.target.value })
                  }
                  className="w-full p-3 bg-slate-100 border-slate-200 rounded-lg"
                  >
                     {currentQuestion.options.map((opt, idx) => (
                        <option key={idx}  value={opt}> {opt}</option>
                  ))}
                    
                  </select>
                </div>
                <button onClick={addQuestion} className="w-full mt-4 py-3 px-4 bg-[#001F3F] text-white font-semibold rounded-lg hover:bg-[#006D77]">Add Question to List</button>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8">
            <button  onClick={handleSubmitQuiz} className="w-full py-4 px-6 bg-green-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700">
              Create and Publish Quiz
            </button>
            {showSuccessModal && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          🎉 Quiz Created Successfully!
        </div>
      )}

          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateQuiz;
