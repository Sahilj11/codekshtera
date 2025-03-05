import React, { useState } from "react";
import pdfToText from "react-pdftotext";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    expectedSalary: "",
    location: "",
    skills: [],
    resume: null,
    resumeText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "skills") {
      setFormData((prevData) => ({
        ...prevData,
        skills: value.split(",").map((skill) => skill.trim()),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const extractText = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const text = await pdfToText(file);
        setFormData((prevData) => ({ ...prevData, resume: file, resumeText: text }));
      } catch (error) {
        console.error("Failed to extract text from PDF:", error);
        toast.error("Failed to extract text from the PDF.");
      }
    }
  };

  const fetchCandidates = async () => {
    try {
      const response = await axios.get("http://localhost:8080/candidate");
      console.log("Candidates:", response.data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  const fetchCandidateById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/candidate/${id}`);
      console.log("Candidate Details:", response.data);
    } catch (error) {
      console.error(`Error fetching candidate with ID ${id}:`, error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Form Data:", formData);
    toast.success("Profile Created Successfully");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("education", formData.education);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("expectedSalary", formData.expectedSalary);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("skills", JSON.stringify(formData.skills));
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }
      formDataToSend.append("resumeText", formData.resumeText);

      const response = await axios.post("http://localhost:8080/candidate", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Candidate Created:", response.data);
      fetchCandidates();
    } catch (error) {
      console.error("Error submitting candidate:", error);
      toast.error("Failed to submit candidate.");
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      education: "",
      experience: "",
      expectedSalary: "",
      location: "",
      skills: [],
      resume: null,
      resumeText: "",
    });
  };

  return (
<div class="bg-gradient-to-bl from-black to-gray-900 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
  <div class="w-full max-w-lg p-8 bg-gradient-to-b from-gray-800 to-black text-gray-300 shadow-2xl rounded-xl">
    <h2 class="text-3xl font-extrabold text-white text-center mb-6">Candidate Form</h2>
    
    <form onSubmit={handleSubmit} class="space-y-5 flex flex-col">
      <input 
        type="text" name="name" value={formData.name} onChange={handleChange} 
        placeholder="Full Name" required 
        class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="email" name="email" value={formData.email} onChange={handleChange} 
        placeholder="Email" required 
        class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="tel" name="phone" value={formData.phone} onChange={handleChange} 
        placeholder="Phone Number" required 
        class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="text" name="education" value={formData.education} onChange={handleChange} 
        placeholder="Education" required 
        class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="number" name="experience" value={formData.experience} onChange={handleChange} 
        placeholder="Experience (Years)" required 
        class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} 
        placeholder="Expected Salary" required 
        class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="text" name="location" value={formData.location} onChange={handleChange} 
        placeholder="Location" required 
        class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="text" name="skills" value={formData.skills.join(", ")} onChange={handleChange} 
        placeholder="Skills (comma separated)" required 
        class="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <input 
        type="file" accept="application/pdf" onChange={extractText} required 
        class="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600 cursor-pointer"
      />

      <button 
        type="submit" 
        class="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 rounded-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:from-gray-800 hover:to-gray-700">
        Submit
      </button>
    </form>
  </div>
  <Toaster position="top-center" reverseOrder={false} />
</div>


  );
};

export default CandidateForm;
