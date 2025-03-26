// EducationForm.jsx
import React from "react";

const EducationForm = ({
  id,
  educationData,
  handleEducationChange,
  removeEducation,
}) => {
  return (
    <div className="border p-4 my-2 rounded">
      <label className="block text-sm font-medium">Institution</label>
      <input
        type="text"
        value={educationData.institution}
        onChange={(e) =>
          handleEducationChange(id, "institution", e.target.value)
        }
        className="border p-2 w-full rounded"
      />

      <label className="block text-sm font-medium mt-2">Degree</label>
      <input
        type="text"
        value={educationData.degree}
        onChange={(e) => handleEducationChange(id, "degree", e.target.value)}
        className="border p-2 w-full rounded"
      />

      <label className="block text-sm font-medium mt-2">Start Date</label>
      <input
        type="date"
        value={educationData.startDate}
        onChange={(e) => handleEducationChange(id, "startDate", e.target.value)}
        className="border p-2 w-full rounded"
      />

      <label className="block text-sm font-medium mt-2">End Date</label>
      <input
        type="date"
        value={educationData.endDate}
        onChange={(e) => handleEducationChange(id, "endDate", e.target.value)}
        className="border p-2 w-full rounded"
      />

      <button
        onClick={() => removeEducation(id)}
        className="mt-3 text-red-600 border border-red-600 rounded px-3 py-1 hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
};

export default EducationForm;
