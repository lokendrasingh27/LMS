import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { setLecture } from '@/redux/lectureSlice'
import { Label } from '@radix-ui/react-label'
import axios from 'axios'
import { Edit, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const CreateLecture = () => {
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    const params=useParams()
    const [lectureTitle , setLectureTitle ] = useState("")
    const [loding , setLoding ] = useState(false)
    const {lecture} =useSelector(store=> store.lecture)

    const createLectureHandler = async()=>{
      try{
           setLoding(true)
           const res = await axios.post(`http://localhost:5000/api/course/${params?.courseId}/lecture`,{lectureTitle},{
            headers:{
              "Content-Type":"application/json"
            },
            withCredentials:true,
           })
           if(res.data.success){
            toast.success(res.data.message)
           }else{
              toast.error("something went wrong")
           }
      }catch(error){
        console.log(error)
      } finally{
        setLoding(false)
      }
    }

        useEffect(()=>{
        const getLectures = async()=> {
            try {
                const res = await axios.get(`http://localhost:5000/api/course/${params.courseId}/lecture`,{withCredentials:true})
                if(res.data.success){
                    dispatch(setLecture(res.data.lectures))
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        getLectures()
    },[lecture])
  return (
     <div className='p-4 md:p-10 md:pr-20 h-screen'>
      <h1 className='text-2xl text-[#15315B] font-bold mb-2'>Lets Add <span className='text-[#006D77] px-2 rounded-lg'>Lectures</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius necessitatibus fugit vel distinctio architecto, ut ratione rem nobis eaque?</p>
      <div className='mt-10 space-y-5'>
        <div>
            <Label>Title</Label>
            <Input value={lectureTitle} onChange={(e)=>setLectureTitle(e.target.value)} type="text" placeholder="Your Lecture Name" className="bg-white"  />
        </div>
        <div className='flex gap-2'>
            <Button onClick={()=>Navigate(`/instructor/course/${params.courseId}`)}  variant="outline">Back to Course</Button>
            <Button disabled={loding} onClick={createLectureHandler}  className="bg-[#006D77] hover:bg-gray-800">
               {
                loding ? <><Loader2 className='mr-1 h-4 w-4 animate-spin'/>Please wait </> : "Create Lecture"
               }
            </Button>
        </div>
      </div>
      <div className='mt-10'>
        
            {
              lecture?.map((lecture,index)=>{
                return<div key={index} className='flex items-center justify-between bg-[#F7F9FA] px-4 py-2 rounded-md my-2'>
                  <h1 className='font-bold text-gray-800'>Lecture -{index+1}:<span> {lecture.lectureTitle}</span> </h1>
                  <Edit size={20} onClick={()=>Navigate(`${lecture._id}`)}  className='cursor-pointer text-gray-600 hover:text-[#006D77]'/>
                </div>
              })
            }
          
        
      </div>
    </div>
  )

}

export default CreateLecture
