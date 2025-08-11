// src/pages/courseplayer/quizinterface.jsx
import React from 'react';

function QuizInterface({ questions, onSubmitQuiz, timeLeft, answers, onAnswerChange }) {

  const handleOptionChange = (questionId, option) => {
    // Call the function passed down from the parent to update the state
    onAnswerChange(questionId, option);
  };

  const formatTime = (seconds) => {
    if (seconds === null) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <div className="p-6 bg-white rounded-lg border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Quiz in Progress...</h2>
        <div className="text-xl font-bold text-red-600 bg-red-100 px-3 py-1 rounded">
          {formatTime(timeLeft)}
        </div>
      </div>
      
      {questions.map((q, index) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold mb-2">{index + 1}. {q.text}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((option, i) => (
              <label key={i} className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  // The checked status is now determined by the 'answers' prop from the parent
                  checked={answers[q.id] === option}
                  // The onChange handler calls the function from the parent
                  onChange={() => handleOptionChange(q.id, option)}
                  className="mr-3"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        // The onSubmitQuiz function no longer needs arguments
        onClick={onSubmitQuiz}
        className="w-full mt-4 px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
      >
        Submit Quiz
      </button>
    </div>
  );
}

export default QuizInterface;