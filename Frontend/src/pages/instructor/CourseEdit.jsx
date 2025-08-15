import React, { useState } from "react";

const CourseEdit=({ course, onUpdate, onCancel })=> {
     

  const [title, setTitle] = useState(course.title || "");
  const [subtitle, setSubtitle] = useState(course.subtitle || "");
  const [description, setDescription] = useState(course.description || "");
  const [category, setCategory] = useState(course.category || "");
  const [level, setLevel] = useState(course.level || "");
  const [price, setPrice] = useState(course.price || "");
  const [thumbnail, setThumbnail] = useState(course.thumbnail || null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({
      ...course,
      title,
      subtitle,
      description,
      category,
      level,
      price,
      thumbnail
    });
  };


  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[80vw]">
        <h2 className="text-2xl font-bold mb-6">Edit Course Information</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              placeholder="Course Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block font-semibold mb-1">Subtitle</label>
            <input
              type="text"
              placeholder="Course Subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="border p-2 w-full rounded"
            />

          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              placeholder="Course Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full rounded h-24"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-2 w-full rounded"
            >
              <option value="web">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Blockchain">Blockchain</option>
              <option value="AI/ML">Artificial Intelligence & Machine Learning</option>
            </select>
          </div>

          {/* Course Level */}
          <div>
            <label className="block font-semibold mb-1">Course Level</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="border p-2 w-full rounded"
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price ($)</label>
            <input
              type="number"
              placeholder="e.g. 99"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Thumbnail Upload */}
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

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end space-x-2 mt-4">
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
  );
}

export default CourseEdit