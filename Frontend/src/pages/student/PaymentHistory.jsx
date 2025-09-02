import React from "react";
import Sidebar from "@/components/Sidebar";

const PaymentHistory = () => {
  return (
    <div className="flex min-h-screen bg-[#E3F1F1]">
      {/* Sidebar for Desktop */}
      <div className="hidden md:block fixed top-0 left-0 h-screen w-72 z-50">
        <Sidebar />
      </div>

      {/* Sidebar Topbar with Hamburger for Mobile */}
      <div className="block md:hidden fixed top-0 left-0 right-0 z-50">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full md:ml-72 p-4 sm:p-6  font-sans transition-all">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-8 mt-14 md:mt-0"> 
            {/* mt-14 → pushes content below mobile navbar */}
            <h1 className="text-3xl sm:text-4xl font-bold text-[#001F3F]">
              Payment History
            </h1>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Here is a complete record of all your transactions.
            </p>
          </header>

          {/* Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-4 font-semibold text-slate-600">Invoice ID</th>
                    <th className="p-4 font-semibold text-slate-600">Course Name</th>
                    <th className="p-4 font-semibold text-slate-600">Date</th>
                    <th className="p-4 font-semibold text-slate-600">Amount</th>
                    <th className="p-4 font-semibold text-slate-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-medium text-slate-800 whitespace-nowrap">
                      1234
                    </td>
                    <td className="p-4 text-slate-600">BCA</td>
                    <td className="p-4 text-slate-600 whitespace-nowrap">20/12/2025</td>
                    <td className="p-4 font-semibold text-slate-900 whitespace-nowrap">
                      ₹500
                    </td>
                    <td className="p-4 text-green-600 font-medium">PAID</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentHistory;
