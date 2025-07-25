// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">EduSphere LMS</h1>
        <div className="space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
          <Link to="/register" className="text-gray-700 hover:text-indigo-600">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-6 bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Learn Anything. Anytime. Anywhere.</h2>
        <p className="text-lg mb-6">Join thousands of learners on EduSphere and grow your skills today.</p>
        <Link to="/courses" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100">
          Browse Courses
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-12">Why Choose EduSphere?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow rounded-lg border">
              <h4 className="text-xl font-bold mb-2">📚 Wide Course Library</h4>
              <p>Access courses from various domains with structured learning paths.</p>
            </div>
            <div className="p-6 shadow rounded-lg border">
              <h4 className="text-xl font-bold mb-2">🎯 Track Your Progress</h4>
              <p>View your learning stats, completed lessons, and certificates.</p>
            </div>
            <div className="p-6 shadow rounded-lg border">
              <h4 className="text-xl font-bold mb-2">🏆 Get Certified</h4>
              <p>Earn certificates and showcase your skills on LinkedIn or your resume.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm py-6 text-gray-600">
        © {new Date().getFullYear()} EduSphere LMS. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
