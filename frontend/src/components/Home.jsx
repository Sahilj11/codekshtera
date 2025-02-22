import React from "react";
import { GlobeDemo } from "../components/GlobeDemo";
import { Link } from "react-router-dom";
import Cardcontainer from "./Cardcontainer";
const Home = () => {
  return (
    <>
    <div className="flex  flex-col md:flex-row items-center justify-between min-h-screen bg-black text-white px-6 md:px-16 lg:px-24 py-10  overflow-x-hidden">
     
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          Find Your Dream Job
        </h1>
        <p className="text-lg text-gray-400">
          Explore job listings, connect with employers, and take the next step
          in your career on our sleek dark-themed platform.{" "}
        </p>
        <div className="flex justify-center md:justify-start space-x-3">
          <Link to="/apply-jobs">
            {" "}
            <button className="bg-white text-black cursor-pointer border-2 border-transparent font-semibold hover:text-white hover:border-white px-6 py-3 rounded-full shadow-lg hover:bg-black transition-all duration-300">
              Apply Jobs
            </button>{" "}
          </Link>
          <Link to="/recurator-dashboard">
            {" "}
            <button className="border-2 font-semibold border-white cursor-pointer transition-all duration-300 text-white px-6 py-3 rounded-full bg-black hover:bg-white shadow-lg hover:text-black">
              Post a Job
            </button>{" "}
          </Link>
        </div>
      </div>
      
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 ">
        <GlobeDemo />
      </div>
    </div>
    <Cardcontainer/>
   </>
  );
};

export default Home;
