// src/pages/ProfilePage.jsx
import React, { useState, useRef } from 'react';
import Sidebar from '../../components/Sidebar';
// import Navbar from '../components/Navbar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import Lokendra from '@/components/Lokendra';
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button';



const ProfilePage = () => {
      const dispatch = useDispatch()
    const {user} = useSelector(store=>store.auth)
    const [input, setInput] = useState({
        name:user?.name,
        description: user?.description,
        course:user?.academicDetails.course,
        year:user?.academicDetails.year,
        file:user?.photoUrl
    })
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const changeEventHandler =(e)=>{
      const {name,value}=e.target
      setInput((prev)=>({
        ...prev,
        [name]:value
      }))
    }

   const changeFileHandler= (e)=>{
    setInput({...input,file:e.target.files?.[0]})
   }
    
   const submitHandler = async(e)=>{
        e.preventDefault()
       const formData = new FormData();
       formData.append("name", input.name);
       formData.append("description", input.description);
       formData.append("course",input.course);
       formData.append("year",input.year)
       if(input?.file){
        formData.append("file", input?.file)
       }

       try {
        setLoading(true)
        const res = await axios.put('http://localhost:5000/api/auth/profile/update',formData, {
            headers:{
              "Content-Type":"multipart/form-data"
            },
            withCredentials:true,
        })
        if(res.data.success){
            setOpen(false)
            toast.success(res.data.message)
           dispatch(setUser(res.data.user))
        }
       } catch (error) {
          console.log(error);
          
       } finally {
        setLoading(false)
       }
        
    }
 
  return (
    <div className="flex h-screen bg-[#eaf4f4] overflow-hidden">
      {/* <Navbar /> */}
      <Sidebar />

      <div className="flex-1 overflow-y-auto bg-[#eaf4f4] p-6">
        <div className='flex items-center justify-between px-8'><h1 className="text-4xl font-semibold text-[#001F3F] mb-6 text-left">Welcome , {user?.name|| "user"}</h1>
          <Dialog open={open} onOpenChange={setOpen}>
                            <Button onClick={()=>setOpen(true)} className="bg-[#011638] hover:bg-[#B3E5FC] hover:text-black">Edit Profile</Button>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle className="text-center">Edit Profile</DialogTitle>
                                    <DialogDescription className="text-center">
                                       Make changes to your profile here.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className='grid gap-4 py-4'>
                                    <div className='grid grid-cols-4 items-center gap-4'>
                                        <Label htmlFor="name" className="text-right">
                                            Name
                                        </Label>
                                        <Input
                                        id="name"
                                        name="name"
                                        value={input.name}
                                        onChange={changeEventHandler}
                                        className="col-span-3 text-gray-500"
                                        />
                                    </div>
                                    <div className='grid grid-cols-4 items-center gap-4'>
                                        <Label htmlFor="name" className="text-right">
                                            Description
                                        </Label>
                                        <Input
                                        id="description"
                                        value={input.description}
                                        onChange={changeEventHandler}
                                        name="description"
                                        className="col-span-3 text-gray-500"
                                        />
                                    </div>
                                    <div className='grid grid-cols-4 items-center gap-4'>
                                        <Label htmlFor="course" className="text-right">
                                            Course
                                        </Label>
                                        <Input
                                        id="course"
                                        value={input.course}
                                        onChange={changeEventHandler}
                                        name="course"
                                        className="col-span-3 text-gray-500"
                                        />
                                    </div>
                                    <div className='grid grid-cols-4 items-center gap-4'>
                                        <Label htmlFor="year" className="text-right">
                                            Year
                                        </Label>
                                        <Input
                                        id="year"
                                        value={input.year}
                                        onChange={changeEventHandler}
                                        name="year"
                                        className="col-span-3 text-gray-500"
                                        />
                                    </div>

                                    <div className='grid grid-cols-4 items-center gap-4'>
                                        <Label htmlFor="name" className="text-right">
                                            Picture
                                        </Label>
                                        <Input
                                          id="file"
                                        type="file"
                                        accept="image/*"
                                        onChange={changeFileHandler}
                                        className="w-[277px]"
                                        />
                                    </div>
                                </div>
                                <DialogFooter>
                                  {
                                    loading ? <Button className="bg-blue-400"><Loader2 className='mr-2 w-4 h-4 animate-spin'/>Please wait</Button> :<Button
                                        onClick={submitHandler} className="bg-[#011638] hover:bg-[#B3E5FC] hover:text-black">Save Changes</Button>
                                  }
                                   
                                    
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
        </div>

        {/* About Section */}
        <div className=" p-6 rounded-xl text-white bg-[#006D77] shadow-md mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left: Name Fields */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-[#001F3F] text-white mb-4 text-left">About</h2>

              <div className="grid md:grid-cols-3 gap-20 mb-4">
                <div>
                  <label className="block font-medium mb-1 text-left">First Name :</label>
                  <h1>{user?.name}</h1>
                </div>
                <div>
                  <label className="block font-medium mb-1 text-left">Email </label>
                  <p>{user?.email || "email is not available"}</p>
                </div>
                  <div>
                  <label className="block font-medium mb-1 text-left">Role </label>
                  <p className='first-letter:uppercase'>{user?.role || "email is not available"}</p>
                </div>
              </div>
              <div>
                  <label className="block font-medium mb-1 text-left">Add your Bio : </label>
                  <p className='h-20 w-50 text-white p-3 rounded-xl'>{user?.description || "" }</p> 
                </div>
            </div>

            {/* Right: Upload Photo */}
            <div className="mt-6 md:mt-0 md:ml-6 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-3 flex items-center justify-center">
               
                  <img src={user?.photoUrl} alt="Profile" className="w-full h-full object-cover" />
              
                  
               
              </div>

             
             
            </div>
          </div>
          <div></div>
        </div>

        {/* Academic Section */}
        <div className=" p-6 rounded-xl text-white bg-[#006D77] shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-4 text-left">Academic Details</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1 text-left">Program</label>
           <h1>{user?.academicDetails.course}</h1>
          </div>

          <div className="mb-4 flex gap-2">
            <label className="block font-medium mb-1 text-left">Year <span className='pl-2'>:</span> </label>
           <h1>{user?.academicDetails.year}</h1>
          </div>

         
              
        {/* <Lokendra /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
