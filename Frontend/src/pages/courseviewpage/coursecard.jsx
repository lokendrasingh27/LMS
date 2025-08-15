import React from "react";
import { motion } from "framer-motion";
import { Clock, GraduationCap, Tag } from "lucide-react";
import Badge from "./Badge";
import StarRating from "./starRating";

export default function CourseCard({ course }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -3 }}
      className="min-w-[240px] max-w-[260px] snap-start rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-36 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-zinc-100 to-zinc-200">
        {course.image ? (
          <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-500">
            <GraduationCap className="h-8 w-8" />
          </div>
        )}
        {course.badge && (
          <div className="absolute left-2 top-2">
            <Badge tone={course.badge === "Hot" ? "warning" : "primary"}>{course.badge}</Badge>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug">{course.title}</h3>
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600">
          {course.category && <span className="inline-flex items-center gap-1"><Tag className="h-3.5 w-3.5" />{course.category}</span>}
          {course.level && <Badge tone="neutral">{course.level}</Badge>}
        </div>
        <div className="flex items-center justify-between text-xs text-zinc-600">
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration ?? "—"}</span>
          <StarRating rating={course.rating ?? 0} />
        </div>
        <button className="mt-1 w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-100">View details</button>
      </div>
    </motion.div>
  );
}