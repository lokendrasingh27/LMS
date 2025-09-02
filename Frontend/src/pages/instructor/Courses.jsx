import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCourse } from '@/redux/courseSlice'
import axios from 'axios'
import { Badge } from '@/components/ui/badge'
import { Edit } from 'lucide-react'

const Courses = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const { course } = useSelector(store => store.course)

  useEffect(() => {
    const getCreatorCourse = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/course/', { withCredentials: true })
        if (res.data.success) {
          dispatch(setCourse(res.data.courses))
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCreatorCourse()
  }, [dispatch])

  return (
    <div className="md:p-10 p-4 w-full min-h-screen">
      <Button className="bg-[#006D77]" onClick={() => Navigate('create')}>Create Course</Button>

      {/* Responsive wrapper */}
      <div className="w-full mt-10 rounded-xl border overflow-x-auto">
        <Table className="min-w-[600px]">
          <TableCaption>A list of your recent Courses.</TableCaption>
          <TableHeader>
            <TableRow className="bg-[#006D77] text-white">
              <TableHead className="w-[200px] px-4 text-white rounded-l-lg">Course</TableHead>
              <TableHead className="text-right text-white">Price</TableHead>
              <TableHead className="text-center text-white">Status</TableHead>
              <TableHead className="text-right px-4 text-white rounded-r-lg">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {course?.map((course) => (
              <TableRow
                key={course._id}
                className="hover:bg-[#15315B] hover:text-white"
              >
                <TableCell className="flex items-center gap-3 font-semibold">
                  <img
                    className="w-30 h-16 object-cover hidden md:block rounded-md"
                    src={course?.courseThumbnail}
                    alt="thumbnail"
                  />
                  <span className="line-clamp-2">{course.courseTitle}</span>
                </TableCell>

                <TableCell className="text-right font-medium">
                  {course?.coursePrice || "NA"}
                </TableCell>

                <TableCell className="text-center">
                  <Badge className={course.isPublished ? "bg-green-400" : "bg-red-400"}>
                    {course.isPublished ? "Published" : "Draft"}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    onClick={() => Navigate(`/instructor/course/${course._id}`)}
                  >
                    <Edit />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Courses
