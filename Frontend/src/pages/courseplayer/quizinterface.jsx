import React, { useState } from 'react';

function QuizInterface({ questions, onSubmitQuiz }) { //onSubmitQuiz: a callback to send the user's answers to the parent component (e.g., CoursePlayerPage).

  const [answers, setAnswers] = useState({}); //Initializes an empty object to store user-selected answers.

  const handleOptionChange = (questionId, option) => {   // Called when the user selects a radio option. 
    setAnswers({  // //Updates the answers object while keeping existing answers intact using the spread operator.  
      ...answers, 
      [questionId]: option,
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg border">
      <h2 className="text-2xl font-bold mb-6">Quiz in Progress...</h2>
      
      {questions.map((q, index) => (   //Iterates over the questions array.
        <div key={q.id} className="mb-6">
          <p className="font-semibold mb-2">{index + 1}. {q.text}</p>
          <div className="flex flex-col gap-2">
            {q.options.map((option, i) => (   //Loops over each option for the current question.
              <label key={i} className="flex items-center p-2 rounded-md hover:bg-gray-100 cursor-pointer">
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  checked={answers[q.id] === option}   //checked={answers[q.id] === option}: ensures selected option is visually marked.
                  onChange={() => handleOptionChange(q.id, option)}  //onChange: updates the selected answer when user picks an option.
                  className="mr-3"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={() => onSubmitQuiz(answers)}   //On click, calls onSubmitQuiz() with the answers object.
        className="w-full mt-4 px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
      >
        Submit Quiz
      </button>
    </div>
  );
}

export default QuizInterface;