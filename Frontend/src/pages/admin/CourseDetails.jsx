import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';

const CourseDetails = ({ course }) => {
  const [details, setDetails] = useState(course);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDetails = async () => {
      if (!course || !course._id) return;
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/course/${course._id}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setDetails(res.data.course);
          setError('');
        } else {
          setError('Could not load course details');
        }
      } catch (err) {
        console.error('Error loading course details:', err);
        setError('Error loading course details');
      }
      setLoading(false);
    };
    fetchDetails();
  }, [course]);

  if (loading) return <p className="p-4 text-center">Loading course details...</p>;
  if (error) return <p className="p-4 text-center text-red-600">{error}</p>;
  if (!details) return <p className="p-4 text-center">No course selected.</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">{details.courseTitle}</h2>
      {details.courseThumbnail && (
        <img
          src={details.courseThumbnail}
          alt={details.courseTitle}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
      )}
      <p className="mb-2">
        <strong>Category:</strong> {details.category}
      </p>
      <p className="mb-2">
        <strong>Price:</strong> {details.coursePrice != null ? `₹${details.coursePrice}` : 'Not set'}
      </p>
      <p className="mb-2">
        <strong>Status:</strong> {details.isPublished ? 'Published' : 'Draft'}
      </p>
      <p className="mb-4">
        <strong>Description:</strong> {details.description || 'No description provided'}
      </p>
      <p className="mb-2">
        <strong>Instructor:</strong> {details.creator?.name || 'N/A'}
      </p>
      <p className="mb-2">
        <strong>Created At:</strong> {new Date(details.createdAt).toLocaleDateString()}
      </p>
      <p className="mb-2">
        <strong>Last Updated:</strong> {new Date(details.updatedAt).toLocaleDateString()}
      </p>

      <div className="mt-4">
        <Button onClick={() => window.history.back()}>Back to Courses</Button>
      </div>
    </div>
  );
};

export default CourseDetails;
