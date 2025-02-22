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
    <div className="bg-gradient-to-bl from-black to-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-gradient-to-b to-black from-gray-800 text-gray-400 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Candidate Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="input-field" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input-field" required />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input-field" required />
          <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Education" className="input-field" required />
          <input type="number" name="experience" value={formData.experience} onChange={handleChange} placeholder="Experience (Years)" className="input-field" required />
          <input type="text" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} placeholder="Expected Salary" className="input-field" required />
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="input-field" required />
          <input type="text" name="skills" value={formData.skills.join(", ")} onChange={handleChange} placeholder="Skills (comma separated)" className="input-field" required />
          <input type="file" accept="application/pdf" onChange={extractText} className="input-field" required />
          <button type="submit" className="w-full cursor-pointer bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition-all duration-300">
            Submit
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default CandidateForm;
