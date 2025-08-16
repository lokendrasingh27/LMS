import React from "react";
import Banner from "./banner";
import Sidebar from "../../components/Sidebar";
import { availableCourses, upcomingCourses } from "./demodata";
import CourseCard from "./coursecard";
import UpcomingCard from "./upcomingcard";

const CourseViewPage = () => {
  return (
    <div className="flex min-h-screen">

      <div className="w-72 flex-shrink-0 fixed h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-72 m overflow-y-auto">
        <Banner />

        {/* Available Courses */}
        <section className="m-6">
          <h2 className="text-xl font-bold mb-4">Available Courses</h2>
          <div className="flex gap-4 overflow-x-auto snap-x">
            {availableCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Upcoming Courses */}
        <section className="m-6">
          <h2 className="text-xl font-bold mb-4">Upcoming Courses</h2>
          <div className="flex gap-4 overflow-x-auto snap-x">
            {upcomingCourses.map((course) => (
              <UpcomingCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseViewPage;
