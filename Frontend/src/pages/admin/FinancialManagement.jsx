// src/components/FinancialManagement.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinancialManagement = () => {
  const navigate = useNavigate();

  // Mock data
  const totalRevenue = 12500;
  const recentTransactions = [
    { id: 1, user: 'John Doe', course: 'React Basics', amount: 99, status: 'Completed', date: '2025-08-20' },
    { id: 2, user: 'Jane Smith', course: 'Advanced JS', amount: 149, status: 'Pending', date: '2025-08-22' },
    { id: 3, user: 'Alice Johnson', course: 'CSS Mastery', amount: 79, status: 'Completed', date: '2025-08-23' },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 max-w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#00173D] mb-2 md:mb-0">Financial Management</h1>
        {/* <button
          onClick={() => navigate('/')}
          className="bg-[#006D77] text-white px-4 py-2 rounded hover:bg-[#033b41db] transition"
        >
          ← Back to Dashboard
        </button> */}
      </div>

      {/* Total Revenue */}
      <div className="mb-6">
        <p className="text-base sm:text-lg font-semibold text-[#0A5F6F]">Total Revenue</p>
        <p className="text-3xl sm:text-4xl font-extrabold text-[#C2E8F8]">Rs {totalRevenue.toLocaleString()}</p>
      </div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#00173D]">Recent Transactions</h3>
        
        {/* Scrollable table container for small screens */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#0A5F6F] bg-[#F0FBFC]">
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">User</th>
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">Course</th>
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">Amount</th>
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">Status</th>
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map(({ id, user, course, amount, status, date }) => (
                <tr
                  key={id}
                  className="border-b border-gray-200 hover:bg-[#E0F7FA] transition-colors duration-200"
                >
                  <td className="py-2 px-4 text-sm sm:text-base">{user}</td>
                  <td className="py-2 px-4 text-sm sm:text-base">{course}</td>
                  <td className="py-2 px-4 text-sm sm:text-base">Rs {amount}</td>
                  <td
                    className={`py-2 px-4 font-semibold text-sm sm:text-base ${
                      status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                    }`}
                  >
                    {status}
                  </td>
                  <td className="py-2 px-4 text-sm sm:text-base">{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FinancialManagement;
