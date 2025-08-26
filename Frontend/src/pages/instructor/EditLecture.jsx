import { Button } from '@/components/ui/button'
import { ArrowBigLeft } from 'lucide-react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import LectureTab from './LectureTab'

const EditLecture = () => {
    const params=useParams()
    const courseId=params.courseId
  return (
    <div className='p-4 md:p-10 h-screen'>
        <div className='flex items-center justify-between mb-5'>
            <div className='flex items-center justify-between w-full '>
                <div className='flex items-center  gap-2'>
                  <Link to={`/instructor/course/${courseId}/lecture`}>
                <Button size="icon" variant="outline" className='rounded-full'><ArrowBigLeft size={16}/></Button>
                </Link>
                <h1 className='font-bold text-xl text-[#001F3F]'>Update Your Lecture</h1>
                </div>
                <div className=' flex gap-2'>
                  <Button className='bg-[#001F3F] hover:bg-[#006D77]'>Create Assignment</Button>
                  <Button className='bg-[#001F3F] hover:bg-[#006D77]'>Create Quizess</Button>
                </div>
            </div>
        </div>
       <LectureTab/>
    </div>
  )
}

export default EditLecture
