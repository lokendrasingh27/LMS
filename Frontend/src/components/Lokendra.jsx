import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
const Lokendra = () => {
  return (
    <div>
         <Dialog>
            <DialogTrigger><button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-full" >
            Edit Profile
          </button>
          </DialogTrigger>
            <DialogContent>
            <DialogHeader>
           <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default Lokendra
