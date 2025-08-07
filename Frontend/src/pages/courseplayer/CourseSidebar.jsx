// src/pages/courseplayer/CourseSidebar.jsx
import React from 'react';

const getIcon = (lesson, isCurrent) => {   //This function decides which icon to show next to a lesson, based on its state (locked, completed, current, etc.).
    const baseClasses = "w-5 text-center";
    if (lesson.isLocked) return <i className={`fa-solid fa-lock ${baseClasses} text-gray-400`}></i>;
    if (lesson.isCompleted) return <i className={`fa-solid fa-check-circle ${baseClasses} text-green-500`}></i>;
    
    
    if (lesson.pdfUrl) return <span className={baseClasses} role="img" aria-label="PDF Document"></span>;
    
    if (isCurrent) return <i className={`fa-solid fa-play-circle ${baseClasses} text-indigo-600`}></i>;
    return <i className={`fa-regular fa-circle ${baseClasses} text-gray-400`}></i>;
};

function CourseSidebar({ curriculum, currentLessonId, onSelectLesson }) {
    return (
        <aside className="w-full md:w-96 bg-white border-l border-gray-200 overflow-y-auto p-4 flex-shrink-0">
            {curriculum.map(section => (  //Loop through each section   
            // Section title (like “Section 1: Introduction”), styled as a gray uppercase heading.
                <div key={section.id} className="mb-6">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 px-2">
                        {section.title}
                    </h3>
                    <ul className="space-y-1">
                        {section.lessons.map(lesson => {    //Loop through the lessons in each section.
                            const isCurrent = lesson.id === currentLessonId;   //Boolean flag to determine if this lesson is the currently selected one.
                            // Added 'relative' to allow for absolute positioning of the completion bar
                            let lessonClasses = "flex items-center justify-between p-2 rounded-md text-sm transition-colors relative overflow-hidden";

                            if (lesson.isLocked) {  //This block sets dynamic styling based on lesson state:
                                lessonClasses += " text-gray-400 cursor-not-allowed";
                            } else {
                                if (isCurrent) {
                                    lessonClasses += " bg-indigo-100 text-indigo-700 font-semibold";
                                } else {
                                    lessonClasses += " text-gray-600 hover:bg-gray-100 cursor-pointer";
                                }
                            }
                            
                            return (  //Clickable lesson <li> that changes current lesson (if not locked).  
                             //truncate:to make something shorter by cutting top or bottom
                                <li key={lesson.id} className={lessonClasses} onClick={() => onSelectLesson(lesson)}>  
                                    <div className="flex items-center gap-3 truncate">  
                                        {getIcon(lesson, isCurrent)}
                                        <span className="truncate">{lesson.title}</span>
                                    </div>
                                    
                                    {!lesson.isLocked && lesson.pdfUrl && (  //If lesson has a pdfUrl and is not locked, show a download icon
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

                                    {/* Green completion bar */}
                                    {lesson.isCompleted && (
                                        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-green-500"></div>
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