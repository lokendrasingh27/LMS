// src/student/Badges.js
import React from "react";

export const Pill = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-700 border-blue-300",
    green: "bg-green-100 text-green-700 border-green-300",
    red: "bg-red-100 text-red-700 border-red-300",
    gray: "bg-gray-100 text-gray-700 border-gray-300",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-300",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors[color]}`}
    >
      {children}
    </span>
  );
};
export const BlueBadge = ({ children }) => (
  <Pill color="blue">{children}</Pill>
);


