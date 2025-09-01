import React from 'react';
import { RxCross2 } from "react-icons/rx";

function CourseSidebar({ isOpen, onClose }) {
    const sidebarClasses = `
      w-80 md:w-96 bg-[#00173D] border-l border-gray-200 overflow-y-auto p-4 flex-shrink-0
      fixed top-0 right-0 h-full z-50 transform transition-transform duration-300 ease-in-out
      md:static md:transform-none md:rounded-none
      ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
    `;

    return (
        <>

            {/* Sidebar */}
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
                        <RxCross2 className="text-2xl" />
                    </button>
                </div>
            </aside>
        </>
    );
}

export default CourseSidebar;