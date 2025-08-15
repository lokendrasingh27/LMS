import React from "react";
export default function Badge({ children, tone = "neutral" }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${tone === "primary" ? "bg-indigo-600/10 text-indigo-600" : tone === "warning" ? "bg-amber-600/10 text-amber-700" : "bg-zinc-600/10 text-zinc-700"}`}>{children}</span>
  );
}