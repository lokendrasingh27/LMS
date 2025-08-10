// src/pages/courseplayer/quizresults.jsx
import React from 'react';

function QuizResults({ result, questions, onRetakeQuiz, onContinue }) {
  const isPassed = result.score >= 70; // Assuming 70 is the passing score

  return (
    <div className="p-6 bg-white rounded-lg border">
      <h2 className="text-2xl font-bold mb-2">Quiz Results</h2>
       {/* --- Add a message if time ran out --- */}
      {result.timeUp && (
        <p className="text-center font-semibold text-red-600 mb-4">Time's up! Your quiz was submitted automatically.</p>
      )}
      <p className={`text-lg font-semibold mb-6 ${isPassed ? 'text-green-600' : 'text-indigo-600'}`}>
        You Scored: {result.score}%
      </p>

      {questions.map((q, index) => {
        const userAnswer = result.answers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;
        return (
          <div key={q.id} className={`mb-4 p-3 rounded-md ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
            <p className="font-semibold">{index + 1}. {q.text}</p>
            <p className={`text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              Your answer: {userAnswer || "No answer"} {isCorrect ? '✅' : '❌'}
            </p>
            {!isCorrect && (
              <p className="text-sm text-gray-600">Correct answer: {q.correctAnswer}</p>
            )}
          </div>
        );
      })}

      {isPassed ? (
        <button
          onClick={onContinue}
          className="w-full mt-6 px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
        >
          Continue
        </button>
      ) : (
        <button
          onClick={onRetakeQuiz}
          className="w-full mt-6 px-6 py-3 text-lg font-semibold text-white bg-gray-700 rounded-lg shadow-sm hover:bg-gray-800"
        >
          Retake Quiz
        </button>
      )}
    </div>
  );
}

export default QuizResults;