// src/pages/courseplayer/CoursePlayerPage.jsx
import React, { useState, useEffect } from "react";
import CourseHeader from "./CourseHeader";
import ContentPane from "./ContentPane";
import CourseSidebar from "./CourseSidebar";

// Hardcoded data that was previously in mock-data.js
const courseData = {
  title: "The Ultimate Guide to React",
  progress: 0,
  curriculum: [
    {
      id: "s1",
      title: "Section 1: Introduction",
      lessons: [
        { id: 1, title: "Welcome!", type: "video", isCompleted: false, pdfUrl: null },
        { id: 2, title: "Course Overview", type: "video", isCompleted: false, pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      ],
    },
    {
      id: "s2",
      title: "Section 2: React Basics",
      lessons: [
        { id: 3, title: "Components & Props", type: "video", isCompleted: false, pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
        { id: 4, title: "State & Hooks", type: "text", isCompleted: false, pdfUrl: null },
        { id: 5, title: "Handling Events", type: "video", isCompleted: false, pdfUrl: null },
        {
          id: 6,
          title: "Your First Quiz",
          type: "quiz",
          isCompleted: false,
          pdfUrl: null,
          timeLimit: 120, // Time limit in seconds
          questions: [
            { id: 'q1', text: 'What does JSX stand for?', options: ['JavaScript XML', 'JavaScript Extension', 'JSON Syntax'], correctAnswer: 'JavaScript XML' },
            { id: 'q2', text: 'Which hook is used to add state to a functional component?', options: ['useEffect', 'useState', 'useContext'], correctAnswer: 'useState' }
          ]
        },
        {
          id: 7,
          title: "Submit Your First Component",
          type: "assignment",
          instructions: "Please create a simple 'HelloWorld' React component, zip the file, and submit it here.",
          isCompleted: false,
          assignmentStatus: 'pending',
          pdfUrl: null,
        },
      ],
    },
    {
      id: "s3",
      title: "Section 3: Advanced Topics",
      lessons: [
        {
          id: 8,
          title: "Submit Your First Component",
          type: "assignment",
          instructions: "Please create a simple 'HelloWorld' React component, zip the file, and submit it here.",
          isCompleted: false,
          assignmentStatus: 'pending',
          pdfUrl: null,
        },
        { id: 9, title: "Context API", type: "video", isCompleted: false, pdfUrl: null },
        { id: 10, title: "Performance Optimization", type: "text", isCompleted: false, pdfUrl: null },
      ],
    },
  ],
};


const loadCourseFromStorage = () => {
  try {
    const savedCourse = localStorage.getItem('courseProgress');
    // It will use the hardcoded courseData if nothing is in localStorage
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
         {isSidebarOpen && <div onClick={toggleSidebar} className="md:hidden fixed inset-0 z-40"></div>}
      </div>
    </div>
  );
}

export default CoursePlayerPage;