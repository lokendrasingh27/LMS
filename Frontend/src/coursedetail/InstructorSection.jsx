import React from 'react';

const InstructorSection = ({ name, bio, imgUrl }) => (
  <div className="bg-white p-6 rounded shadow mb-6 flex flex-col sm:flex-row">
    <img src={imgUrl} alt="Instructor" className="rounded w-32 h-32 object-cover mr-6 mb-4 sm:mb-0 border-2 border-[#002147]" />
    <div>
      <h2 className="text-xl font-semibold text-[#002147]">{name}</h2>
      <p className="mt-2 text-sm text-gray-700">{bio}</p>
    </div>
  </div>
);

export default InstructorSection;
