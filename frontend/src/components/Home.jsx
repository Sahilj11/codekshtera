import React from 'react';
import { GlobeDemo } from './GlobeDemo';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-black min-h-screen relative overflow-x-hidden flex flex-col  md:flex-row  items-center text-white p-6 md:gap-8">
      
      
      <div className="w-full md:w-1/2  flex flex-col items-center md:items-start p-8 rounded-lg shadow-2xl">
        <h1 className="text-2xl md:text-4xl text-zinc-200 font-bold mb-4 md:text-left text-center">
          Find Your Dream Job
        </h1>
        <p className="text-sm text-zinc-300 md:text-lg mb-6 md:text-left text-center">
          Explore job listings, connect with employers, and take the next step in your career on our sleek dark-themed platform.
        </p>

        <div className='flex gap-2'>
<<<<<<< HEAD
        <button className="bg-white text-black cursor-pointer px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg">
          Explore Jobs
        </button>
        <button className="bg-black text-white cursor-pointer px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-white hover:text-black border-1 border-white transition-colors shadow-lg">
         Post Job
        </button>
=======
      <Link to="/user-dashboard">  <button className="bg-white text-black cursor-pointer px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-lg">
          Your Account
        </button> </Link>
      <Link to="/recurator-dashboard">  <button className="bg-black text-white cursor-pointer px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-white hover:text-black border-1 border-white transition-colors shadow-lg">
         Post Job
        </button> </Link>
>>>>>>> ef1a4f0 (Frontend Code Organzie)
        </div>
      </div>

     
      <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
        <GlobeDemo />
      </div>

    </div>
  );
};

export default Home;
