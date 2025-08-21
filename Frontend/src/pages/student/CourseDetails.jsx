import React from "react";
import { rupee } from "./utils"; 
import { BlueBadge, Pill } from "./Badges"; 

const CourseDetails = ({ course, onEnroll }) => {
  return (
    <div>
      <img src={course.thumbnail} alt="thumb" className="w-full h-44 object-cover rounded-xl" />
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <BlueBadge>Top rated · {course.rating}/5</BlueBadge>
        <Pill>{course.category}</Pill>
        <Pill>{course.level}</Pill>
        <Pill>{course.duration}</Pill>
      </div>
      <h2 className="mt-3 text-2xl font-bold text-slate-800">{course.title}</h2>
      <p className="mt-2 text-slate-600">{course.short}</p>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-slate-700">What you'll learn</h4>
        <ul className="mt-2 grid gap-2">
          {course.syllabus.map((s, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5" /> {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-2xl font-extrabold text-blue-700">{rupee(course.price)}</div>
          <div className="text-xs text-slate-500">Instructor: {course.instructor} · {course.students.toLocaleString()} learners</div>
        </div>
        <button onClick={onEnroll} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 shadow">
          <CreditCard className="h-4 w-4"/> Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
