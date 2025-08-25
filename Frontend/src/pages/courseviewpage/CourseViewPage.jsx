import React, { useEffect, useState } from "react";
import Banner from "./banner";
import { availableCourses, upcomingCourses } from "./demodata";
import CourseCard from "./coursecard";
import UpcomingCard from "./upcomingcard";
import { 
  Filter, 
  Search, 
  Mail, 
  Phone, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram 
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCourse } from "@/redux/courseSlice";

const CourseViewPage = () => {
  
  // Filter available courses based on the search query
 

   


  return (
    <div className="courseView w-[81vw] p-6 h-[100vh] overflow-y-auto">
      {/* Main Content */}
      <div className="overflow-y-auto">
        <Banner />

        {/* Available Courses */}
        <section className="my-8">
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="text-xl px-4 py-2 bg-[#006D77] rounded-xl text-white font-semibold">
              Our Courses
            </h2>
            <div className="flex items-center gap-2">
              {/* Search Bar */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-zinc-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-64 rounded-xl border border-zinc-300 bg-white py-2 pl-9 pr-3 text-sm text-zinc-800 placeholder:text-zinc-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              {/* Filter Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 rounded-xl text-sm font-medium text-zinc-800 hover:bg-zinc-100 transition-colors">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Course Grid */}
          <div className="flex gap-4 overflow-x-auto snap-x">
            {availableCourses.map((course,index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </section>

        {/* Upcoming Courses */}
        <section className="m-6">
          <div className="mb-6 flex items-center">
            <h2 className="text-xl px-4 py-2 bg-[#006D77] rounded-xl text-white font-semibold mb-4">
              Upcoming Courses
            </h2>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x">
            {upcomingCourses.map((course) => (
              <UpcomingCard key={course.id} course={course} />
            ))}
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="mt-16 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About Us */}
              <div className="md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-semibold text-zinc-900">GRADIX</h3>
                <p className="mt-4 text-sm text-zinc-600">
                  Your partner in acquiring new skills. We provide high-quality, engaging, and practical courses to help you achieve your career goals right from Bhopal, India.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-zinc-900">Quick Links</h4>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><a href="#" className="text-zinc-600 hover:text-indigo-600 transition-colors">Home</a></li>
                  <li><a href="#" className="text-zinc-600 hover:text-indigo-600 transition-colors">All Courses</a></li>
                  <li><a href="#" className="text-zinc-600 hover:text-indigo-600 transition-colors">About Us</a></li>
                  <li><a href="#" className="text-zinc-600 hover:text-indigo-600 transition-colors">Blog</a></li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h4 className="font-semibold text-zinc-900">Contact Us</h4>
                <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 shrink-0" />
                    <a href="mailto:contact@eduplatform.com" className="hover:text-indigo-600 transition-colors">contact@eduplatform.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>+91 (123) 456-7890</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold shrink-0">📍</span>
                    <span>Bhopal, Madhya Pradesh, India</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-zinc-900">Follow Us</h4>
                <div className="flex mt-4 space-x-5 text-zinc-600">
                    <a href="#" aria-label="Twitter" className="hover:text-indigo-600 transition-colors"><Twitter className="h-6 w-6" /></a>
                    <a href="#" aria-label="Facebook" className="hover:text-indigo-600 transition-colors"><Facebook className="h-6 w-6" /></a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-indigo-600 transition-colors"><Linkedin className="h-6 w-6" /></a>
                    <a href="#" aria-label="Instagram" className="hover:text-indigo-600 transition-colors"><Instagram className="h-6 w-6" /></a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-zinc-200 pt-8">
              <p className="text-center text-sm text-zinc-500">
                &copy; 2025 GRADIX. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CourseViewPage;