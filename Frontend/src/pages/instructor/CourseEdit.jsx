import React, { useState } from "react";

export default function CourseEdit({ course, onUpdate, onCancel }) {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...course, title, description });
  };

  return (
    <div className="fixed  inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-100  p-6 rounded shadow-lg w-[100vw] h-[100vh]">
        <h2 className="text-xl font-bold mb-8">Adding Information regarding course</h2>
        <div className="w-full h-[80vh] bg-white">
           <form onSubmit={handleSubmit} className="space-y-4">
            <label  >Title</label>
          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <textarea
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full rounded"
          ></textarea>
          <label htmlFor="">Category</label>
          <input type="text" name="" id="" />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
