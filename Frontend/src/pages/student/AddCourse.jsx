import React, { useState } from "react";
import Input from "./Input"; // Importing the Input component
import { UserPlus } from "lucide-react";
import { rupee } from "./utils"; 
const AddCourse = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    category: "Development",
    level: "Beginner",
    duration: "6 weeks",
    price: 1999,
    thumbnail: "",
    instructor: "You",
    rating: 4.5,
    students: 0,
    short: "",
    syllabus: ["Introduction", "Core Concepts", "Project"],
  });

  const submit = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      thumbnail:
        form.thumbnail ||
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    };
    onAdd(data);
  };

  return (
    <form onSubmit={submit} className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-5 shadow">
        <h3 className="text-lg font-semibold text-slate-800">Create a new course</h3>
        <p className="text-sm text-slate-500 mb-4">Fill in the details below. You can edit later.</p>

        <div className="grid gap-4">
          <Input label="Course title" value={form.title} onChange={(v) => setForm({ ...form, title: v })} />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                {["Development", "Data Science", "Design", "Business", "Marketing"].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Level</label>
              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={form.level}
                onChange={(e) => setForm({ ...form, level: e.target.value })}
              >
                {["Beginner", "Intermediate", "Advanced"].map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Input label="Duration" value={form.duration} onChange={(v) => setForm({ ...form, duration: v })} />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Price (INR)</label>
              <input
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Input label="Instructor" value={form.instructor} onChange={(v) => setForm({ ...form, instructor: v })} />
          </div>

          <Input label="Cover image URL" placeholder="https://…" value={form.thumbnail} onChange={(v) => setForm({ ...form, thumbnail: v })} />

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Short description</label>
            <Input
              value={form.short}
              onChange={(v) => setForm({ ...form, short: v })}
              type="textarea"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Syllabus (comma separated)</label>
            <input
              value={form.syllabus.join(", ")}
              onChange={(e) => setForm({ ...form, syllabus: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <aside className="lg:col-span-1 space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Preview</h4>
          <div className="rounded-xl overflow-hidden border border-slate-200">
            <img
              src={form.thumbnail || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"}
              alt="preview"
              className="h-32 w-full object-cover"
            />
            <div className="p-3">
              <div className="font-semibold text-slate-800 line-clamp-1">{form.title || "Course title"}</div>
              <div className="text-xs text-slate-500">{form.category} · {form.level} · {form.duration}</div>
              <div className="mt-2 text-blue-700 font-bold">{rupee(form.price || 0)}</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow">
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 shadow font-semibold">
            <User Plus className="h-5 w-5"/> Publish Course
          </button>
          <p className="text-[11px] text-slate-500 text-center mt-2">Visible instantly in the catalog.</p>
        </div>
      </aside>
    </form>
  );
};

export default AddCourse;
