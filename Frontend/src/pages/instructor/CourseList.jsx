import React, { useState } from "react";
import CourseCreate from "./CreateCourse";
import CourseEdit from "./CourseEdit";
import { FaChalkboardTeacher, FaGraduationCap, FaHome, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const CourseList=()=> {
  const [courses, setCourses] = useState(   [
  {
    id: 1,
    title: "React Basics",
    image: "https://via.placeholder.com/150",
    price: 499,
    status: "Published"
  },
  {
    id: 2,
    title: "JavaScript Advanced",
    image: "https://via.placeholder.com/150",
    price: 699,
    status: "Draft"
  },
  {
    id: 3,
    title: "Tailwind CSS Mastery",
    image: "https://via.placeholder.com/150",
    price: 599,
    status: "Published"
  },
  {
    id: 4,
    title: "Node.js Fundamentals",
    image: "https://via.placeholder.com/150",
    price: 799,
    status: "Archived"
  },
  {
    id: 5,
    title: "Full-Stack Development",
    image: "https://via.placeholder.com/150",
    price: 999,
    status: "Published"
  }
  ,
  {
    id: 5,
    title: "Full-Stack Development",
    image: "https://via.placeholder.com/150",
    price: 999,
    status: "Published"
  }
  ,
  {
    id: 5,
    title: "Full-Stack Development",
    image: "https://via.placeholder.com/150",
    price: 999,
    status: "Published"
  }
]);

  const [isCreating, setIsCreating] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const handleCreateCourse = (newCourse) => {
    setCourses([...courses, { id: Date.now(), ...newCourse }]);
    setIsCreating(false);
  };

  const handleUpdateCourse = (updatedCourse) => {
    setCourses(
      courses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
    setEditingCourse(null);
  };

  return (
    <>
    <div className="flex h-[100vh] w-full bg-[#E3F1F1] overflow-hidden">

    
    <div className="p-6 w-[80vw] overflow-hidden ">
          
      <h1 className="text-2xl font-bold mb-4">Course List</h1>

      <button
        onClick={() => setIsCreating(true)}
        className="mb-10 bg-[#02204D] text-white px-4 py-2 rounded-xl"
      >
        Create Course
      </button>

      <div className="space-y-4 overflow-hidden ">
        <ul className="w-full bg-[#006D77] py-2 px-14 flex text-white rounded-xl justify-between ">
            <h1>Course</h1>
            <h1 className="ml-45">Price</h1>
            <h1 className="ml-8">Status</h1>
            <h1>Action</h1>
        </ul>
        <ul className="StudentList bg-w-full h-[63vh] rounded-xl  shadow p-2 overflow-hidden overflow-y-auto">

        {courses.map((course) => (
          <div
            key={course.id}
            className=" p-4 rounded-xl overflow-hidden  flex justify-between gap-10 items-center"
          >
            <div className='w-full   flex items-center justify-between'>
                <div  className="flex items-center gap-2">
               <img  className="h-15 w-25 rounded-md " src={course.image} alt="" />
            <h1  className=" w-60 h-fit  text-[#011638]"> {course.title} </h1>
                </div>
            <h1 className=" w-40 text-[#011638]"> $ {course.price} </h1>
            <h1 className="w-60 h-fit text-[#011638]">{course.status?course.status :"none"} </h1>
          </div>
            <button
              onClick={() => setEditingCourse(course)}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>
          </div>
        ))}
        </ul>
      </div>

      {isCreating && (
        <CourseCreate
          onCreate={handleCreateCourse}
          onCancel={() => setIsCreating(false)}
        />
      )}

      {editingCourse && (
        <CourseEdit
          course={editingCourse}
          onUpdate={handleUpdateCourse}
          onCancel={() => setEditingCourse(null)}
        />
      )}
    </div> 
    </div>
  </>);
}

export default CourseList