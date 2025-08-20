// import React, { useState } from 'react';

// const CourseForm = ({ onAdd }) => {
//   const [title, setTitle] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title.trim()) return;
//     onAdd(title);
//     setTitle('');
//   };

//   return (
//     <div className="bg-white p-6 rounded shadow mb-6">
//       <h2 className="text-xl font-semibold text-blue-800 mb-4">Add New Course</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
//         <input
//           type="text"
//           placeholder="Course Title"
//           className="border px-4 py-2 rounded w-full sm:w-2/3"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CourseForm;
