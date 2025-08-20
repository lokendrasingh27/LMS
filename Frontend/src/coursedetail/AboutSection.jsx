import React from 'react';

const AboutSection = ({ description }) => (
  <div className="bg-white border-l-4 border-[#002147] p-6 rounded shadow mb-6">
    <h2 className="text-xl font-semibold text-[#002147] mb-2">About the Course</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default AboutSection;
