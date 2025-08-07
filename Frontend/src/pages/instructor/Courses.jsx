import React from 'react'
import Sidebar from '../../components/Sidebar'
import { PiNotePencilBold } from "react-icons/pi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';


const Courses = () => {
    const Navigate=useNavigate();
  return (
    <div className=' flex h-[100vh]   bg-[#e3f1f1] overflow-hidden '>
      <Sidebar/>

      <div className='px-8 py-4 w-[180vh]  overlow-hidden  '>
        <h1 className='text-4xl font-bold'>Dashboard</h1>
        <div className='w-full mt-10 px-6 py-8 rounded-xl bg-white height-fit overflow-hidden shadow-md '>
            <div className='w-full flex justify-between items-center '>
                <h1 className='text-3xl font-bold'>All Courses</h1>
                <Link to='/instructor/create-course'>
                 <button  className='px-4 py-2 bg-black text-white rounded-md text-semibold '>Create New Course</button>
             </Link>
               </div>
                <div className=' mt-6 '>
                   <div className='flex justify-between items-center mb-6  bg-[#011638] text-white px-6 py-2 rounded-md'>
                     <li>Course</li>
                    <li className='  ml-10'>Student</li>
                    <li className='ml-10'>Revenue</li>
                    <li>Action</li>
                   </div>
                   <div className='overflow-y-auto instractor-course h-[50vh]'>
                    <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   <div className='flex justify-between items-center  bg-white px-2 py-2 rounded-md'>
                    <h1 className='w-40 '>full stact js</h1>
                    <h1 className='w-40 '>3000000</h1>
                    <h1 className='w-40 '>$80000</h1>
                    <div className='flex gap-2'>
                      <PiNotePencilBold className='text-2xl'/>
                      <AiOutlineCloseCircle className='text-2xl' />            
                    </div>
                    
                   </div>
                   </div>
                  
                   

                </div>

        </div>
      </div>
      
     
      
    </div>
  )
}

export default Courses
