import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import CourseCard from "../courseviewpage/coursecard";
import { setCourse } from "../../redux/courseSlice";
import { Link, NavLink } from "react-router-dom"; // Import Link for navigation

const Dashboard = () => {
  const { user } = useSelector((store) => store.auth);
  const [totalAssignments, setTotalAssignments] = useState(0);
  const [totalQuizzes, setTotalQuizzes] = useState(0);
  // ✅ State for storing courses, loading, and error status
  const courses = useSelector((store) => store.course.course ?? []);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch data when the component mounts
  useEffect(() => {
    const fetchInstructorCourses = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:5000/api/course", // Your endpoint to get creator's courses
          { withCredentials: true }
        );
        if (response.data.success) {
          dispatch(setCourse(response.data.courses));
          let assignmentsCount = 0;
          let quizzesCount = 0;

          courses.forEach((course) => {
            course.lectures.forEach((lecture) => {
              assignmentsCount += lecture.assignments
                ? lecture.assignments.length
                : 0;
              quizzesCount += lecture.quizzes ? lecture.quizzes.length : 0;
            });
          });

          setTotalAssignments(assignmentsCount);
          setTotalQuizzes(quizzesCount);
        }
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        setError("Could not load your courses.");
      } finally {
        setLoading(false);
      }
    };

    fetchInstructorCourses();
  }, []);
  const renderCourses = () => {
    if (loading) {
      return <p>Loading your courses...</p>;
    }
    if (error) {
      return <p className="text-red-500">{error}</p>;
    }
    if (courses.length === 0) {
      return (
        <p className="text-gray-600">You haven't created any courses yet.</p>
      );
    }
    return (
      <div className="flex gap-4 flex-wrap">
        {courses.map((course) => (
          // ✅ Using your CourseCard to display each course
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    );
  }; // Empty array ensures this runs only once on mount
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <>
      <div className="flex h-[100vh] overflow-y-auto md:h-screen bg-[#E3F1F1]">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Dashboard Content */}
          <main className="p-6 space-y-6">
            {/* Welcome Section */}
            <section className="bg-[#15315B] text-white rounded-lg p-6">
              <h1 className="text-2xl font-bold">
                Welcome back, {user?.name}!
              </h1>
              <Link to="/courses">
                {" "}
                {/* Link to your course catalog page */}
                <NavLink to="/">
                <button className="mt-4 bg-[#006D77] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#B3E5FC] hover:text-black">
                  Browse New Courses
                </button>
                </NavLink>
              </Link>
            </section>
            {/* Quick Stats - You can make these dynamic later */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-[#006D77] shadow rounded-lg p-4 text-white text-center">
                {/* ✅ Dynamically display the total course count */}
                <h2 className="text-xl font-bold text-white">
                  {loading ? "..." : courses.length}
                </h2>
                <p className="text-white">Total Courses Created</p>
              </div>
              {/* Other static stat cards */}
              <div className="bg-[#006D77] shadow rounded-lg p-4 text-white text-center">
                <h2 className="text-xl font-bold text-white">
                  {loading ? "..." : totalAssignments}
                </h2>
                <p className="text-white">Assignments Created</p>
              </div>
              <div className="bg-[#006D77] shadow rounded-lg p-4 text-white text-center">
                <h2 className="text-xl font-bold text-white">
                  {loading ? "..." : totalQuizzes}
                </h2>
                <p className="text-white">Quizzes Created</p>
              </div>
              <div className="bg-[#006D77] shadow rounded-lg p-4 text-center">
              <p className="text-xl font-bold text-white">
                  ₹1000
                </p>
                <p className="text-white">Total revenue </p>
                
              </div>
            </section>
            {/* Active Courses */}
            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Your Courses
              </h2>
              {renderCourses()}
            </section>
            {/* Upcoming Deadlines */}
            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-4">
                Upcoming Deadlines
              </h2>

              <ul className="space-y-4">
                {[
                  { title: "Assignment 1", due: "Jan 15, 2025" },

                  { title: "Quiz 2", due: "Jan 18, 2025" },
                ].map((deadline, index) => (
                  <li
                    key={index}
                    className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
                  >
                    <span className="font-semibold text-gray-700">
                      {deadline.title}
                    </span>
                    <span className="text-gray-500">Due: {deadline.due}</span> 
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
