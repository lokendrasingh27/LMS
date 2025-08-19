import RichTextEditor from '@/components/RichTextEditor'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import axios from 'axios'
import { Loader2, Subtitles } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setCourse } from '@/redux/courseSlice'

const CourseTab = () => {

     const param =useParams()
     const id =param.courseId
     const Naviagte=useNavigate()
     const dispatch=useDispatch()
     const {course}=useSelector(store=>store.course)
     const [loding , setLoding ] = useState(false)
     const selectCourse = course.find(course=> course._id === id)

     const [selectedCourse , setSelectedCourse ] = useState(selectCourse)

     const getCourseById= async()=>{
        try{
            
            const res = await axios.get(`http://localhost:5000/api/course/${id}`,{withCredentials:true})

            if(res.data.success){
                setSelectedCourse(res.data.course)
            }

        } catch(error){
            console.log(error)
        }
     }

     useEffect(()=>{
        getCourseById()
     })

     const [input , setInput ] = useState({
        courseTitle:selectedCourse?.courseTitle,
        subtitle:selectedCourse?.subTitle,
        description:selectedCourse?.description,
        category:selectedCourse?.category,
        courseLevel:selectedCourse?.courseLevel,
        coursePrice:selectedCourse?.coursePrice,
        file:""
     })

     const [previewThumbnail , setPreviewThumbnail ] = useState(selectedCourse?.courseThumbnail)


     const chnageEventHandler =(e)=>{
    const {name,value}=e.target
    setInput({...input,[name]:value})
}

        const selectCategory =(value)=>{
                
          setInput({...input,category:value})

        }
        
        const selectCourseLevel=(value)=>{

          setInput(  {  ...input,courseLevel:value})
        }
                
        //get File

        const selectThumbnail = (e)=> {
        const file = e.target.files?.[0];
        if(file){
            setInput({...input, courseThumbnail:file});
            const fileReader = new FileReader()
            fileReader.onloadend = () => setPreviewThumbnail(fileReader.result);
            fileReader.readAsDataURL(file)
        }
    }
      
    const updateCourseHandler = async()=>{
        const formData = new FormData()
        formData.append("courseTitle",input.courseTitle)
        formData.append("subTitle",input.subtitle)
        formData.append("description",input.description)
        formData.append("category", input.category)
        formData.append("courseLevel",input.courseLevel)
        formData.append("coursePrice",input.coursePrice)
        formData.append("file",input.courseThumbnail)
        try{
            setLoding(true)

            const res= await axios.put(`http://localhost:5000/api/course/${id}`,formData,
                {
                    headers:{
                        "Content-Type":"multipart/form-data"
                    },
                    withCredentials:true
                })
           if(res.data.success){
            Naviagte('lecture')
           dispatch([...course,setCourse(res.data.course)])

           }
        }catch(error){
            console.log(error)
        } finally{
            setLoding(false)
        }
    }


  return (
    <Card>
    <CardHeader className="flex md:flex-row justify-between overflow-hidden ">
        <div>
            <CardTitle>Basic Course Information</CardTitle>
            <CardDescription>
                Make changes to your course here. Click save when you're done.
            </CardDescription>
        </div>
        <div className='space-x-2'>
            <Button className="bg-[#006D77]  hover:bg-[#001F3F]">Publish</Button>
            <Button className="bg-red-400  hover:bg-[#001F3F]" >Remove Course</Button>
        </div>
    </CardHeader>
    <CardContent>
        <div className='space-y-4 mt-5'>
            <div>
               <Label className='mb-1'>Title</Label> 
               <Input value={input.courseTitle} onChange={chnageEventHandler} type="text" name="courseTitle" placeholder="Ex. FullStack developer" />
             </div> 
              <div>
               <Label className='mb-1'>Subtitle</Label> 
               <Input value={input.subtitle} onChange={chnageEventHandler} type="text" name="subTitle" placeholder="Ex. become a  FullStack developer from zero to hero in 2 months" />
             </div> 
             <div>
               <Label className='mb-1'>Description</Label> 
               <RichTextEditor  input={input} setInput={setInput} />
             </div> 
             <div className='flex md:flex-row flex-wrap gap-1 items-center md:gap-5'>
                <div>
                    <Label className='mb-1'>Category</Label>
                         <Select defaultValue={input.category} onChange={selectCategory} >
                        <SelectTrigger className="w-[180px] bg-white">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                <SelectItem value="Next Js">Next Js</SelectItem>
                                <SelectItem value="Data Science">Data Science</SelectItem>
                                <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                                <SelectItem value="Backend Development">Backend Development</SelectItem>
                                <SelectItem value="MernStack Development">MernStack Development</SelectItem>
                                <SelectItem value="Javascript">Javascript</SelectItem>
                                <SelectItem value="Python">Python</SelectItem>
                                <SelectItem value="Docker">Docker</SelectItem>
                                <SelectItem value="MongoDB">MongoDB</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label className='mb-1'>Course Level</Label>
                     <Select defaultValue={input.courseLevel} onChange={selectCourseLevel} >
                        <SelectTrigger className="w-[180px] bg-white">
                            <SelectValue placeholder="Select a Course Level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Course Level</SelectLabel>
                                <SelectItem value="Beginner">Beginner</SelectItem>
                                <SelectItem value="Intermediate">Intermediate</SelectItem>
                                <SelectItem value="Advance">Advance</SelectItem>
                                
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Label className='mb-1'>Price in (INR)</Label>
                    <Input value={input.coursePrice} onChange={chnageEventHandler} type="Number" name="coursePrice"
                    placeholder="199"
                    className="w-fit"
                    />
                </div>
             </div>
                <div className=''>
                    <Label className='mb-1'>Course Thumbnail</Label>
                     <Input
                      type="file"
                      id="file"
                      onChange={selectThumbnail}
                    placeholder="199"
                    accept="image/*"
                    className="w-fit"
                    />
                    {
                        previewThumbnail && (
                            <img  className='w-64 my-2' src={previewThumbnail} alt="Thumbnail" />
                        )
                    }
                </div>
                <div className='flex gap-2'>
                    <Button onClick={()=>Naviagte('/instructor/course')} variant="outline">Cancel</Button>
                    <Button disabled={loding} onClick={updateCourseHandler} className="bg-[#006D77]  hover:bg-[#001F3F]">
                        {
                            loding ? (
                                <>
                                <Loader2 className='mr-2 w-4 h-4 animate-spin '/>
                                Please wait
                                </>
                            ):"Save"
                        }
                    </Button>
                </div>
        </div>
    </CardContent>
    </Card>
  )
}

export default CourseTab
