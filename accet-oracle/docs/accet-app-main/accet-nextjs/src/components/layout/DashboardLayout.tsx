"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen bg-[#050A14] selection:bg-primary/30 text-white font-sans">
      <Navbar onMenuClick={toggleSidebar} />
      <div className="flex flex-1 relative">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
        
        <div className={`
          fixed inset-y-0 left-0 z-50 transform lg:static lg:translate-x-0 transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:flex
        `}>
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>

        <main className="flex-1 overflow-x-hidden min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
