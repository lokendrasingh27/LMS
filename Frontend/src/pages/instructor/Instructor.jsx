import Sidebar from '@/components/Sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Instructor = () => {
  return (
    <div className='bg-[#e3f1f1] h-[100vh] lg:flex  overflow-hidden w-'>
      <Sidebar/>
      <div className='flex-1'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Instructor
