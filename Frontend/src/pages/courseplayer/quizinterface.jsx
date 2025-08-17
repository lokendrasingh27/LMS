// src/pages/courseplayer/quizinterface.jsx
import React from 'react';

function QuizInterface({ questions, onSubmitQuiz, timeLeft, answers, onAnswerChange }) {

  const handleOptionChange = (questionId, option) => {
    // Prevent changing the answer if it's already been answered
    if (answers[questionId]) return;
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
      
      {questions.map((q, index) => {
        const userAnswer = answers[q.id];
        const questionIsAttempted = userAnswer !== undefined;

        return (
          <div key={q.id} className="mb-6">
            <p className="font-semibold mb-2">{index + 1}. {q.text}</p>
            <div className="flex flex-col gap-2">
              {q.options.map((option, i) => {
                const isCorrectAnswer = option === q.correctAnswer;
                const isSelectedAnswer = option === userAnswer;

                let labelClasses = "flex items-center p-2 rounded-md border transition-colors";

                if (questionIsAttempted) {
                  if (isCorrectAnswer) {
                    labelClasses += " bg-green-100 border-green-300 text-green-800 font-semibold";
                  } else if (isSelectedAnswer) {
                    labelClasses += " bg-red-100 border-red-300 text-red-800 line-through";
                  } else {
                    labelClasses += " border-gray-200";
                  }
                } else {
                  labelClasses += " border-gray-200 hover:bg-gray-100 cursor-pointer";
                }

                return (
                  <label key={i} className={labelClasses}>
                    <input
                      type="radio"
                      name={q.id}
                      value={option}
                      checked={isSelectedAnswer}
                      onChange={() => handleOptionChange(q.id, option)}
                      disabled={questionIsAttempted}
                      className="mr-3"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}

      <button
        onClick={onSubmitQuiz}
        className="w-full mt-4 px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
      >
        Submit Quiz
      </button>
    </div>
  );
}

export default QuizInterface;