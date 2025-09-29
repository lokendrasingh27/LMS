// import React from 'react';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Edit, Trash2 } from 'lucide-react';

// const CourseList = ({
//   courses,
//   onTogglePublish,
//   onEdit,
//   onDelete,
//   onSelect,
//   selectedCourseId,
// }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {courses.map(course => (
//         <div
//           key={course._id}
//           onClick={() => onSelect(course._id)}
//           className={`cursor-pointer border rounded-lg p-4 shadow-sm ${
//             selectedCourseId === course._id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'
//           }`}
//         >
//           <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
//             {course.courseThumbnail ? (
//               <img
//                 src={course.courseThumbnail}
//                 alt={course.courseTitle}
//                 className="object-cover w-full h-full rounded-md"
//               />
//             ) : (
//               <span className="text-gray-500">No Image</span>
//             )}
//           </div>

//           <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.courseTitle}</h3>
//           <p className="text-gray-600 mb-1">
//             <strong>Category:</strong> {course.category || 'N/A'}
//           </p>

//           <p className="text-gray-600 mb-2">
//             <strong>Status:</strong>{' '}
//             <Badge
//               className={course.isPublished ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'}
//             >
//               {course.isPublished ? 'Published' : 'Draft'}
//             </Badge>
//           </p>

//           <div className="flex gap-2 flex-wrap">
//             {course.isPublished ? (
//               <Button
//                 variant="outline"
//                 onClick={e => {
//                   e.stopPropagation();
//                   onTogglePublish(course._id, false);
//                 }}
//               >
//                 Unpublish
//               </Button>
//             ) : (
//               <Button
//                 onClick={e => {
//                   e.stopPropagation();
//                   onTogglePublish(course._id, true);
//                 }}
//               >
//                 Publish
//               </Button>
//             )}

//             <Button
//               variant="outline"
//               onClick={e => {
//                 e.stopPropagation();
//                 onEdit(course._id);
//               }}
//             >
//               <Edit size={16} />
//             </Button>

//             <Button
//               variant="destructive"
//               onClick={e => {
//                 e.stopPropagation();
//                 onDelete(course._id);
//               }}
//             >
//               <Trash2 size={16} />
//             </Button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseList;

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2 } from 'lucide-react';

const CourseList = ({
  courses,
  onTogglePublish,
  onEdit,
  onDelete,
  onSelect,
  selectedCourseId,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map(course => (
        <div
          key={course._id}
          onClick={() => onSelect(course._id)}
          className={`cursor-pointer border rounded-lg p-4 shadow-sm ${
            selectedCourseId === course._id ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'
          }`}
        >
          <div className="w-full h-40 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
            {course.courseThumbnail ? (
              <img
                src={course.courseThumbnail}
                alt={course.courseTitle}
                className="object-cover w-full h-full rounded-md"
              />
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.courseTitle}</h3>
          <p className="text-gray-600 mb-1">
            <strong>Category:</strong> {course.category || 'N/A'}
          </p>

          <p className="text-gray-600 mb-2">
            <strong>Status:</strong>{' '}
            <Badge
              className={course.isPublished ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'}
            >
              {course.isPublished ? 'Published' : 'Draft'}
            </Badge>
          </p>

          <div className="flex gap-2 flex-wrap">
            {course.isPublished ? (
              <Button
                variant="outline"
                onClick={e => {
                  e.stopPropagation();
                  onTogglePublish(course._id, false);
                }}
              >
                Unpublish
              </Button>
            ) : (
              <Button
                onClick={e => {
                  e.stopPropagation();
                  onTogglePublish(course._id, true);
                }}
              >
                Publish
              </Button>
            )}

            <Button
              variant="outline"
              onClick={e => {
                e.stopPropagation();
                onEdit(course._id);
              }}
            >
              <Edit size={16} />
            </Button>

            <Button
              variant="destructive"
              onClick={e => {
                e.stopPropagation();
                onDelete(course._id);
              }}
            >
              <Trash2 size={16} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
