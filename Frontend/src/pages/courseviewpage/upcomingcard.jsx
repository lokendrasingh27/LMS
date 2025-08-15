import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Tag, Flame } from "lucide-react";
import Badge from "./Badge";

export default function UpcomingCard({ course }) {
  return (
    <motion.div layout whileHover={{ y: -2 }} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200">
          {course.image ? (
            <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-zinc-500">
              <CalendarDays className="h-6 w-6" />
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="truncate text-sm font-semibold">{course.title}</h4>
            {course.badge && <Badge tone={course.badge === "Hot" ? "warning" : "primary"}>{course.badge}</Badge>}
            {course.level && <Badge tone="neutral">{course.level}</Badge>}
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
            {course.category && <span className="inline-flex items-center gap-1"><Tag className="h-3.5 w-3.5" />{course.category}</span>}
            {course.duration && <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>}
            <span className="inline-flex items-center gap-1"><Flame className="h-3.5 w-3.5" /> Starts {new Date(course.startDate).toLocaleDateString()}</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button className="rounded-xl bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700">Notify me</button>
            <button className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 hover:bg-zinc-50">View syllabus</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}