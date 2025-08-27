import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import CourseViewPage from "./courseviewpage/CourseViewPage";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="lg:flex min-h-screen w-full bg-[#E3F1F1]">
      {/* Sidebar (Desktop) */}
    
        <Sidebar />
      

        <CourseViewPage />
    
    </div>
  );
};

export default HomePage;
