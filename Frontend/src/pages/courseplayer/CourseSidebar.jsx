// src/pages/courseplayer/CourseSidebar.jsx
import React from 'react';

const getIcon = (lesson, isCurrent) => {
    const baseClasses = "w-5 text-center";
    if (lesson.isCompleted) return <i className={`fa-solid fa-check-circle ${baseClasses} text-green-500`}></i>;
    if (lesson.type === 'assignment') return <i className={`fa-solid fa-file-arrow-up ${baseClasses} text-gray-500`}></i>;
    if (lesson.pdfUrl) return <span className={baseClasses} role="img" aria-label="PDF Document"></span>;
    if (isCurrent) return <i className={`fa-solid fa-play-circle ${baseClasses} text-indigo-600`}></i>;
    return <i className={`fa-regular fa-circle ${baseClasses} text-gray-400`}></i>;
};

function CourseSidebar({ curriculum, currentLessonId, onSelectLesson, isOpen, onClose }) {

    const sidebarClasses = `
      w-80 md:w-96 bg-[#00173D] border-l border-gray-200 overflow-y-auto p-4 flex-shrink-0
      fixed top-0 right-0 h-full z-50 transform transition-transform duration-300 ease-in-out
      md:static md:transform-none md:rounded-none
      ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
    `;

    return (
        <aside className={sidebarClasses}>
            <div className="flex justify-between items-center mb-6 md:hidden">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider px-2">
                    Course Content
                </h3>
                <button 
                    onClick={onClose} 
                    className="text-white hover:text-indigo-200"
                    aria-label="Close sidebar"
                >
                    <i className="fa-solid fa-xmark text-2xl"></i>
                </button>
            </div>
            {curriculum.map(section => (
                <div key={section.id} className="mb-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 px-2 hidden md:block">
                        {section.title}
                    </h3>
                    <ul className="space-y-1">
                        {section.lessons.map(lesson => {
                            const isCurrent = lesson.id === currentLessonId;
                            let lessonClasses = "flex items-center justify-between bg-[#C2E8F8] p-2 rounded-md text-sm font-medium transition-colors relative overflow-hidden";

                            if (isCurrent) {
                                lessonClasses += " bg-indigo-100 font-black text-xl font-bold";
                            } else {
                                lessonClasses += " text-black-600 hover:bg-gray-100 cursor-pointer";
                            }
                            
                            return (
                                <li key={lesson.id} className={lessonClasses} onClick={() => onSelectLesson(lesson)}>
                                    <div className="flex items-center gap-3 truncate ">
                                        {getIcon(lesson, isCurrent)}
                                        <span className="truncate">{lesson.title}</span>
                                    </div>
                                    
                                    {lesson.pdfUrl && (
                                        <a
                                            href={lesson.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-1 rounded-full text-gray-500 hover:text-indigo-600"
                                            title="Download PDF"
                                        >
                                            <i className="fa-solid fa-download">📄</i>
                                        </a>
                                    )}

                                    {lesson.isCompleted && (
                                        <div className="absolute bottom-0 left-0 h-2.5 w-full bg-green-500"></div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </aside>
    );
}

export default CourseSidebar;