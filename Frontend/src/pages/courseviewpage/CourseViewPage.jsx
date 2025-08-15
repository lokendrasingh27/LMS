import React from "react";
import Banner from "./banner";
import Sidebar from "../../components/Sidebar";
import { availableCourses, upcomingCourses } from "./demodata";
import CourseCard from "./coursecard";
import UpcomingCard from "./upcomingcard";

const CourseViewPage = () => {
  return (
    <>
    <Sidebar />
    <Banner />
    <div className="p-6">
       {/* Available Courses */}
      <section>
        <h2 className="text-xl font-bold mb-4">Available Courses</h2>
        <div className="flex gap-4 overflow-x-auto snap-x">
          {availableCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Upcoming Courses */}
      <section>
        <h2 className="text-xl font-bold mb-4">Upcoming Courses</h2>
        <div className="flex gap-4 overflow-x-auto snap-x">
          {upcomingCourses.map((course) => (
            <UpcomingCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default CourseViewPage;
