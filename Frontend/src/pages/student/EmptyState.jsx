import React from "react";

const EmptyState = ({ icon: Icon, title, subtitle, cta, onClick }) => (
  <div className="grid place-items-center text-center py-16 px-4">
    <div className="rounded-2xl p-6 bg-blue-50 text-blue-700 ring-1 ring-blue-200 inline-block">
      {Icon && <Icon className="h-8 w-8 mx-auto" />}
    </div>
    <h3 className="mt-4 text-lg font-semibold text-slate-800">{title}</h3>
    <p className="mt-1 text-slate-500 max-w-md">{subtitle}</p>
    {cta && (
      <button 
        onClick={onClick} 
        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 shadow transition-colors"
      >
        {cta}
      </button>
    )}
  </div>
);

export default EmptyState;