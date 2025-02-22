import React from "react";

const CandidateRanking = ({ candidate }) => {
  // Extract and parse skills from JSON string
  const skills = JSON.parse(candidate.skills).skills;

  // Extract and parse resume details
  const resumeData = JSON.parse(candidate.resume);
  const projects = resumeData.Projects || [];
  const experienceDetails = resumeData.Experience || [];

  return (
    <div className="max-w-lg mx-auto p-6 bg-gradient-to-b from-gray-800 to-black text-gray-300 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-4">{candidate.name}</h2>
      <p className="text-gray-400 text-center">{candidate.email}</p>
      <p className="text-gray-400 text-center mb-4">{candidate.phone} | {candidate.location}</p>

      <div className="mb-4">
        <p><span className="font-semibold text-white">Expected Salary:</span> ₹{candidate.expectedSalary.toLocaleString()}</p>
        <p><span className="font-semibold text-white">Education:</span> {candidate.education}</p>
        <p><span className="font-semibold text-white">Experience:</span> {candidate.experience} years</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <span key={index} className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">{skill}</span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white">Projects</h3>
        <ul className="list-disc ml-5 mt-2">
          {projects.map((project, index) => (
            <li key={index} className="text-gray-400">
              <span className="font-semibold text-white">{project["Project Title"]}:</span> {project.Description}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white">Experience</h3>
        <ul className="list-disc ml-5 mt-2">
          {experienceDetails.map((exp, index) => (
            <li key={index} className="text-gray-400">
              <span className="font-semibold text-white">{exp["Job Title"]}:</span> {exp.Description || "No description provided"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CandidateRanking;
