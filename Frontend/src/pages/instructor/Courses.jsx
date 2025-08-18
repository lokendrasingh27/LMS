import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]



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
    })
 
  return (
    <div className='md:p-10 p-4 w-full h-screen'>
      <Button className="bg-[#006D77]" onClick={()=>Navigate('create')} >Create Course</Button>
      <div className='w-full  mt-10 rounded-xl border  '>
        <Table className='  '>
      <TableCaption>A list of your recent Courses.</TableCaption>
      <TableHeader className="">
        <TableRow className="bg-[#006D77] p text-white  hover:bg-[#006D77]  ">
          <TableHead className="w-[100px] px-4 text-white rounded-l-lg">Course</TableHead>
          <TableHead className="text-right text-white">Price</TableHead>
          <TableHead className="text-end text-white">Status</TableHead>
          <TableHead className="text-right px-4 text-white rounded-r-lg">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody  >
        {course?.map((course) => (
          <TableRow className="hover:bg-[#15315B] bg- hover:text-white rounded-xl" key={course._id}>
            <TableCell className="md:w-[300px] flex items-center gap-3 font-semibold">
              <img className='w-20 hidden md:block rounded-sm ' src={course?.courseThumbnail} alt="thumbnail"  />
              {course.courseTitle}</TableCell>
              <TableCell className="text-right font-medium">{course?.coursePrice || "NA"}</TableCell>
              <TableCell className="text-end">
                <Badge className={course.isPublished ? "bg-green-400":"bg-red-400"}>
                  {course.isPublished ?"Publisjed":"Draft"}</Badge>
                  </TableCell>
                  <TableCell className='text-right'><Button variant='ghost'onClick={()=>Navigate(`/instructor/course/${course._id}`)} ><Edit /></Button></TableCell>
          
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
      </div>
    </div>
  )
}

export default Courses
