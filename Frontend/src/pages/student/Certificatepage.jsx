import React from "react";

const CertificatePage = ({ studentName, courseName, instructorName }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative bg-white w-[1000px] h-[700px] shadow-2xl border-[12px] border-blue-200 p-10">
        {/* Inner border */}
        <div className="absolute inset-6 border-2 border-blue-400"></div>

        {/* Top Right Wave */}
        <div className="absolute top-0 right-0 w-[250px] h-[200px] bg-gradient-to-l from-blue-900 via-teal-500 to-blue-700 rounded-bl-[150px]"></div>
        
        {/* Bottom Left Wave */}
        <div className="absolute bottom-0 left-0 w-[250px] h-[200px] bg-gradient-to-r from-blue-900 via-teal-500 to-blue-700 rounded-tr-[150px]"></div>

        {/* Certificate Content */}
        <div className="relative z-10 text-center px-12">
          {/* Heading */}
          <h1 className="text-4xl font-extrabold text-blue-900 uppercase tracking-wide drop-shadow-md mb-6">
            Certificate of Completion
          </h1>

          <div className="w-40 border-b-2 border-teal-500 mx-auto mb-6"></div>

          {/* Presented To */}
          <p className="text-xl text-gray-700 mb-4">This is presented to :</p>

          <h2 className="text-5xl font-serif italic text-blue-900 mb-4">
            {studentName}
          </h2>

          <div className="w-52 border-b-2 border-teal-500 mx-auto mb-8"></div>

          {/* Course Details */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            successfully completed a four-month course of <br />
            <span className="text-blue-700 font-semibold">{courseName}</span> at{" "}
            <span className="font-bold">Gradix</span>.
          </p>

          {/* Medal / Badge */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white border-4 border-teal-500 rounded-full flex items-center justify-center">
              <span className="text-teal-500 text-4xl">✔</span>
            </div>
          </div>

          {/* Footer (Instructor & Gradix) */}
          <div className="flex justify-between items-center px-16 mt-12">
            <div className="text-center">
              <p className="text-xl font-bold text-blue-900 uppercase">
                {instructorName}
              </p>
              <p className="text-gray-600">Instructor</p>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold text-blue-900 uppercase">
                Gradix
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage
// <CertificatePage studentName="Sebastian Bennett" courseName="Graphic Designing" instructorName="Howard Ong" />

export default CertificatePage;
