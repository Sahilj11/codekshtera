import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setJobs } from '../store/jobSlice';
import { addJob } from '../store/jobSlice';
import { deleteJob } from '../store/jobSlice';

const RecuratorDashboard = () => {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.job);

  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobSalary, setJobSalary] = useState('');

  useEffect(() => {
    // Fetch job postings from API
    fetch('/api/jobs')  // Replace with your actual API endpoint
      .then((res) => res.json())
      .then((data) => dispatch(setJobs(data)));
  }, [dispatch]);

  const handleAddJob = (e) => {
    e.preventDefault();

    const newJob = {
      id: Math.random(),  // In a real-world app, the id should come from the database
      title: jobTitle,
      description: jobDescription,
      location: jobLocation,
      salary: jobSalary,
    };

    dispatch(addJob(newJob));
    console.log(newJob)
    // Reset form
    setJobTitle('');
    setJobDescription('');
    setJobLocation('');
    setJobSalary('');
  };

  const handleDeleteJob = (id)=>{
    dispatch(deleteJob(id))
    
    console.log("job is delete successfully")
  }

  return (
    <div className=" mx-auto p-8 bg-gray-900 text-white shadow-lg  grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold text-center text-indigo-500 mb-8">Recurator Dashboard</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Job Listings</h2>
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id} className="p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-indigo-500">{job.title}</h3>
                <p className="text-gray-400">{job.description}</p>
                <p className="text-gray-500">Location: {job.location}</p>
                <p className="text-gray-300">Salary: {job.salary}</p>
                <button
                  onClick={() => handleDeleteJob(job.id)}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 transition duration-200"
                >
                  Delete Job
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Add New Job</h2>
          <form onSubmit={handleAddJob} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
              />
            </div>
            <div>
              <textarea
                placeholder="Job Description"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Job Location"
                value={jobLocation}
                onChange={(e) => setJobLocation(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Salary"
                value={jobSalary}
                onChange={(e) => setJobSalary(e.target.value)}
                required
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              Add Job
            </button>
          </form>
        </div>
      </div>

      {/* Right side - Recruiter Info */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-200 mb-4">Recruiter Info</h2>
        <p className="text-gray-400 mb-4">Welcome to the Recruiter Dashboard! Here you can manage job listings and add new job positions for your company.</p>
        <p className="text-gray-400">As a recruiter, you'll be able to view applicants, track your postings, and manage open job roles in one central place. Keep your job posts updated regularly to attract the best candidates!</p>
      </div>
    </div>
  );
};

export default RecuratorDashboard;
