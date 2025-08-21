import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CourseListing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Dummy course data
  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      instructor: 'Sarah Johnson',
      category: 'Web Development',
      duration: '8 weeks',
      level: 'Beginner',
      rating: 4.7,
      students: 1245,
      image: 'https://placehold.co/300x200?text=React+Course',
    },
    {
      id: 2,
      title: 'Advanced JavaScript Patterns',
      instructor: 'Michael Chen',
      category: 'Programming',
      duration: '6 weeks',
      level: 'Advanced',
      rating: 4.9,
      students: 876,
      image: 'https://placehold.co/300x200?text=JS+Patterns',
    },
    {
      id: 3,
      title: 'UX/UI Design Fundamentals',
      instructor: 'Emma Rodriguez',
      category: 'Design',
      duration: '5 weeks',
      level: 'Beginner',
      rating: 4.5,
      students: 1532,
      image: 'https://placehold.co/300x200?text=UX+UI',
    },
    {
      id: 4,
      title: 'Data Science with Python',
      instructor: 'David Kim',
      category: 'Data Science',
      duration: '10 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: 2107,
      image: 'https://placehold.co/300x200?text=Data+Science',
    },
    {
      id: 5,
      title: 'Mobile App Development',
      instructor: 'Lisa Wong',
      category: 'Mobile',
      duration: '7 weeks',
      level: 'Intermediate',
      rating: 4.6,
      students: 932,
      image: 'https://placehold.co/300x200?text=Mobile+App',
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      instructor: 'Robert Davis',
      category: 'Security',
      duration: '4 weeks',
      level: 'Beginner',
      rating: 4.3,
      students: 645,
      image: 'https://placehold.co/300x200?text=Cybersecurity',
    },
  ];

  // Get unique categories for filter
  const categories = ['All', ...new Set(courses.map(course => course.category))];

  // Filter courses based on search term and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Browse Our Courses</h1>
      
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search courses or instructors..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => navigate(`/courses/${course.id}`)}
          >
            <img 
              src={course.image} 
              alt={`Course cover for ${course.title}`} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {course.level}
                </span>
              </div>
              <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-gray-700">{course.rating} ({course.students})</span>
                </div>
                <span className="text-sm text-gray-500">{course.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CourseListing;

