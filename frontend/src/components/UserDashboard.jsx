import React from 'react';
 import { useSelector } from 'react-redux';

const UserDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8">
  <div className="max-w-5xl mx-auto rounded-lg shadow-lg bg-gray-900 p-6">
    <h1 className="text-4xl font-bold text-indigo-600 mb-4 text-center">User Dashboard</h1>

    <div className="flex justify-between items-center mb-6">
      <div>
        <h2 className="text-2xl font-semibold">Welcome, Dinesh</h2>
        <p className="text-gray-400 text-sm">Last login: 2025-02-08</p>
      </div>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none">
        Edit Profile
      </button>
    </div>

    <h3 className="text-2xl font-semibold text-gray-200 mb-4">Your Job Applications</h3>
    <div className="space-y-4">
      {/* Replace with dynamically loaded job applications */}
      <div className="p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition duration-200 ease-in-out">
        <h4 className="text-xl font-semibold text-indigo-400">Frontend Developer</h4>
        <p className="text-gray-400">Company: ABC Corp.</p>
        <p className="text-gray-300">Status: <span className="text-green-500">Applied</span></p>
        <p className="text-gray-500">Location: New York</p>
        <p className="text-gray-400">Salary: $70,000</p>
      </div>

      <div className="p-4 bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition duration-200 ease-in-out">
        <h4 className="text-xl font-semibold text-indigo-400">Backend Developer</h4>
        <p className="text-gray-400">Company: XYZ Ltd.</p>
        <p className="text-gray-300">Status: <span className="text-green-500">Applied</span></p>
        <p className="text-gray-500">Location: Remote</p>
        <p className="text-gray-400">Salary: $80,000</p>
      </div>
    </div>

    <div className="mt-12 space-y-6">
      <h3 className="text-2xl font-semibold text-gray-200">Account Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold text-indigo-400 mb-2">Email</h4>
          <p className="text-gray-400">dinesh@example.com</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold text-indigo-400 mb-2">Phone</h4>
          <p className="text-gray-400">+1 (123) 456-7890</p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
        <h4 className="text-xl font-semibold text-indigo-400 mb-2">Bio</h4>
        <p className="text-gray-400">
          Full-stack developer with a passion for creating intuitive, responsive web applications. Always looking to improve my
          skills and stay up-to-date with the latest technologies.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default UserDashboard;