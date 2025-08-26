import { Button } from '@/components/ui/button'
import { ArrowBigLeft } from 'lucide-react'
import React, { useState } from 'react' 
import { Link, useParams } from 'react-router-dom' 
import Createassignment from './Createassignment'
import Createquiz from './CreateQuiz';

const LectureTab = () => {
    return (
        <div className="p-4 border rounded-lg bg-slate-50">
            <h2 className="text-lg font-semibold text-slate-700">Lecture Content Area</h2>
            <p className="text-slate-500 mt-2">This is where the lecture tabs and their content would be displayed.</p>
        </div>
    );
};


const EditLecture = () => {
    const params = useParams()
    const courseId = params.courseId
    const [isAssignmentModalOpen, setAssignmentModalOpen] = useState(false);
    const handleOpenModal = () => setAssignmentModalOpen(true);
    const handleCloseModal = () => setAssignmentModalOpen(false);
    const [isQuizModalOpen , setquizmodelopen] = useState(false);
    const handleOpenQuizModal = () => setquizmodelopen(true);
    const handleCloseQuizModal = () => setquizmodelopen(false);

    return (
        <>
            <div className='p-4 md:p-10 h-screen'>
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center justify-between w-full '>
                        <div className='flex items-center  gap-2'>
                            <Link to={`/instructor/course/${courseId}/lecture`}>
                                <Button size="icon" variant="outline" className='rounded-full'><ArrowBigLeft size={16} /></Button>
                            </Link>
                            <h1 className='font-bold text-xl text-[#001F3F]'>Update Your Lecture</h1>
                        </div>
                        <div className=' flex gap-2'>
                            <Button onClick={handleOpenModal} className='bg-[#001F3F] hover:bg-[#006D77]'>Create Assignment</Button>
                            <Button onClick={handleOpenQuizModal} className='bg-[#001F3F] hover:bg-[#006D77]'>Create Quizes</Button>
                        </div>
                    </div>
                </div>
                <LectureTab />
            </div>

            <Createassignment
                isOpen={isAssignmentModalOpen}
                onClose={handleCloseModal}
            />
            <Createquiz
                isOpen={isQuizModalOpen}
                onClose={handleCloseQuizModal}
            />
        </>
    )
}

export default EditLecture;