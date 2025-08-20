import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const LectureTab = () => {
    const params=useParams()
    const {courseId,lectureId}=params
    const {lecture}=useSelector(store=>store.lecture)

    const selectedLecture = lecture.find(lecture =>lecture._id === lectureId)
    const [lectureTitle , setLectureTitle ] = useState(selectedLecture.lectureTitle)

    const [uploadvideoInfo , setUploadVideoInfo ] = useState(null)
    const [isFree , setIsFree ] = useState(selectedLecture.isPreviewFree)
    const [mediaProgress , setMediaProgress ] = useState(false)
    const [uploadProgress , setUploadProgress ] = useState(0)

  return (
   <Card>
    <CardHeader className="flex justify-between">
        <div>
            <CardTitle>Edit Lecture</CardTitle>
            <CardDescription>Make changes and click save when done.</CardDescription>
        </div>
        <div className='flex items-center gap-2'>
            <Button variant="destructive">
                Remove Lecture
            </Button>
        </div>
    </CardHeader>
    <CardContent>
        <div>
            <Label className="mb-1">Title</Label>
            <Input type="text" placeholder="Ex. Introduction to javascript" ></Input>
        </div>
        <div className='my-5'>
            <Label className="mb-1">Video <span className='text-red-500'>*</span> </Label>
            <Input type="file"  accept="video/*"  placeholder="Ex. Introduction to javascript" className='w-fit' ></Input>
        </div>
        <div className='flex items-center space-x-2 my-5'>
            <Switch className='bg-red-500'  />
            <Label>Is this video FREE</Label>
        </div>
        <div className='mt-4'>
            <Button className='bg-[#006D77]'>Update Lecture</Button>
        </div>
    </CardContent>
   </Card>
  )
}

export default LectureTab
