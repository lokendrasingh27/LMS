
import { Button } from '@/components/ui/button'
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
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const CreateCourse = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [courseTitle, setCourseTitle] = useState("")
    const [category, setCategory] = useState("")

    const getSelectedCategory = (value)=> {
        setCategory(value)
    }
    const createCourseHandler = async ()=> {
        console.log(courseTitle, category);
        
        try {
            setLoading(true)
            const res = await axios.post('http://localhost:5000/api/course/', {courseTitle,category}, {
                headers: {
                    "Content-Type":"application/json"
                },
                withCredentials:true
            })
            if(res.data.success){
               navigate('/instructor/course')
               toast.success(res.data.message)
            }
        } catch (error) {
            console.log(error);
            
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className='p-10 md:pr-20 h-screen'>
            <h1 className='text-2xl font-bold'>Lets Add <span className='text-[#006D77]'>Courses</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius necessitatibus fugit vel distinctio architecto, ut ratione rem nobis eaque?</p>
            <div className='mt-10'>
                <div>
                    <Label className='mb-2'>Title</Label>
                    <Input 
                    type="text" 
                    value={courseTitle} 
                    onChange={(e)=>setCourseTitle(e.target.value)} 
                    placeholder="Your Course Name" 
                    className="bg-white" 
                    />
                </div>
                <div className='mt-4 mb-5'>
                    <Label>Category</Label>
                    <Select onValueChange={getSelectedCategory}>
                        <SelectTrigger className="w-[180px] bg-white mt-2">
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
                <div className='flex gap-2'>
                    <Button onClick={()=>navigate('/instructor/course')} variant="outline">Cancel</Button>
                    <Button className="bg-[#006D77] hover:bg-[#006D64] " disabled={loading} onClick={createCourseHandler}>
                    {
                        loading ? <><Loader2 className='animate-spin mr-1 h-4 w-4 '/>Please wait</> : "Create"
                    }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CreateCourse
