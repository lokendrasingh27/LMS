import React from "react";
import EmptyState from "./EmptyState"; 
import CourseCard from "./CourseCard"; 
import { BookOpen, Play } from "lucide-react";

const MyCourses = ({ courses, enrolled, onOpen }) => {
  const myCourseIds = new Set(enrolled.map((e) => e.courseId));
  const myCourses = courses.filter((c) => myCourseIds.has(c.id));

  if (myCourses.length === 0) {
    return (
      <EmptyState
        icon={BookOpen}
        title="No enrollments yet"
        subtitle="Browse the catalog and enroll to start learning on Gradix."
        cta={<><Search className="h-4 w-4"/> Explore Courses</>}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {myCourses.map((c) => (
        <CourseCard key={c.id} course={c} onOpen={() => onOpen(c)} />
      ))}
    </div>
  );
};

export default MyCourses;
