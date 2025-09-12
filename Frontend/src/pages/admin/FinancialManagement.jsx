// src/components/FinancialManagement.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import for navigation

const FinancialManagement = () => {
    const navigate = useNavigate(); // ✅ Hook to navigate
  // Mock data for demo
  const totalRevenue = 12500;
  const recentTransactions = [
    { id: 1, user: 'John Doe', course: 'React Basics', amount: 99, status: 'Completed', date: '2025-08-20' },
    { id: 2, user: 'Jane Smith', course: 'Advanced JS', amount: 149, status: 'Pending', date: '2025-08-22' },
    { id: 3, user: 'Alice Johnson', course: 'CSS Mastery', amount: 79, status: 'Completed', date: '2025-08-23' },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-md p-8">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold mb-4">Financial Management</h1>
     
        <button
          onClick={() => navigate('/admindemo')}
          className="bg-[#006D77] text-white px-4 py-2 rounded hover:bg-[#033b41db] transition"
        >
          ← Back to Dashboard
        </button>
      </div>
      {/* <h2 className="text-2xl font-bold mb-6 text-[#00173D]">Financial Management</h2> */}

      {/* Total Revenue */}
      <div className="mb-8">
        <p className="text-lg font-semibold text-[#0A5F6F]">Total Revenue</p>
        <p className="text-4xl font-extrabold text-[#C2E8F8]">${totalRevenue.toLocaleString()}</p>
      </div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-[#00173D]">Recent Transactions</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#0A5F6F]">
              <th className="py-2 px-4 text-[#0A5F6F]">User</th>
              <th className="py-2 px-4 text-[#0A5F6F]">Course</th>
              <th className="py-2 px-4 text-[#0A5F6F]">Amount</th>
              <th className="py-2 px-4 text-[#0A5F6F]">Status</th>
              <th className="py-2 px-4 text-[#0A5F6F]">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map(({ id, user, course, amount, status, date }) => (
              <tr key={id} className="border-b border-gray-200 hover:bg-[#E0F7FA] transition-colors duration-200">
                <td className="py-2 px-4">{user}</td>
                <td className="py-2 px-4">{course}</td>
                <td className="py-2 px-4">${amount}</td>
                <td className={`py-2 px-4 font-semibold ${status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {status}
                </td>
                <td className="py-2 px-4">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FinancialManagement;
