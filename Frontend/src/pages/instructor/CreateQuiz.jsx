import React, { useState } from 'react';

// --- Icon Components (self-contained) ---
const PlusCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
);
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

// --- Hardcoded New Question Data ---
const hardcodedQuestion = {
  text: 'Which planet is known as the Red Planet?',
  type: 'multiple-choice',
  options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
  correctAnswer: 'Mars',
};

const Createquiz = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // 🚀 Only render if modal is open

  // --- State Management ---
  const [quizTitle, setQuizTitle] = useState('Biology Basics Quiz');
  const [dueDate, setDueDate] = useState('2025-10-15');
  const [timeLimit, setTimeLimit] = useState(30); // in minutes
  const [questions, setQuestions] = useState([
    { id: 1, text: 'What is the powerhouse of the cell?', type: 'multiple-choice', options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'], correctAnswer: 'Mitochondria' },
    { id: 2, text: 'The Earth is flat.', type: 'true-false', options: ['True', 'False'], correctAnswer: 'False' }
  ]);

  const [newQuestionText, setNewQuestionText] = useState(hardcodedQuestion.text);
  const [newQuestionType, setNewQuestionType] = useState(hardcodedQuestion.type);
  const [newOptions, setNewOptions] = useState(hardcodedQuestion.options);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState(hardcodedQuestion.correctAnswer);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // --- Handlers ---
  const handleAddOption = () => setNewOptions([...newOptions, '']);
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...newOptions];
    updatedOptions[index] = value;
    setNewOptions(updatedOptions);
  };
  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      text: newQuestionText,
      type: newQuestionType,
      options: newQuestionType === 'true-false' ? ['True', 'False'] : newOptions.filter(opt => opt.trim() !== ''),
      correctAnswer: newCorrectAnswer,
    };
    setQuestions([...questions, newQuestion]);
  };
  const removeQuestion = (id) => setQuestions(questions.filter(q => q.id !== id));
  const handleSubmitQuiz = () => {
    setIsSubmitting(true);
    const quizData = { title: quizTitle, dueDate, timeLimit, questions };
    console.log("Submitting Quiz Data:", quizData);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 2000);
  };
  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    if (onClose) onClose();
  };

  return (
    <>
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
                  <input type="text" value={quizTitle} onChange={(e) => setQuizTitle(e.target.value)} className="w-full px-4 py-2 bg-slate-100 border-slate-200 rounded-lg" />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-slate-600 mb-1"><CalendarIcon /><span className="ml-2">Due Date</span></label>
                  <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="w-full px-4 py-2 bg-slate-100 border-slate-200 rounded-lg" />
                </div>
                <div>
                  <label className="flex items-center text-sm font-medium text-slate-600 mb-1"><ClockIcon /><span className="ml-2">Time Limit (Minutes)</span></label>
                  <input type="number" value={timeLimit} onChange={(e) => setTimeLimit(e.target.value)} className="w-full px-4 py-2 bg-slate-100 border-slate-200 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Questions + Add Question */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left: Questions List */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-slate-700 mb-6">Questions ({questions.length})</h2>
                <div className="space-y-6">
                  {questions.map((q, index) => (
                    <div key={q.id} className="p-4 border border-slate-200 rounded-lg bg-slate-50">
                      <div className="flex justify-between items-start">
                        <p className="font-semibold text-slate-800">{index + 1}. {q.text}</p>
                        <button onClick={() => removeQuestion(q.id)} className="text-red-500 hover:text-red-700"><TrashIcon /></button>
                      </div>
                      <div className="mt-4 space-y-2">
                        {q.options.map((opt, i) => (
                          <p key={i} className={`text-sm p-2 rounded ${opt === q.correctAnswer ? 'bg-green-100 text-green-800 font-medium' : 'bg-slate-100 text-slate-600'}`}>
                            {opt} {opt === q.correctAnswer && '(Correct Answer)'}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                  {questions.length === 0 && <p className="text-center text-slate-500 py-10">No questions added yet.</p>}
                </div>
              </div>

              {/* Right: Add New Question */}
              <div className="bg-white p-8 rounded-2xl shadow-lg lg:sticky lg:top-10">
                <h2 className="text-2xl font-bold text-slate-700 mb-6">Add a New Question</h2>
                <div className="space-y-4">
                  <textarea value={newQuestionText} onChange={(e) => setNewQuestionText(e.target.value)} placeholder="Type your question here..." className="w-full p-4 bg-slate-100 border-slate-200 rounded-lg" rows="3"></textarea>
                  <select value={newQuestionType} onChange={(e) => setNewQuestionType(e.target.value)} className="w-full p-3 bg-slate-100 border-slate-200 rounded-lg">
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="true-false">True / False</option>
                  </select>

                  {newQuestionType === 'multiple-choice' && (
                    <div className="space-y-3 pt-2">
                      <h3 className="font-medium text-slate-600">Options</h3>
                      {newOptions.map((opt, index) => (
                        <input key={index} type="text" value={opt} onChange={(e) => handleOptionChange(index, e.target.value)} placeholder={`Option ${index + 1}`} className="w-full p-2 bg-slate-100 border-slate-200 rounded-lg" />
                      ))}
                      <button onClick={handleAddOption} className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"><PlusCircleIcon /> Add Option</button>
                    </div>
                  )}

                  <div className="pt-2">
                    <h3 className="font-medium text-slate-600 mb-2">Correct Answer</h3>
                    <select value={newCorrectAnswer} onChange={(e) => setNewCorrectAnswer(e.target.value)} className="w-full p-3 bg-slate-100 border-slate-200 rounded-lg">
                      <option value="">Select the correct answer</option>
                      {(newQuestionType === 'true-false' ? ['True', 'False'] : newOptions).map((opt, i) => (
                        opt && <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <button onClick={addQuestion} className="w-full mt-4 py-3 px-4 bg-[#001F3F] text-white font-semibold rounded-lg hover:bg-[#006D77]">Add Question to List</button>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8">
              <button onClick={handleSubmitQuiz} disabled={isSubmitting} className="w-full py-4 px-6 bg-green-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 disabled:bg-green-400">
                {isSubmitting ? 'Creating Quiz...' : 'Create and Publish Quiz'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-auto">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600">
              <CheckCircleIcon />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mt-6 mb-2">Quiz Created!</h3>
            <p className="text-slate-600 mb-8">The new quiz has been successfully created.</p>
            <button
              onClick={handleCloseSuccess}
              className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Createquiz;
