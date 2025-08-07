// src/pages/courseplayer/CoursePlayerPage.jsx
import React, { useState, useEffect } from "react";
import { courseData } from "./mock-data";
import CourseHeader from "./CourseHeader";
import ContentPane from "./ContentPane";
import CourseSidebar from "./CourseSidebar";

function CoursePlayerPage() {
  const [course, setCourse] = useState(courseData);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    const firstLesson = course.curriculum
      .flatMap((s) => s.lessons)
      .find((l) => !l.isLocked);
    if (firstLesson) {
      setCurrentLesson(firstLesson);
    }
  }, []); // Run only on initial mount

  useEffect(() => {
    // Reset quiz state when lesson changes
    setQuizMode(false);
    setQuizResult(null);
  }, [currentLesson]);

  const handleSelectLesson = (lesson) => {
    if (!lesson.isLocked) {
      setCurrentLesson(lesson);
    }
  };

  const handleStartQuiz = () => {
    setQuizMode(true);
  };
  
  const handleToggleLessonComplete = () => {
    const allLessons = course.curriculum.flatMap(s => s.lessons);
    const currentLessonIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    const lessonToToggle = allLessons[currentLessonIndex];
    
    const isNowCompleted = !lessonToToggle.isCompleted;

    let nextLesson = null;
    if (currentLessonIndex + 1 < allLessons.length) {
        nextLesson = allLessons[currentLessonIndex + 1];
    }

    const newCurriculum = course.curriculum.map(section => ({
        ...section,
        lessons: section.lessons.map(lesson => {
            // Toggle the current lesson's completion status
            if (lesson.id === lessonToToggle.id) {
                return { ...lesson, isCompleted: isNowCompleted };
            }
            
            // If marking as complete, unlock the next lesson. The re-lock functionality is removed.
            if (isNowCompleted && nextLesson && lesson.id === nextLesson.id) {
              return { ...lesson, isLocked: false };
            }
            
            return lesson;
        })
    }));

    // Recalculate progress
    const completedCount = newCurriculum.flatMap(s => s.lessons).filter(l => l.isCompleted).length;
    const newProgress = Math.round((completedCount / allLessons.length) * 100);

    setCourse({
        ...course,
        curriculum: newCurriculum,
        progress: newProgress,
    });
    
    setCurrentLesson(prev => ({ ...prev, isCompleted: isNowCompleted }));
  };

  const handleSubmitQuiz = (answers) => {
    let correctCount = 0;
    currentLesson.questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    
    const score = Math.round((correctCount / currentLesson.questions.length) * 100);
    setQuizResult({ score, answers });
    setQuizMode(false);

    // If they pass and the lesson isn't already complete, mark it as complete
    if (score >= 70 && !currentLesson.isCompleted) {
        handleToggleLessonComplete();
    }
  };
  
  const handleContinue = () => {
    const allLessons = course.curriculum.flatMap(s => s.lessons);
    const currentLessonIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    const nextLessonId = allLessons[currentLessonIndex + 1]?.id;

    if (nextLessonId) {
        // Find the lesson from the most recent state to ensure lock status is up-to-date
        const nextLesson = course.curriculum.flatMap(s => s.lessons).find(l => l.id === nextLessonId);
        if (nextLesson && !nextLesson.isLocked) {
            setCurrentLesson(nextLesson);
        }
    }
  };

  const handleRetakeQuiz = () => {
    setQuizResult(null);
    setQuizMode(true);
  };

  if (!currentLesson) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Loading Course...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 font-sans">
      <CourseHeader title={course.title} progress={course.progress} />
      <div className="flex flex-grow overflow-hidden">
        <ContentPane
          lesson={currentLesson}
          quizMode={quizMode}
          onStartQuiz={handleStartQuiz}
          onSubmitQuiz={handleSubmitQuiz}
          quizResult={quizResult}
          onRetakeQuiz={handleRetakeQuiz}
          onToggleComplete={handleToggleLessonComplete}
          onContinue={handleContinue}
        />
        <CourseSidebar
          curriculum={course.curriculum}
          currentLessonId={currentLesson.id}
          onSelectLesson={handleSelectLesson}
        />
      </div>
    </div>
  );
}

export default CoursePlayerPage;