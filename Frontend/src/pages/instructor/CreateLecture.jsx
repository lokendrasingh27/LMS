import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Edit } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateLecture = () => {
    const Navigate=useNavigate()
  return (
     <div className='p-4 md:p-10 md:pr-20 h-screen'>
      <h1 className='text-2xl text-[#15315B] font-bold mb-2'>Lets Add <span className='text-[#006D77] px-2 rounded-lg'>Lectures</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius necessitatibus fugit vel distinctio architecto, ut ratione rem nobis eaque?</p>
      <div className='mt-10 space-y-5'>
        <div>
            <Label>Title</Label>
            <Input type="text" placeholder="Your Lecture Name" className="bg-white"  />
        </div>
        <div className='flex gap-2'>
            <Button onClick={()=>Navigate('/instructor/course')}  variant="outline">Back to Course</Button>
            <Button  className="bg-[#006D77] hover:bg-gray-800">
                Create Lecture
            </Button>
        </div>
      </div>
      <div className='mt-10'>
        
            
                 <div  className='flex items-center justify-between bg-[#F7F9FA] px-4 py-2 rounded-md my-2'>
                  <h1 className='font-bold text-gray-800'>Lecture -1:<span> Introduction</span> </h1>
                  <Edit   className='cursor-pointer text-gray-600 hover:text-[#006D77]'/>
                </div>
          
        
      </div>
    </div>
  )

}

export default CreateLecture
