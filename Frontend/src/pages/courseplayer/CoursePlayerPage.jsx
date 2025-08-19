// src/pages/courseplayer/CoursePlayerPage.jsx
import React, { useState, useEffect } from "react";
import { courseData } from "./mock-data";
import CourseHeader from "./CourseHeader";
import ContentPane from "./ContentPane";
import CourseSidebar from "./CourseSidebar";

const loadCourseFromStorage = () => {
  try {
    const savedCourse = localStorage.getItem('courseProgress');
    return savedCourse ? JSON.parse(savedCourse) : courseData;
  } catch (error) {
    console.error("Could not load course from localStorage", error);
    return courseData;
  }
};

function CoursePlayerPage() {
  const [course, setCourse] = useState(loadCourseFromStorage);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizResult, setQuizResult] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    localStorage.setItem('courseProgress', JSON.stringify(course));
  }, [course]);
  
  useEffect(() => {
    const allLessons = course.curriculum.flatMap((s) => s.lessons);
    if (!currentLesson && allLessons.length > 0) {
        setCurrentLesson(allLessons[0]);
    }
  }, [course.curriculum, currentLesson]);

  useEffect(() => {
    if (quizMode && timeLeft > 0) {
      const timerId = setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);
      return () => clearInterval(timerId);
    } else if (quizMode && timeLeft === 0) {
      handleSubmitQuiz();
    }
  }, [quizMode, timeLeft]);
  
  useEffect(() => {
    setQuizMode(false);
    setQuizResult(null);
  }, [currentLesson]);
  
  const handleSelectLesson = (lesson) => {
    setCurrentLesson(lesson);
    if (window.innerWidth < 768) { // md breakpoint
      setSidebarOpen(false);
    }
  };

  const handleSelectPreviousLesson = () => {
    const allLessons = course.curriculum.flatMap(s => s.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex > 0) {
      setCurrentLesson(allLessons[currentIndex - 1]);
    }
  };

  const handleAnswerChange = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleStartQuiz = () => {
    setAnswers({});
    setTimeLeft(currentLesson.timeLimit);
    setQuizMode(true);
    setQuizResult(null);
  };

  const handleToggleLessonComplete = () => {
    updateLessonCompletion(currentLesson.id, !currentLesson.isCompleted);
  };
  
  const handleSubmitQuiz = () => {
    if (!quizMode) return;
    let correctCount = 0;
    currentLesson.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correctCount++;
    });
    const score = Math.round((correctCount / currentLesson.questions.length) * 100);
    setQuizResult({ score, answers, timeUp: timeLeft === 0 });
    setQuizMode(false);
    setTimeLeft(null);
    
    if (!currentLesson.isCompleted) {
      updateLessonCompletion(currentLesson.id, true);
    }
  };
  
  const handleAssignmentSubmit = (file) => {
    console.log("Assignment submitted:", file.name);
    updateLessonCompletion(currentLesson.id, true, true);
  };

  const handleContinue = () => {
    const allLessons = course.curriculum.flatMap(s => s.lessons);
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex + 1 < allLessons.length) {
      const nextLesson = allLessons[currentIndex + 1];
      setCurrentLesson(nextLesson);
    }
  };

  const updateLessonCompletion = (lessonId, isCompleted, isAssignment = false) => {
    const allLessons = course.curriculum.flatMap(s => s.lessons);
    const newCurriculum = course.curriculum.map(section => ({
      ...section,
      lessons: section.lessons.map(lesson => {
        if (lesson.id === lessonId) {
          const updatedLesson = { ...lesson, isCompleted };
          if (isAssignment) updatedLesson.assignmentStatus = 'submitted';
          return updatedLesson;
        }
        return lesson;
      })
    }));
    const completedCount = newCurriculum.flatMap(s => s.lessons).filter(l => l.isCompleted).length;
    const newProgress = Math.round((completedCount / allLessons.length) * 100);
    setCourse(prevCourse => ({
      ...prevCourse,
      curriculum: newCurriculum,
      progress: newProgress
    }));
    setCurrentLesson(prev => ({
        ...prev,
        isCompleted,
        assignmentStatus: isAssignment ? 'submitted' : prev.assignmentStatus,
    }));
  };

  if (!currentLesson) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Loading Course...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-[#E3F1F1] font-sans">
      <CourseHeader title={course.title} progress={course.progress} onToggleSidebar={toggleSidebar}/>
      <div className="relative flex flex-grow overflow-hidden">
        <ContentPane
          lesson={currentLesson}
          quizMode={quizMode}
          quizResult={quizResult}
          answers={answers}
          timeLeft={timeLeft}
          onStartQuiz={handleStartQuiz}
          onSubmitQuiz={handleSubmitQuiz}
          onContinue={handleContinue}
          onToggleComplete={handleToggleLessonComplete}
          onSelectPreviousLesson={handleSelectPreviousLesson}
          onAssignmentSubmit={handleAssignmentSubmit}
          onAnswerChange={handleAnswerChange}
        />
        <CourseSidebar
          curriculum={course.curriculum}
          currentLessonId={currentLesson.id}
          onSelectLesson={handleSelectLesson}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
         {/* This transparent overlay captures outside clicks to close the sidebar */}
         {isSidebarOpen && <div onClick={toggleSidebar} className="md:hidden fixed inset-0 z-40"></div>}
      </div>
    </div>
  );
}

export default CoursePlayerPage;