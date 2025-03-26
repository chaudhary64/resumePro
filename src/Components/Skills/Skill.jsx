// Skills.jsx
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { collapser, expander } from "../../utils/animation";
import { useAnimation } from "framer-motion";
import { Info } from "../../Context/Context";

const Skill = ({ toogleElement, setToggleElement }) => {
  const skillsWrapper = useAnimation();
  const { formData, setFormData } = useContext(Info);

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skillsCounter: (prev.skillsCounter || 0) + 1,
      skills: [
        ...(Array.isArray(prev.skills) ? prev.skills : []),
        {
          id: Date.now(),
          skill: "",
        },
      ],
    }));
  };

  const removeSkill = (id) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
      skillsCounter: prev.skillsCounter - 1,
    }));
  };

  const handleSkillChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    }));
  };

  return (
    <section className="pb-4 border-b border-gray-200">
      <div className="pt-4 flex justify-between items-center">
        <p>Skills</p>
        <span
          onClick={() => {
            console.log("Saving Data:", formData.skills);
            toogleElement.skills
              ? collapser(skillsWrapper)
              : expander(skillsWrapper);
            setToggleElement((prev) => ({
              ...prev,
              skills: !prev.skills,
            }));
          }}
          className="rounded border border-gray-400"
        >
          {toogleElement.skills ? (
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
        animate={skillsWrapper}
        className="overflow-hidden"
      >
        {/* Render Skills directly */}
        {(formData.skills || []).map((skill) => (
          <div key={skill.id} className="border p-4 my-2 rounded">
            <label className="block text-sm font-medium">Skill</label>
            <input
              type="text"
              value={skill.skill}
              onChange={(e) =>
                handleSkillChange(skill.id, "skill", e.target.value)
              }
              className="border p-2 w-full rounded"
              placeholder="Enter a skill (e.g., JavaScript, Project Management, Photoshop)"
            />

            <button
              onClick={() => removeSkill(skill.id)}
              className="mt-3 text-red-600 border border-red-600 rounded px-3 py-1 hover:bg-red-50"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Add Skill Button */}
        <div className="flex justify-between gap-2 mt-4">
          <div
            onClick={addSkill}
            className="border border-gray-400 px-3 py-1 rounded"
          >
            + Add Skill
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Skill;
