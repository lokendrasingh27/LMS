import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import CourseTab from './CourseTab'

const UpdateCourse = () => {
    return (
        <div className='md:p-10  h-[100vh] w-full overflow-y-auto'>
            <div className='flex items-center justify-between mb-5'>
                <h1 className='font-bold text-2xl'>Add detail informatin regarding course</h1>
                <Link to="lecture">
                    <Button className="hover:text-blue-600">Go to lectures page</Button>
                </Link>
            </div>
            <CourseTab/>
        </div>
    )
}

export default UpdateCourse