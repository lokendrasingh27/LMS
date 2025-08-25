import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import CourseViewPage from "./courseviewpage/CourseViewPage";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-[#E3F1F1]">
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full w-72">
        <Sidebar />
      </aside>

      {/* Sidebar (Mobile Drawer) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          {/* Drawer */}
          <aside className="relative w-72 h-full bg-[#001f3f]">
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <Sidebar />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-72">
        {/* Top Bar (Mobile) */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b bg-white">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="font-bold text-lg text-[#001f3f]">GRADIX</h1>
        </div>

        <CourseViewPage />
      </div>
    </div>
  );
};

export default HomePage;
