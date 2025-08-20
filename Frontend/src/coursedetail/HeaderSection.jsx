import React from 'react';

const HeaderSection = ({ title, instructor }) => {
  return (
    <div className="bg-[#C2E8F8] p-6 rounded-lg shadow mb-6">
      <h1 className="text-3xl font-bold text-[#00173D]">{title}</h1>
      <p className="mt-2 text-[#00173D] text-sm">By {instructor}</p>
      <div className="flex flex-col sm:flex-row sm:items-center mt-4 gap-4">
        <button className="bg-[#fc0000] text-[#E8F1F2] px-6 py-2 rounded hover:opacity-90 transition">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default HeaderSection;
