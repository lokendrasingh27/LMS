import React from 'react';

const StatCard = ({ icon, title, value, color }) => {
  const IconComponent = icon;
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-5">
      <div className={`p-3 rounded-full ${color}`}>
        <IconComponent className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-sm text-zinc-600">{title}</p>
        <p className="text-2xl font-bold text-zinc-800">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;