"use client"
import { useState } from 'react';
import jobsData from './job.json';

const SteamJob = () => {
  const [jobs, setJobs] = useState(jobsData.jobs);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (jobId) => {
    const job = jobs.find((j) => j.id === jobId);
    setFavorites((prevFavorites) => [...prevFavorites, job]);
  };

  const applyNow = (applyLink) => {
    window.open(applyLink, '_blank');
  };

  const filterJobsByOpportunityType = (opportunityType) => {
    const filteredJobs = jobsData.jobs.filter((job) => job.opportunityType === opportunityType);
    setJobs(filteredJobs);
  };

  const resetFilter = () => {
    setJobs(jobsData.jobs);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-6">STEM Job Opportunities</h1>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mr-2"
          onClick={() => filterJobsByOpportunityType('Full-time')}
        >
          Full-time
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mr-2"
          onClick={() => filterJobsByOpportunityType('Scholarship')}
        >
          Scholarship
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mr-2"
          onClick={() => filterJobsByOpportunityType('Internship')}
        >
          Internship
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 mr-2"
          onClick={() => filterJobsByOpportunityType('Research')}
        >
          Research
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          onClick={resetFilter}
        >
          Reset
        </button>
      </div>
      <div className="mt-8">
        {jobs.map((job) => (
          <div key={job.id} className="border border-gray-200 rounded p-4 mb-4 flex items-start">
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{job.company}</h2>
              <p className="text-gray-600">{job.location}</p>
              <p className="mt-2 mb-4">{job.opportunityType}</p>
            </div>
            <div className="flex flex-col items-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2"
                onClick={() => addToFavorites(job.id)}
              >
                Add to Favorites
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => applyNow(job.applyLink)}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SteamJob;
