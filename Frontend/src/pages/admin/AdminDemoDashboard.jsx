// src/pages/admin/AdminDemoDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const AdminDemoDashboard = () => {
  return (
    <div className="bg-[#e3f1f1] h-[100vh] lg:flex relative min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDemoDashboard;
