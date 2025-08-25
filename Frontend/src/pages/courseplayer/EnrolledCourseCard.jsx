import React from 'react';
import { motion } from 'framer-motion';

const EnrolledCourseCard = ({ course }) => {
  const isCompleted = course.progress === 100;

  return (
    <motion.div 
      layout 
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col min-w-[280px] snap-start"
    >
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-sm text-zinc-500">{course.category}</p>
        <h3 className="text-md font-bold text-zinc-800 mt-1 flex-grow">{course.title}</h3>
        <p className="text-xs text-zinc-500 mt-2">by {course.instructor}</p>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium text-zinc-600">
              {isCompleted ? 'Completed' : 'Progress'}
            </span>
            <span className={`text-xs font-semibold ${isCompleted ? 'text-green-600' : 'text-[#006D77]'}`}>
              {course.progress}%
            </span>
          </div>
          <div className="w-full bg-zinc-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-[#006D77]'}`} 
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
        
        <button className={`w-full mt-6 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors ${isCompleted ? 'bg-zinc-600 hover:bg-zinc-700' : 'bg-[#006D77] hover:bg-[#005c63]'}`}>
          {isCompleted ? 'Review Course' : 'Continue Learning'}
        </button>
      </div>
    </motion.div>
  );
};

export default EnrolledCourseCard;