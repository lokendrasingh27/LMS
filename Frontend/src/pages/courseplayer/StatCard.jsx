import React from "react";

const StatCard = ({ icon: Icon, title, value, color }) => {
  return (
    <div className="bg-white p-4 md:p-5 rounded-xl shadow-sm flex items-center gap-4 md:gap-5">
      <div className={`p-3 rounded-full ${color || "bg-gray-400"}`}>
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>
      <div>
        <p className="text-xs md:text-sm text-zinc-600">{title || "---"}</p>
        <p className="text-lg md:text-2xl font-bold text-zinc-800">
          {value || "--"}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
