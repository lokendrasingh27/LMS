import React from "react";
import { BadgeIndianRupee, ShoppingCart } from "lucide-react";
import { rupee } from "./utils"; 

const CourseCard = ({ course, onOpen, onEnroll }) => {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md overflow-hidden">
      <div className="relative">
        <img src={course.thumbnail} alt={course.title} className="h-40 w-full object-cover" />
        <div className="absolute left-3 top-3 flex gap-2">
          <Pill>{course.category}</Pill>
          <Pill>{course.level}</Pill>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-800 line-clamp-1">{course.title}</h3>
        <p className="mt-1 text-sm text-slate-500 line-clamp-2">{course.short}</p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div className="text-blue-700 font-semibold flex items-center gap-1">
            <BadgeIndianRupee className="h-4 w-4" />
            {rupee(course.price)}
          </div>
          <div className="flex gap-2">
            <button onClick={onOpen} className="rounded-xl px-3 py-2 text-sm border border-slate-200 hover:bg-blue-50">Details</button>
            <button onClick={onEnroll} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 text-sm">
              <ShoppingCart className="h-4 w-4"/> Enroll
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
