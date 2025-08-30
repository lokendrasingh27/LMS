import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import axios from 'axios'
import { ArrowLeft, Currency, Lock, PlayCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

const CourseDetails = () => {
    const navigate = useNavigate()
    const  {courseId}=useParams()
    const { course } = useSelector(store => store.course)
    const {user}= useSelector(store=>store.auth)
    const selectedCourse = course.find(course => course._id === courseId)
    const [courseLecture, setCourseLecture] = useState(null)
    const [isEnrolled , setIsEnrolled ] = useState(false)
    const [selectedLecture , setSelectedLecture ] = useState(null)

    const checkEnrollment =()=>{
        const verify=user?.enrolledCourses?.some( c =>( typeof c === 'string' ? c : c._id).toString()===courseId?.toString())
            if(verify){
                setIsEnrolled(true)
            }
    }
    useEffect(()=> {
        const getCourseLecture = async()=> {
            try {
                const res = await axios.get(`http://localhost:5000/api/course/${courseId}/lecture`, {withCredentials:true})
                if(res.data.success){
                    setCourseLecture(res.data.lectures)
                    console.log(res.data.lectures)
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        getCourseLecture()
     
    })

    const handlePayment = async (userId,courseId) => {
  // Step 1: Create Order
  try{
            const orderData = await axios.post("http://localhost:5000/api/payment/create-order", {userId,courseId},
    {withCredentials:true});
    console.log(orderData)

        const options={
            key:import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount:orderData.data.order.amount,
            currency:'INR',
            name:`${selectedCourse.courseTitle}`,
            description:"course Enrollment Payemnt",
            order_id:orderData.data.order.id,
            handler:async function(response){
                console.log("RazorPay Response",response)
                try{
                    const verifyPayment = await axios.post('http://localhost:5000/api/payment/verify',
                        {
                            ...response,
                            courseId,
                            userId
                        },{withCredentials:true})
                        setIsEnrolled(true)
                        toast.success(verifyPayment.data.message)
                } catch(error){
                    console.log(error)
                    toast.error(error.response.data.message)
                }
            }

        }    
        
        const rzp = new window.Razorpay(options)
        rzp.open()

  }catch(error){
    console.log(error)
    toast.error("something went wrong while enrolling")
  }
  
};

useEffect(()=>{
    checkEnrollment()
},[user])
   console.log(selectedLecture)
    return (
        <div className='bg-gray-100 h-screen w-[100vw] flex overflow-hidden '>
            <Sidebar/>
            <Card className="max-w-7xl overflow-y-auto  rounded-md mx-auto bg-[url('/bgimage.png')] shadow-md pt-5 ">
                {/* Header section */}
                <div className='px-4 py-2 z-9  shadow-xl fixed w-[80vw] '>
                    <div className='flex justify-between  items-center'>
                        <div className='flex gap-2 items-center'>
                            <Button size="icon" variant="outline" className="rounded-full" onClick={() => navigate('/')}>
                                <ArrowLeft size={16} />
                            </Button>
                            <h1 className='md:text-2xl font-bold text-gray-800'>{selectedCourse.courseTitle}</h1>
                        </div>
                        <div className='flex space-x-4'>
                            { !isEnrolled ? <Button onClick={()=>handlePayment(user._id,courseId)} className="bg-blue-500 hover:bg-blue-600">Enroll Now</Button>
                             : <Button onClick={()=>navigate(`/course-player/${courseId}`)}  className="bg-green-500 hover:bg-gray-600">Watch Now</Button> 
                        }
                        </div>
                    </div>
                </div>
                {/* Course overview section */}
                <div className='p-6 mt-10'>
                    <div className='flex flex-col lg:flex-row  lg:space-x-8'>
                        <img src={selectedCourse.courseThumbnail} alt="Thumbnail" className='w-full lg:w-1/3 rounded-md mb-4 lg:mb-0' />
                        <div>
                            <p className='text-gray-800 mb-4 font-semibold capitalize'>{selectedCourse.subTitle}</p>
                            <p className='mb-4 text-gray-700' dangerouslySetInnerHTML={{ __html: selectedCourse.description }} />
                            <p className="text-gray-800 font-semibold">⭐⭐⭐⭐⭐ (4.8) | 1,200 reviews</p>
                            <div className='mt-1'>
                                <p className="text-2xl font-bold text-gray-800">₹{selectedCourse.coursePrice}</p>
                                <p className="text-gray-500 line-through">₹599</p>
                            </div>
                            <ul className="mt-4 space-y-2">
                                <li className="text-gray-600">✔ 30+ hours of video content</li>
                                <li className="text-gray-600">✔ Lifetime access to course materials</li>
                                <li className="text-gray-600">✔ Certificate of completion</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Course Details Section */}
                <div className="  p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">What You'll Learn</h2>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Build dynamic web applications with React and Node.js</li>
                        <li>Deploy websites with modern tools like Vercel and Netlify</li>
                        <li>Understand REST APIs and database integration</li>
                    </ul>

                    <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Requirements</h2>
                    <p className="text-gray-700">Basic programming knowledge is helpful but not required.</p>

                    <h2 className="text-xl font-bold text-gray-800 mt-6 mb-4">Who This Course is For</h2>
                    <p className="text-gray-700">Beginners, aspiring developers, and professionals looking to upgrade skills.</p>
                </div>
                {/* course lectures */}
                {
                    courseLecture?.length == 0 ? null : <div className='flex flex-col md:flex-row justify-between gap-10 p-6'>
                        <div className='flex-1'>
                            <h2 className='text-xl font-bold text-gray-800'>Course Curriculum</h2>
                            <p className='text-gray-700 italic my-2'>{courseLecture?.length} Lectures</p>
                            <div className='space-y-4'>
                                {
                                    courseLecture?.map((lecture, index)=>{
                                        return <div onClick={()=>
                                            {
                                                if(lecture.isPreviewFree){
                                                    setSelectedLecture(lecture)
                                                }
                                        }}  
                                        
                                        key={index} className='flex items-center gap-3 bg-gray-200 p-4 rounded-md cursor-pointer'>
                                            <span>
                                                {lecture.isPreviewFree ? <PlayCircle size={20}/>:<Lock size={20}/>}
                                            </span>
                                            <p>{lecture.lectureTitle}</p>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className='w-full lg:w-1/3'>
                        <Card>
                            <CardContent className="p-4 flex flex-col">
                                 
                                    <div className='w-full aspect-video  mb-4'>
                               {
                                selectedLecture?.videoUrl || selectedLecture?.videoLink  ? <video className='w-full h-full object-cover' controls  src={selectedLecture?.videoUrl || selectedLecture.videoLink}></video> :
                                <span className='text-black text-sm '>Selected a preview lecture to watch</span>
                               }
                                
                                   </div> 
                                   
                                   <h1>{courseLecture ? courseLecture[0]?.lectureTitle : "Lecture Title"}</h1>
                                   <Separator className="my-2"/>
                                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, aspernatur a sed dolores possimus inventore amet quos ab rerum illo.</p>
                            </CardContent>
                            <CardFooter className="flex p-4">
                              <Button>Continue Course</Button>
                            </CardFooter>
                        </Card>
                        
                        </div>
                    </div>
                }
                {/* instructor section */}
                <div className='p-6'>
                    <h2 className='text-xl font-bold text-gray-800 mb-4'>Instructor</h2>
                    <div className='flex items-center space-x-4'>
                        <img 
                        src={selectedCourse.creator.photoUrl} 
                        alt="instructor" 
                        className='w-16 h-16 rounded-full' 
                        />
                        <div>
                            <h3 className='text-lg font-bold text-gray-800'>{selectedCourse.creator.name}</h3>
                            <p className='text-gray-600'>Senior Full-Stack Developer</p>
                        </div>
                    </div>
                    <p className='text-gray-700 mt-4'>
                        {selectedCourse.creator.description}
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default CourseDetails