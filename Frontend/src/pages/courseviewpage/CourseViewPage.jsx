import React from "react";
import Banner from "./banner";
import Sidebar from "../../components/Sidebar";
import { availableCourses, upcomingCourses } from "./demodata";
import CourseCard from "./coursecard";
import UpcomingCard from "./upcomingcard";

const CourseViewPage = () => {
  return (
    <div className="courseView w-[81vw] p-6 h-[100vh]  overflow-y-auto">

      

      {/* Main Content */}
      <div className="   overflow-y-auto">
        <Banner />

        {/* Available Courses */}
        <section className="mb-14">
          <div className="flex items-center justify"><h2 className="text-xl px-4 py-2 bg-[#006D77] rounded-xl text-white font-semibold mb-8">Our Courses</h2></div>
          <div className="flex gap-4 overflow-x-auto snap-x">
            {availableCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Upcoming Courses */}
        <section className="m-6 ">
         <div className=" mb-6  flex items-center ">
           <h2 className="text-xl px-4 py-2 bg-[#006D77] rounded-xl text-white font-semibold mb-4">Upcoming Courses</h2>
         </div>
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
