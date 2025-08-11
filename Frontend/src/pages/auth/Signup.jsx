import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
 

const Signup = () => {
  const Navigate = useNavigate();
  const [user , setUser ] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)
    try{
        const res= await axios.post('http://localhost:5000/api/auth/register', user, {
          Headers:{
            "Content-Type":"application/json"
          },
          withCredentials: true
        })
        if(res.data.success){
          Navigate('/login');
          alert(res.data.message);
        }
        else{
          alert("something went wrong");
        }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }
  return (
    <div className="min-h-screen bg-[#edf7f7] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-3xl shadow-md w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Oxford Logo" className="w-20 h-20" />
        </div>
        <h2 className="text-center text-lg font-medium mb-6">Signup Your Account</h2>

        <form>
          <div className="mb-4">
            <h1 className="outline-none focus:outline-none text-sm font-medium mb-1">Role</h1>
            <div className="flex space-x-6">
        
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="role"
            value="student"
            id='role1'
            onChange={handleChange}
               checked={user.role === 'student'}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:outline-none"
          />
          <span>Student</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="role"
            value="instructor"
             id='role2'
            onChange={handleChange}
               checked={user.role === 'instructor'}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:outline-none"
          />
          <span>Instructor</span>
        </label>

        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="role"
            value="admin"
            id='role3'
            onChange={handleChange}
               checked={user.role === 'admin'}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 focus:outline-none"
          />
          <span>Admin</span>
        </label>
      </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              name="name"
              onChange={handleChange}
              value={user.name}
              id='nam'
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={user.email}
              id='email'

              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
              value={user.password}

              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-[#001f3f] text-white py-2 rounded-md hover:bg-[#003366] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
