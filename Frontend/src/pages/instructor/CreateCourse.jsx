import React, { useState } from "react";

const CourseCreate=({ onCreate, onCancel })=> {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState( null);

 const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && thumbnail) {
      onCreate({ title, thumbnail });
      setTitle("");
      setThumbnail("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create Course</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <div>
            <label className="block font-semibold mb-1">Course Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border p-2 w-full rounded"
            />
            {thumbnail && (
              <img
                src={thumbnail}
                alt="Thumbnail Preview"
                className="mt-2 w-32 h-20 object-cover rounded border"
              />
            )}
          </div>
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
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default  CourseCreate