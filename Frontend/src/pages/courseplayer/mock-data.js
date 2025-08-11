// src/mock-data.js
export const courseData = {
  title: "The Ultimate Guide to React",
  progress: 0,
  curriculum: [
    {
      id: "s1",
      title: "Section 1: Introduction",
      lessons: [
        { id: 1, title: "Welcome!", type: "video", isCompleted: false, isLocked: false, pdfUrl: null },
        { id: 2, title: "Course Overview", type: "video", isCompleted: false, isLocked: false, pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
      ],
    },
    {
      id: "s2",
      title: "Section 2: React Basics",
      lessons: [
        { id: 3, title: "Components & Props", type: "video", isCompleted: false, isLocked: true, pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
        { id: 4, title: "State & Hooks", type: "text", isCompleted: false, isLocked: true, pdfUrl: null },
        { id: 5, title: "Handling Events", type: "video", isCompleted: false, isLocked: true, pdfUrl: null },
        {
          id: 6,
          title: "Your First Quiz",
          type: "quiz",
          isCompleted: false,
          isLocked: true,
          pdfUrl: null,
          timeLimit: 120, // Time limit in seconds
          questions: [
            { id: 'q1', text: 'What does JSX stand for?', options: ['JavaScript XML', 'JavaScript Extension', 'JSON Syntax'], correctAnswer: 'JavaScript XML' },
            { id: 'q2', text: 'Which hook is used to add state to a functional component?', options: ['useEffect', 'useState', 'useContext'], correctAnswer: 'useState' }
          ]
        },
      ],
    },
    {
      id: "s3",
      title: "Section 3: Advanced Topics",
      lessons: [
        {
          id: 7,
          title: "Submit Your First Component",
          type: "assignment",
          instructions: "Please create a simple 'HelloWorld' React component, zip the file, and submit it here.",
          isCompleted: false,
          isLocked: true,
          assignmentStatus: 'pending',
          pdfUrl: null,
        },
        { id: 8, title: "Context API", type: "video", isCompleted: false, isLocked: true, pdfUrl: null },
        { id: 9, title: "Performance Optimization", type: "text", isCompleted: false, isLocked: true, pdfUrl: null },
      ],
    },
  ],
};