import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCoursePage = () => {
  const navigate = useNavigate();
  const [newCourse, setNewCourse] = useState({
    courseTitle: '',
    instructor: '',
    category: '',
    description: '',
    thumbnail: '',
  });

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const { courseTitle, instructor, category, description } = newCourse;

    if (
      !courseTitle.trim() ||
      !instructor.trim() ||
      !category.trim() ||
      !description.trim()
    ) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:5000/api/course/',
        newCourse,
        { withCredentials: true }
      );

      if (res.data.success) {
        alert('Course added successfully!');
        navigate('/courses'); // Redirect back to courses page after success
      } else {
        alert('Failed to add course');
      }
    } catch (err) {
      console.error('Error adding course:', err);
      alert('Error adding course. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen bg-[#E8F1F2] p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-[#00173D] mb-2">Add New Course</h2>

      <form
        onSubmit={handleAddCourse}
        className="bg-white p-4 rounded-xl shadow border border-gray-200 space-y-4"
      >
        <div>
           <label className="block font-semibold mb-1">Course Title</label>
        <input
          type="text"
          placeholder="Course Title"
          value={newCourse.courseTitle}
          onChange={(e) =>
            setNewCourse({ ...newCourse, courseTitle: e.target.value })
          }
          className="p-2 border rounded w-full"
          required
        />
        </div>

        <div>
          <label className="block font-semibold mb-1">Instructor Name</label>
        <input
          type="text"
          placeholder="Instructor"
          value={newCourse.instructor}
          onChange={(e) =>
            setNewCourse({ ...newCourse, instructor: e.target.value })
          }
          className="p-2 border rounded w-full"
          required
        />
        </div>

        <div>
          <label className="block font-semibold mb-1">Course Category</label>
        <input
          type="text"
          placeholder="Category"
          value={newCourse.category}
          onChange={(e) =>
            setNewCourse({ ...newCourse, category: e.target.value })
          }
          className="p-2 border rounded w-full"
          required
        />
        </div>
        {/* <input
          type="text"
          placeholder="Thumbnail URL (optional)"
          value={newCourse.thumbnail}
          onChange={(e) =>
            setNewCourse({ ...newCourse, thumbnail: e.target.value })
          }
          className="p-2 border rounded w-full"
        /> */}

        {/* EDIT: Thumbnail file upload field */}
<div>
  <label className="block font-semibold mb-1">Thumbnail</label>
<input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCourse({ ...newCourse, thumbnail: reader.result });
      };
      reader.readAsDataURL(file); // convert image to base64 string
    }
  }}
  className="p-2 border rounded w-full"
/>
</div>
<div>
  <label className="block font-semibold mb-1">Course Description</label>
        <textarea
          placeholder="Description"
          value={newCourse.description}
          onChange={(e) =>
            setNewCourse({ ...newCourse, description: e.target.value })
          }
          className="p-2 border rounded w-full"
          rows={5}
          required
        />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => navigate('/admindemo/courses')}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-[#006D77] text-white rounded hover:bg-[#024c52]"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoursePage;
