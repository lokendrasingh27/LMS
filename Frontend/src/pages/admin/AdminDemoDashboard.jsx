import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";

const AdminDemoDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* renders the matching child route here */}
      </main>
    </div>
  );
};

export default AdminDemoDashboard;
