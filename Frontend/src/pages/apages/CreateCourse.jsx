import React, { useState } from "react";

const CreateCourse = () => {
  const [courses, setCourses] = useState([]);

  const [form, setForm] = useState({
    title: "",
    instructor: "",
    category: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!form.title || !form.instructor || !form.category) {
      setError("Please fill all required fields");
      return;
    }

    setError("");

    const newCourse = {
      id: courses.length + 1,
      ...form,
    };

    setCourses([...courses, newCourse]);

    // Reset form
    setForm({
      title: "",
      instructor: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="p-6 md:p-10 bg-[#E8F1F2] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#00173D]">Create New Course</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-lg"
        noValidate
      >
        {error && (
          <p className="mb-4 text-red-600 font-semibold">{error}</p>
        )}

        <label className="block mb-3">
          <span className="text-[#00173D] font-semibold mb-1 block">Course Title *</span>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A5F6F]"
            placeholder="Enter course title"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-[#00173D] font-semibold mb-1 block">Instructor Name *</span>
          <input
            type="text"
            name="instructor"
            value={form.instructor}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A5F6F]"
            placeholder="Enter instructor name"
            required
          />
        </label>

        <label className="block mb-3">
          <span className="text-[#00173D] font-semibold mb-1 block">Category *</span>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A5F6F]"
            placeholder="e.g. Web Development, Data Science"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-[#00173D] font-semibold mb-1 block">Description</span>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A5F6F]"
            placeholder="Course description (optional)"
          />
        </label>

        <button
          type="submit"
          className="bg-[#0A5F6F] text-white px-6 py-2 rounded hover:bg-[#084e5b] transition"
        >
          Create Course
        </button>
      </form>

      {/* Display created courses */}
      {courses.length > 0 && (
        <div className="mt-10 max-w-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#00173D]">Created Courses</h2>
          <ul className="space-y-4">
            {courses.map((course) => (
              <li
                key={course.id}
                className="bg-[#C2E8F8] rounded p-4 shadow text-[#00173D]"
              >
                <h3 className="font-bold text-lg">{course.title}</h3>
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Category:</strong> {course.category}</p>
                {course.description && (
                  <p><strong>Description:</strong> {course.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateCourse;
