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

exports.register = (req, res) => {
  // registration logic
  res.send("Register endpoint")
}

exports.login = (req, res) => {
  // login logic
  res.send("Login endpoint")
}