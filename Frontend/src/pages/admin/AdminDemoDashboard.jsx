import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";


const AdminDemoDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* renders the matching child route here */}
      </main>
    </div>
  );
};

export default AdminDemoDashboard;
