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
        file:user?.photoUrl
    })
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const changeEventHandler = (e) => {
        const {name, value} = e.target;
        setInput((prev)=> ({
            ...prev,
            [name]:value,
        }))
    }
    const changeFileHandler =(e)=>{
        setInput({...input, file:e.target.files?.[0]})
    }
    const submitHandler = async(e)=>{
        e.preventDefault()
       const formData = new FormData();
       formData.append("name", input.name);
       formData.append("description", input.description);
       if(input?.file){
        formData.append("file", input?.file)
       }

       try {
        setLoading(true)
        const res = await axios.put('https://lms-nswg.onrender.com/api/v1/user/profile/update',formData, {
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
    <div className="flex h-screen overflow-hidden">
      {/* <Navbar /> */}
      <Sidebar />

      <div className="flex-1 overflow-y-auto bg-gray-50 p-10">
        <h1 className="text-4xl font-bold text-[#001F3F] mb-6 text-left">Welcome , {user?.name}</h1>

        {/* About Section */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Left: Name Fields */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-[#001F3F] mb-4 text-left">About</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block font-medium mb-1 text-left">First Name</label>
                  <h1>{user?.name}</h1>
                </div>
                <div>
                  <label className="block font-medium mb-1 text-left">Email </label>
                  <p>{user?.email || "email is not available"}</p>
                </div>
              </div>
              <div>
                  <label className="block font-medium mb-1 text-left">Add your Bio : </label>
                  <p className='h-20 w-50 bg-gray-100'>{user?.description || "" }</p> 
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
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#001F3F] mb-4 text-left">Academic Details</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1 text-left">Program</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-left"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1 text-left">Year</label>
            <input
              type="text"
              className="w-full border rounded-md px-3 py-2 text-left"
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1 text-left">GPA</label>
            <h1>{user?.academicDetails}</h1>
          </div>
              <Dialog open={open} onOpenChange={setOpen}>
                            <Button onClick={()=>setOpen(true)} className="bg-blue-500">Edit Profile</Button>
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
                                        id="name"
                                        value={input.description}
                                        onChange={changeEventHandler}
                                        name="description"
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
                                        loading ? <Button className="bg-blue-400"><Loader2 className='mr-2 w-4 h-4 animate-spin'/> Please wait</Button> : <Button
                                        onClick={submitHandler} className="bg-blue-500">Save Changes</Button>
                                    }
                                    
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
        {/* <Lokendra /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
