import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';
import { courses as dummyCourses } from './Dummydata';

const CoursesPage = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Map dummy courses to backend structure
  const mapDummyCourses = () =>
    dummyCourses.map(c => ({
      _id: c.id.toString(),
      courseTitle: c.title,
      instructor: c.instructor,
      category: c.category,
      description: c.description,
      isPublished: c.status === 'Approved',
      thumbnail: c.thumbnail,
    }));

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:5000/api/course/', {
          withCredentials: true,
        });

        if (res.data.success && res.data.courses.length > 0) {
          setCourses(res.data.courses);
          setError('');
        } else {
          setCourses(mapDummyCourses());
          setError('');
        }
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Could not fetch courses from server. Showing dummy data.');
        setCourses(mapDummyCourses());
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleTogglePublish = async (id, publishStatus) => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/course/${id}?publish=${publishStatus}`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        setCourses(prev =>
          prev.map(c =>
            c._id === id ? { ...c, isPublished: publishStatus } : c
          )
        );
      }
    } catch (err) {
      console.error('Error toggling publish status', err);
      alert('Error toggling publish status');
    }
  };

  // Navigate to Edit Course page
  const handleEdit = (id) => {
    navigate(`/admindemo/courses/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;
    try {
      const res = await axios.delete(`http://localhost:5000/api/course/${id}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        setCourses(prev => prev.filter(c => c._id !== id));
        if (selectedCourseId === id) setSelectedCourseId(null);
      }
    } catch (err) {
      console.error('Error deleting course:', err);
      alert('Error deleting course');
    }
  };

  const selectedCourse = courses.find(c => c._id === selectedCourseId);

  return (
    <div className="min-h-screen bg-[#E8F1F2] p-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl text-[#00173D] font-bold">Course Management</h2>
        <button
          onClick={() => navigate('/admindemo/courses/add')}
          className="px-4 py-2 bg-[#006D77] text-white rounded hover:bg-[#024c52] transition"
        >
          Add New Course
        </button>
      </div>

      {loading && <p>Loading courses...</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <CourseList
        courses={courses}
        onTogglePublish={handleTogglePublish}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSelect={setSelectedCourseId}
        selectedCourseId={selectedCourseId}
      />

      {selectedCourse && (
        <div className="mt-8 max-w-3xl mx-auto">
          <CourseDetails course={selectedCourse} />
        </div>
      )}
    </div>
  );
};

export default CoursesPage;
