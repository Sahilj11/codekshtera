
import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <div className='bg-black  flex items-center justify-between p-4 shadow-lg'>
    <Link to="/" className="flex items-center  gap-2 px-4 md:py-2 cursor-pointer">
  <p className="font-bold md:text-3xl text-lg transition-colors flex items-center justify-center text-blue-500">
    Job<span className="text-gray-300">Seeker</span>
  </p>
  
</Link>
        <div className='flex gap-4 mr-5'>
          <Link to="/login">  <button  className="border-2 font-semibold border-white cursor-pointer transition-all duration-300 text-white px-6 py-2 rounded-full bg-black hover:bg-white shadow-lg hover:text-black">
                Login
            </button> </Link>
          <Link to="/signup"> <button className="border-2 font-semibold border-white cursor-pointer transition-all duration-300 text-white px-6 py-2 rounded-full bg-black hover:bg-white shadow-lg hover:text-black">
                Signup
            </button>  </Link>
            
        </div>
    </div>
</div>
  )
}

export default Navbar
