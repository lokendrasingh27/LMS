import React, { useEffect, useState } from 'react';
import axiosInstance from '@/api/axiosInstance'; // your configured axios instance

const FinancialManagement = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get('/transactions'); // your backend endpoint

        // Adjust for your backend response structure (no success flag)
        const transactions = res.data.transactions || [];

        // Calculate total revenue (assuming 'amount' field is in paise, convert to rupees)
        const total = transactions.reduce((sum, txn) => sum + txn.amount, 0) / 100;
        setTotalRevenue(total);

        // Sort transactions by payment_date (latest first)
        transactions.sort((a, b) => new Date(b.payment_date) - new Date(a.payment_date));

        setRecentTransactions(transactions);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p>Loading financial data...</p>;

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 max-w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#00173D] mb-2 md:mb-0">Financial Management</h1>
      </div>

      <div className="mb-6">
        <p className="text-base sm:text-lg font-semibold text-[#0A5F6F]">Total Revenue</p>
        <p className="text-3xl sm:text-4xl font-extrabold text-[#C2E8F8]">Rs {totalRevenue.toLocaleString()}</p>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#00173D]">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#0A5F6F] bg-[#F0FBFC]">
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">User</th>
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">Course</th>
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">Amount (₹)</th>
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">Status</th>
                <th className="py-2 px-4 text-sm sm:text-base text-[#0A5F6F]">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.length ? (
                recentTransactions.map(({ _id, user, course, amount, status, payment_date }) => (
                  <tr
                    key={_id}
                    className="border-b border-gray-200 hover:bg-[#E0F7FA] transition-colors duration-200"
                  >
                    <td className="py-2 px-4 text-sm sm:text-base">{user?.name || 'N/A'}</td>
                    <td className="py-2 px-4 text-sm sm:text-base">{course?.title || 'N/A'}</td>
                    <td className="py-2 px-4 text-sm sm:text-base">₹ {(amount / 100).toFixed(2)}</td>
                    <td
                      className={`py-2 px-4 font-semibold text-sm sm:text-base ${
                        status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                      }`}
                    >
                      {status}
                    </td>
                    <td className="py-2 px-4 text-sm sm:text-base">{new Date(payment_date).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500 italic">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FinancialManagement;
