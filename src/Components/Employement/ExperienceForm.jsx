import React from "react";

const ExperienceForm = ({
  id,
  experienceData,
  handleExperienceChange,
  removeExperience,
}) => {
  return (
    <div className="border p-4 my-5.5 rounded">
      <label className="block text-sm font-medium">Position</label>
      <input
        type="text"
        value={experienceData.position}
        onChange={(e) => handleExperienceChange(id, "position", e.target.value)}
        className="border p-2 w-full rounded"
      />

      <label className="block text-sm font-medium mt-4">Employer</label>
      <input
        type="text"
        value={experienceData.employer}
        onChange={(e) => handleExperienceChange(id, "employer", e.target.value)}
        className="border p-2 w-full rounded"
      />

      <label className="block text-sm font-medium mt-4">Start Date</label>
      <input
        type="date"
        value={experienceData.startDate}
        onChange={(e) =>
          handleExperienceChange(id, "startDate", e.target.value)
        }
        className="border p-2 w-full rounded"
      />

      <label className="block text-sm font-medium mt-4">End Date</label>
      <input
        type="date"
        value={experienceData.endDate}
        onChange={(e) => handleExperienceChange(id, "endDate", e.target.value)}
        className="border p-2 w-full rounded"
      />

      <button
        onClick={() => removeExperience(id)}
        className="mt-3 border border-red-600 rounded px-3 py-1 bg-red-600 hover:bg-red-500 text-white transition-all duration-500 ease-in-out cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};

export default ExperienceForm;
