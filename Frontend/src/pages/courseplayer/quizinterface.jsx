import React from "react";

const QuizInterface = ({ quizData, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null); // 'correct' or 'incorrect'

  const currentQuestion = quizData[currentQuestionIndex];

  const handleSelectAnswer = (option) => {
    if (answerStatus) return; // Prevent changing answer after submission
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer!");
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setAnswerStatus("correct");
    } else {
      setAnswerStatus("incorrect");
    }

    // Move to the next question or finish the quiz after a short delay
    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < quizData.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedAnswer(null);
        setAnswerStatus(null);
      } else {
        setIsFinished(true);
        if (onQuizComplete) {
          // Pass the final score to the parent component
          onQuizComplete(score + (isCorrect ? 1 : 0));
        }
      }
    }, 1500); // 1.5-second delay to show feedback
  };

  const getButtonClass = (option) => {
    if (!answerStatus) {
      return "border-gray-300 hover:bg-gray-100";
    }
    const isCorrect = option === currentQuestion.correctAnswer;
    const isSelected = option === selectedAnswer;

    if (isCorrect) return "bg-green-200 border-green-500";
    if (isSelected && !isCorrect) return "bg-red-200 border-red-500";
    return "border-gray-300";
  };

  if (isFinished) {
    return (
      <div className="p-6 bg-white rounded-lg border text-center">
        <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-6">
          Your Final Score:{" "}
          <span className="font-bold text-indigo-600">
            {score} / {quizData.length}
          </span>
        </p>
        <button
          onClick={() => window.location.reload()} // Simple restart logic
          className="w-full mt-4 px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg border">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <h2 className="text-xl md:text-2xl font-bold">
          Question {currentQuestionIndex + 1} of {quizData.length}
        </h2>
        <div className="text-lg font-bold">Score: {score}</div>
      </div>
      <div className="mb-6">
        <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>
        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelectAnswer(option)}
              className={`text-left p-3 rounded-md border-2 transition-colors duration-300 ${getButtonClass(
                option
              )} ${
                selectedAnswer === option && !answerStatus
                  ? "ring-2 ring-indigo-500"
                  : ""
              }`}
              disabled={!!answerStatus}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleSubmitAnswer}
        disabled={!!answerStatus}
        className="w-full mt-4 px-6 py-3 text-base md:text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 disabled:bg-gray-400"
      >
        {answerStatus ? "Next Question..." : "Submit Answer"}
      </button>
    </div>
  );
};

export default QuizInterface;