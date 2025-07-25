import React from "react"

function App() {
  

  return (
   <>
   <div className="h-screen w-screen bg-black ">
<h1 className="text-white">lokendra singh</h1>
   </div>
   </>
  )
}

export default App

exports.getCourses = (req, res) => {
  // get courses logic
  res.send("Get courses endpoint")
}

exports.createCourse = (req, res) => {
  // create course logic
  res.send("Create course endpoint")
}