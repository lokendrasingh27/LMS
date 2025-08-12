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

function CourseSidebar({ curriculum, currentLessonId, onSelectLesson }) {
    return (
        <aside className="w-full md:w-96 bg-[#00173D] border-l border-gray-200 overflow-y-auto p-4 flex-shrink-0 rounded-lg">
            {curriculum.map(section => (
                <div key={section.id} className="mb-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 px-2">
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