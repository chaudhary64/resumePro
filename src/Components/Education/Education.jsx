// Education.jsx
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { collapser, expander } from "../../utils/animation";
import { useAnimation } from "framer-motion";
import StartAndEndForm from "./EducationForm";
import { Info } from "../../Context/Context";

const Education = ({ toogleElement, setToggleElement }) => {
  const employerWrapper = useAnimation();
  const { formData, setFormData } = useContext(Info);

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      employerCounter: prev.employerCounter + 1,
      education: [
        ...prev.education,
        {
          id: Date.now(),
          institution: "",
          degree: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const removeEducation = (id) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
      employerCounter: prev.employerCounter - 1,
    }));
  };

  const handleEducationChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  return (
    <section className="pb-5.5 border-b border-gray-200">
      <div className="pt-5.5 flex justify-between items-center">
        <p className="text-xl truncate text-gray-500 font-bold select-none">
          Education
        </p>
        <span
          onClick={() => {
            console.log("Saving Data:", formData.education);
            toogleElement.education
              ? collapser(employerWrapper)
              : expander(employerWrapper);
            setToggleElement((prev) => ({
              ...prev,
              education: !prev.education,
            }));
          }}
          className="rounded border border-gray-400 p-0.25"
        >
          {toogleElement.education ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="pointer-events-none flex-shrink-0 box-content h-6 w-6"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M480-542.463 317.076-379.539q-8.307 8.308-20.884 8.5t-21.268-8.5q-8.693-8.692-8.693-21.076t8.693-21.077l179.769-179.769q5.615-5.615 11.846-7.923T480-611.691t13.461 2.307q6.231 2.308 11.846 7.923l179.769 179.769q8.308 8.308 8.5 20.884t-8.5 21.269T664-370.847t-21.076-8.692z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              className="pointer-events-none flex-shrink-0 box-content h-6 w-6 text-gray-700"
            >
              <path
                fill="currentColor"
                d="M480-373.539q-7.231 0-13.461-2.308t-11.846-7.923L274.924-563.539q-8.308-8.307-8.5-20.884t8.5-21.269T296-614.384t21.076 8.692L480-442.768l162.924-162.924q8.307-8.307 20.884-8.5t21.268 8.5q8.693 8.692 8.693 21.077 0 12.384-8.693 21.076L505.307-383.77q-5.615 5.615-11.846 7.923T480-373.539"
              ></path>
            </svg>
          )}
        </span>
      </div>

      <motion.section
        initial={{ height: 0, visibility: "none" }}
        animate={employerWrapper}
        className="overflow-hidden"
      >
        {/* Render Education Forms */}
        {(formData.education || []).map((edu) => (
          <StartAndEndForm
            key={edu.id}
            id={edu.id}
            educationData={edu}
            handleEducationChange={handleEducationChange}
            removeEducation={removeEducation}
          />
        ))}

        {/* Add Education Button */}
        <div className="flex justify-between gap-2">
          <div
            onClick={addEducation}
            className="border border-gray-400 px-3 py-1 rounded"
          >
            + Add Education
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Education;
