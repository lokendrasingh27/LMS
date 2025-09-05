// /data/dummyCourses.js
export const courses = [
  {
    id: '1',
    title: 'React Basics',
    instructor: 'John Doe',
    status: 'Pending',
    category: 'Frontend',
    description: 'Learn React from scratch.',
    students: [{ id: 's1', name: 'Alice' }, { id: 's2', name: 'Bob' }],
    reviews: [
      { id: 'r1', studentName: 'Alice', rating: 5, comment: 'Great course!' },
    ]
  },
  {
    id: '2',
    title: 'Node.js Fundamentals',
    instructor: 'Jane Smith',
    status: 'Approved',
    category: 'Backend',
    description: 'Master Node.js for backend development.',
    students: [{ id: 's3', name: 'Charlie' }],
    reviews: [
      { id: 'r2', studentName: 'Charlie', rating: 4, comment: 'Very useful!' },
    ]
  },
];