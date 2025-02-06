import React from 'react'
import { GlobeDemo } from './GlobeDemo'
const Home = () => {
  return (
    <div className='bg-black  min-h-screen relative overflow-x-hidden flex items-center justify-center text-white'>
    <div className=' mx-auto flex w-[40%] flex-col items-center p-8 rounded-lg shadow-2xl'>
        <h1 className='md:text-4xl text:2xl text-orange-500 font-bold mb-4 text-center'>Find Your Dream Job</h1>
        <p className='md:text-lg text-sm text-center mb-6'>Explore job listings, connect with employers, and take the next step in your career on our sleek dark-themed platform.</p>
        <button className='bg-white text-black cursor-pointer px-3 py-1 md:px-6 md:py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg'>Explore Jobs</button>
    </div>
    <div className=' w-[55%]  mt-6 '>
        <div className='flex items-center justify-center h-full'>
            <GlobeDemo />
        </div>
    </div>
</div>
  )
}

export default Home