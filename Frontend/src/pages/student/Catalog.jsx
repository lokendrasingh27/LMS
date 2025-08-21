import React from "react";
import CourseCard from "./CourseCard";
import EmptyState from "./EmptyState";
import { Search } from "lucide-react";

const Catalog = ({ query, setQuery, categories, levels, category, setCategory, level, setLevel, courses, onOpen, onEnroll }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="max-w-2xl w-full">
          <label className="block text-sm font-medium text-slate-700 mb-1">Search courses</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, topic or keyword"
              className="w-full rounded-xl border border-slate-300 bg-white pl-10 pr-3 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {levels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} onOpen={() => onOpen(c)} onEnroll={() => onEnroll(c)} />
        ))}
      </div>

      {courses.length === 0 && (
        <EmptyState
          icon={Search}
          title="No courses match your search"
          subtitle="Try clearing filters or searching for a different keyword."
        />
      )}
    </div>
  );
};

export default Catalog;
