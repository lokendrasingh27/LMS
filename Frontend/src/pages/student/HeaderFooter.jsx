import React from "react";
import { GraduationCap, LayoutGrid, BookOpen, Plus, CreditCard } from "lucide-react";

export const Header = ({ tab, setTab }) => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 grid place-items-center text-white shadow">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <div className="font-extrabold tracking-tight text-slate-800 text-lg">Gradix</div>
            <div className="text-[11px] text-slate-500 -mt-0.5">Learn. Build. Level‑Up.</div>
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-1">
          <TopTab icon={LayoutGrid} label="Discover" active={tab === "catalog"} onClick={() => setTab("catalog")} />
          <TopTab icon={BookOpen} label="My Courses" active={tab === "my"} onClick={() => setTab("my")} />
          <TopTab icon={Plus} label="Add Course" active={tab === "add"} onClick={() => setTab("add")} />
          <TopTab icon={CreditCard} label="Payments" active={tab === "payments"} onClick={() => setTab("payments")} />
        </nav>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Gradix · A demo student dashboard for an LMS.
      </div>
    </footer>
  );
};

const TopTab = ({ icon: Icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition shadow-sm border ${
        active
          ? "bg-blue-600 text-white border-blue-700"
          : "bg-white text-slate-700 hover:bg-blue-50 border-slate-200"
      }`}
    >
      <Icon className="h-4 w-4" /> {label}
    </button>
  );
};
