// src/pages/PaymentPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';

const paidCourses = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    instructor: 'Jane Doe',
    amountPaid: '₹2,000',
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    instructor: 'Emily Johnson',
    amountPaid: '₹1,500',
  },
];

const PaymentPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      <div className="flex-1 overflow-y-auto bg-gray-50 p-10">
        <h1 className="text-4xl font-bold text-[#001F3F] mb-6 text-left">Payments</h1>

        {paidCourses.length === 0 ? (
          <p className="text-gray-600">No payments have been made yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paidCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[#0A5F6F] text-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                <p className="mb-1">Instructor: {course.instructor}</p>
                <p className="text-sm font-medium">Amount Paid: {course.amountPaid}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
