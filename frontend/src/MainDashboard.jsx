import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const MainDashboard = () => {
  const { jobs } = useSelector((state) => state.job);  // Retrieve jobs from Redux

  return (
    <div className="p-8 bg-black   text-white">
      <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-8 drop-shadow-lg">
        🔥 Explore Exciting Job Opportunities
      </h1>

      <div className="mb-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-300 mb-4 border-b border-indigo-500 pb-2">
          Featured Job Listings
        </h2>

        <ul className="space-y-6">
          {jobs?.length > 0 ? (
            jobs.map((job) => (
              <li
                key={job.id}
                className="p-6 bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl hover:shadow-2xl transition duration-300 border border-gray-700 transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2">{job.title}</h3>
                <p className="text-gray-400 mb-1">{job.description}</p>
                <p className="text-gray-500"> <span className="font-medium">{job.location}</span></p>
                <p className="text-gray-300">💰 <span className="font-semibold">{job.salary}</span></p>

                {/* Apply Button */}
              <Link to="/apply-jobs"> <button className="mt-4 px-5 py-2 bg-gradient-to-bl to-gray-900 from-black cursor-pointer text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-indigo-600 hover:scale-105 active:scale-95 shadow-md">
                  Apply Now 🚀
                </button> </Link> 
              </li>
            ))
          ) : (
            <p className="text-gray-400 text-center italic">No jobs posted yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainDashboard;
