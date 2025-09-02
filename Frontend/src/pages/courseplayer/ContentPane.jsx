import React from "react";

const ContentPane = () => {
  return (
    <main className="contentpane flex-grow  overflow-y-auto p-4 ">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/"
          title="Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-5 pt-6 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl ml-2  font-bold text-[#00173D]">
          Lesson Title
        </h2>
        <div className="mt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <button className="w-full md:w-auto px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm">
            Previous Lesson
          </button>
          <button className="w-full md:w-auto px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm">
            Mark as Complete
          </button>
        </div>
      </div>
    </main>
  );
};

export default ContentPane;
