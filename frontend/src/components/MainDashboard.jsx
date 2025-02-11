import React from 'react';
import { useSelector } from 'react-redux';

const MainDashboard = () => {
  const { jobs } = useSelector((state) => state.job);  // Retrieve jobs from Redux

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold text-center text-indigo-500 mb-8">Explore Jobs</h1>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Job Listings</h2>
        <ul className="space-y-4">
          {jobs.map((job) => (
            <li key={job.id} className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-indigo-500">{job.title}</h3>
              <p className="text-gray-400">{job.description}</p>
              <p className="text-gray-500">Location: {job.location}</p>
              <p className="text-gray-300">Salary: {job.salary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainDashboard;
