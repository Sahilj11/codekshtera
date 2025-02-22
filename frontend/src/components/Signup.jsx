import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    twitterpassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    setFormData({firstname:"",email:"",password:"",lastname:""})
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100 dark:bg-black">
      <div className="max-w-md w-full mx-auto  rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-gradient-to-bl from-black to-gray-900">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to JobSeeker
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Sign up to  explore the job endless possibilities!
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="flex flex-col w-full">
              <label htmlFor="firstname" className="text-sm text-neutral-700 dark:text-neutral-300">
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                placeholder="Tyler"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full p-2 bg-gradient-to-bl from-black to-gray-900 text-black dark:text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastname" className="text-sm text-neutral-700 dark:text-neutral-300">
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                placeholder="Durden"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full p-2 bg-gradient-to-bl from-black to-gray-900 text-black dark:text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-sm text-neutral-700 dark:text-neutral-300">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              placeholder="projectmayhem@fc.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-gradient-to-bl from-black to-gray-900 text-black dark:text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="text-sm text-neutral-700 dark:text-neutral-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 bg-gradient-to-bl from-black to-gray-900 text-black dark:text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
              required
            />
          </div>
          <p className="text-center mb-4 text-neutral-700 dark:text-neutral-300 text-sm">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        

          <button
            type="submit"
            className="bg-gradient-to-r from-gray-900 to-gray-800  cursor-pointer block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-lg "
          >
            Sign up &rarr;
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

       
        </form>
      </div>
    </div>
  );
};

export default Signup;