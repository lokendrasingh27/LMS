import React from "react";
import { rupee } from "./utils"; 
import { BlueBadge, Pill } from "./Badges"; 

const CourseDetails = ({ course, onEnroll }) => {
  return (
    <div>
      <img src={course.thumbnail} alt="thumb" className="w-full h-44 object-cover rounded-xl" />
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <BlueBadge>Top rated · {course.rating}/5</BlueBadge>
        <Pill>{course.category}</Pill>
        <Pill>{course.level}</Pill>
        <Pill>{course.duration}</Pill>
      </div>
      <h2 className="mt-3 text-2xl font-bold text-slate-800">{course.title}</h2>
      <p className="mt-2 text-slate-600">{course.short}</p>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-slate-700">What you'll learn</h4>
        <ul className="mt-2 grid gap-2">
          {course.syllabus.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" /> {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-2xl font-extrabold text-blue-700">{rupee(course.price)}</div>
          <div className="text-xs text-slate-500">Instructor: {course.instructor} · {course.students.toLocaleString()} learners</div>
        </div>
        <button onClick={onEnroll} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 shadow">
          <CreditCard className="h-4 w-4"/> Enroll Now
        </button>
      </div>
    </div>
  );
};
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  
  // Dummy course data - in a real app you would fetch this based on the ID
  const course = {
    id: 1,
    title: 'Introduction to React',
    instructor: 'Sarah Johnson',
    category: 'Web Development',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.7,
    students: 1245,
    description: 'This comprehensive React course will take you from the basics to building complete applications. Learn about components, hooks, context API, and modern React best practices. By the end, you\'ll be able to build dynamic web applications with confidence.',
    image: 'https://placehold.co/800x450?text=React+Course',
    instructorBio: 'Sarah has been a frontend developer for 10 years, specializing in React and TypeScript. She has worked with major tech companies and has helped thousands of students learn web development.',
    modules: [
      {
        id: 1,
        title: 'React Fundamentals',
        lessons: [
          'Introduction to React',
          'Components and Props',
          'State Management',
          'Handling Events'
        ]
      },
      {
        id: 2,
        title: 'Hooks in Depth',
        lessons: [
          'useState and useEffect',
          'useContext',
          'Custom Hooks',
          'useReducer'
        ]
      },
      {
        id: 3,
        title: 'Advanced Patterns',
        lessons: [
          'Performance Optimization',
          'Code Splitting',
          'Server-Side Rendering',
          'Testing React Apps'
        ]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Course Header */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{course.title}</h1>
          <p className="text-gray-600 mb-4">Taught by {course.instructor}</p>
          
          <div className="flex items-center mb-6">
            <div className="flex items-center mr-6">
              <span className="text-yellow-500">★</span>
              <span className="ml-1 text-gray-700">{course.rating} ({course.students} students)</span>
            </div>
            <span className="text-gray-600">{course.duration}</span>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Course Description</h2>
            <p className="text-gray-700">{course.description}</p>
          </div>
        </div>
        
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={course.image} 
              alt={`Course cover for ${course.title}`} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Enroll Now
              </button>
              
              <div className="mt-4">
                <h3 className="font-medium text-gray-800 mb-2">Course Details</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="text-gray-800 font-medium">{course.level}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="text-gray-800 font-medium">{course.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="text-gray-800 font-medium">{course.duration}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Instructor Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">About the Instructor</h2>
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray(400)">
            <span className="text-2xl">👤</span>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">{course.instructor}</h3>
            <p className="text-gray-700 mt-2">{course.instructorBio}</p>
          </div>
        </div>
      </div>
      
      {/* Course Curriculum */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Course Curriculum</h2>
        
        <div className="space-y-4">
          {course.modules.map((module) => (
            <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="font-medium text-gray-800">{module.title}</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="p-4 hover:bg-gray-50">
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">{(index + 1)}</span>
                      <span>{lesson}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default CourseDetails;
