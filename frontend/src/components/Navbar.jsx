import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <div className='bg-black  flex items-center justify-between p-4 shadow-lg'>
      <Link to="/"> <p className='text-white px-4 md:py-2 font-bold md:text-3xl text-lg hover:text-blue-700 transition-colors cursor-pointer'>JobPortal</p> </Link> 
        <div className='flex gap-4 mr-5'>
          <Link to="/login">  <button className='rounded-lg cursor-pointer md:px-6 md:py-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg '>
                Login
            </button> </Link>
          <Link to="/signup">  <button className='rounded-lg cursor-pointer  md:px-6 md:py-2 px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg'>
                Signup
            </button> </Link>
        </div>
    </div>
</div>
  )
}

export default Navbar