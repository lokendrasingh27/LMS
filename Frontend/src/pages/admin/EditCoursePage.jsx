import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditCoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    courseTitle: '',
    category: '',
    description: '',
    instructor: '',
    isPublished: false,
    thumbnail: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/course/${courseId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setCourseData({
            courseTitle: res.data.course.courseTitle || '',
            category: res.data.course.category || '',
            description: res.data.course.description || '',
            instructor: res.data.course.instructor || '',
            isPublished: res.data.course.isPublished || false,
            thumbnail: res.data.course.thumbnail || '',
          });
          setError('');
        } else {
          setError('Failed to load course');
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching course details');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:5000/api/course/${courseId}`,
        courseData,
        { withCredentials: true }
      );
      if (res.data.success) {
        alert('Course updated successfully');
        navigate('/admindemo/courses');
      } else {
        alert('Failed to update course');
      }
    } catch (err) {
      console.error(err);
      alert('Error updating course');
    }
  };

  if (loading) return <p>Loading course data...</p>;

  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-3 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Course Title</label>
          <input
            type="text"
            name="courseTitle"
            value={courseData.courseTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={courseData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={courseData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Instructor</label>
          <input
            type="text"
            name="instructor"
            value={courseData.instructor}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        {/* EDIT: Thumbnail file upload field */}
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


        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="isPublished"
              checked={courseData.isPublished}
              onChange={handleChange}
              className="mr-2"
            />
            Published
          </label>
        </div>

        {/* <div>
          <label className="block font-semibold mb-1">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            value={courseData.thumbnail}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div> */}

        
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
          className="px-6 py-2 bg-[#006D77] text-white rounded hover:bg-[#024c52] transition"
        >
          Save Changes
        </button>
        </div>
      </form>
    </div>
  );
};

export default EditCoursePage;
