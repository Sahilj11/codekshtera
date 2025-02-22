import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-bl from-black to-gray-900 text-white">
      
      <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">404</h1>

      
      <p className="mt-4 text-lg md:text-2xl text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>

      
      <Link to="/" className="mt-6 px-6 py-3 bg-gray-700 text-white rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
