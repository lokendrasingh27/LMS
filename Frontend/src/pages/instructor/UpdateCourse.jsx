import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import CourseTab from './CourseTab'
import { ArrowBigLeft } from 'lucide-react'

const UpdateCourse = () => {
    return (
        <div className='md:p-10  h-[100vh] w-full overflow-y-auto'>
            <div className='flex items-center justify-between mb-5'>
                <div>
                    <Link to={`/instructor/course`}>
                <Button size="icon" variant="outline" className='rounded-full'><ArrowBigLeft size={16}/></Button>
                </Link>
                <h1 className='font-bold text-2xl'>Add detail informatin regarding course</h1>
                </div>
                <Link to="lecture">
                    <Button className="hover:bg-[#001F3F] bg-[#006D77]">Go to lectures page</Button>
                </Link>
            </div>
            <CourseTab/>
        </div>
    )
}

export default UpdateCourse