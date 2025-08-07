// src/pages/courseplayer/ContentPane.jsx
import React from 'react';
import QuizInterface from './quizinterface';
import QuizResults from './quizresults'

function ContentPane({ lesson, quizMode, onStartQuiz, onSubmitQuiz, quizResult, onRetakeQuiz, onToggleComplete, onContinue }) {
  const renderContent = () => {
    if (lesson.type === 'quiz') {
      if (quizResult) {
        return <QuizResults result={quizResult} questions={lesson.questions} onRetakeQuiz={onRetakeQuiz} onContinue={onContinue}/>;
      }
      if (quizMode) {
        return <QuizInterface questions={lesson.questions} onSubmitQuiz={onSubmitQuiz} />;   
      }
    }
    
    switch (lesson.type) {
      case 'video':
        return (
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/SqcY0GlETPk" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'text':
        return (
            <div className="p-6 bg-white rounded-lg border prose">
                <p>This is a text-based lesson about <strong>{lesson.title}</strong>. Here you would find detailed explanations, code snippets, and other written materials.</p>
            </div>
        );
      case 'quiz':
         return (
            <div className="p-10 bg-white rounded-lg border text-center">
                <h2 className="text-2xl font-bold mb-4">Quiz: {lesson.title}</h2>
                <button 
                    onClick={onStartQuiz}
                    className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700"
                >
                    Start Quiz  
                </button>
            </div>
         );
      default:
        return <div className="p-6 bg-red-100 text-red-700 rounded-lg">Content type not supported.</div>;
    }
  };

  return (
    <main className="flex-grow p-4 md:p-8 overflow-y-auto">  
      {renderContent()}   
      
      {!(lesson.type === 'quiz' && (quizMode || quizResult)) && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">{lesson.title}</h2>
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <button className="w-full md:w-auto px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 flex items-center justify-center gap-2">
              <i className="fa-solid fa-arrow-left"></i> Previous Lesson
            </button>
            
            {lesson.isCompleted ? (
              <button 
                onClick={onToggleComplete}
                className="w-full md:w-auto px-4 py-2 text-sm font-semibold text-green-800 bg-green-100 border border-green-300 rounded-md shadow-sm hover:bg-green-200 flex items-center justify-center gap-2"
              >
                Completed <i className="fa-solid fa-check-circle"></i>
              </button>
            ) : (
              <button 
                onClick={onToggleComplete}
                className="w-full md:w-auto px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 flex items-center justify-center gap-2">
                Mark as Complete <i className="fa-solid fa-check"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default ContentPane;