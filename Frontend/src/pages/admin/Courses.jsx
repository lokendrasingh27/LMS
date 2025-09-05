import React, { useState } from 'react';

const CreateCourse = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({
    title: '',
    instructor: '',
    category: '',
    description: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.instructor || !form.category) {
      setError('Please fill all required fields');
      setSuccess('');
      return;
    }

    setError('');
    const newCourse = {
      id: courses.length + 1,
      ...form,
    };
    setCourses([...courses, newCourse]);
    setForm({
      title: '',
      instructor: '',
      category: '',
      description: '',
    });
    setSuccess('Course created successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="p-8 md:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Create New Course</h1>

      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto border border-gray-200">
        {error && (
          <p className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg font-semibold">{error}</p>
        )}
        {success && (
          <p className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg font-semibold">{success}</p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Course Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter course title"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Instructor Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="instructor"
              value={form.instructor}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Enter instructor name"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="e.g. Web Development, Data Science"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="Course description (optional)"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-bold text-lg shadow-md"
          >
            Create Course
          </button>
        </form>
      </div>

      {courses.length > 0 && (
        <div className="mt-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Recently Created Courses</h2>
          <ul className="space-y-4">
            {courses.map((course) => (
              <li
                key={course.id}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
              >
                <h3 className="font-bold text-xl text-indigo-700 mb-1">{course.title}</h3>
                <p className="text-gray-600"><strong className="font-semibold">Instructor:</strong> {course.instructor}</p>
                <p className="text-gray-600"><strong className="font-semibold">Category:</strong> {course.category}</p>
                {course.description && (
                  <p className="text-gray-600 mt-2"><strong className="font-semibold">Description:</strong> {course.description}</p>
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