import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar'; 
import StatCard from '../courseplayer/StatCard';
import EnrolledCourseCard from './EnrolledCourseCard';
import { studentData } from '../courseplayer/demodata';
import { Menu, X, Book, CheckCircle, Clock } from 'lucide-react';
import { useSelector } from 'react-redux';

const EnrolledDashboard = () => {

    const  { user} = useSelector((state) => state.auth);
  const allCourses = useSelector((state) => state.course.course); 


    const enrolledIds = user?.enrolledCourses || [];
    // console.log(enrolledIds)

   const enrolledCourses = allCourses.filter((course) =>
    enrolledIds.includes(course._id)
  );
  
  console.log(enrolledCourses._id)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const coursesInProgress = studentData.enrolledCourses.filter(c => c.progress < 100);
  const completedCourses = studentData.enrolledCourses.filter(c => c.progress === 100);

  return (
    <div className="h-screen flex bg-zinc-100">
      {/* --- Desktop Sidebar --- */}
      <div className="hidden md:flex">
        <Sidebar /> {/* Sidebar already has w-72 (18rem) width inside */}
      </div>

      {/* --- Mobile Sidebar Overlay --- */}
      {isSidebarOpen && (
        <div className="md:hidden">
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            aria-hidden="true"
            onClick={() => setIsSidebarOpen(false)}
          />
          {/* Sidebar Drawer */}
          <div className="fixed inset-y-0 left-0 w-72 z-40">
            <Sidebar />
            <button
              className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* --- Main Content --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b p-4 flex items-center justify-between">
          <button onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6 text-zinc-700" />
          </button>
          <span className="font-semibold">My Dashboard</span>
          <img
            src="https://i.pravatar.cc/150?u=anjali"
            alt="Avatar"
            className="h-8 w-8 rounded-full"
          />
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-zinc-800">
              Welcome back, {user.name}!
            </h1>
            <p className="text-zinc-500 mt-1">
              Let's continue learning and making progress.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <StatCard icon={Book} title="Courses in Progress" value={enrolledCourses.length} color="bg-blue-500" />
            <StatCard icon={CheckCircle} title="Courses Completed" value={studentData.stats.completed} color="bg-green-500" />
            <StatCard icon={Clock} title="Total Time Spent" value={studentData.stats.timeSpent} color="bg-indigo-500" />
          </div>

          {/* In Progress */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-800 mb-6">In Progress</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
              {enrolledCourses.map((course ,idx) => (
                <EnrolledCourseCard key={idx} course={course} />
              ))}
            </div>
          </section>

          {/* Completed */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-800 mb-6">Completed</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
              {completedCourses.map(course => (
                <EnrolledCourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default EnrolledDashboard;
