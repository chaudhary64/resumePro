// Hobbies.jsx
import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { collapser, expander } from "../../utils/animation";
import { useAnimation } from "framer-motion";
import { Info } from "../../Context/Context";

const Hobbies = ({ toogleElement, setToggleElement }) => {
  const hobbiesWrapper = useAnimation();
  const { formData, setFormData } = useContext(Info);

  useEffect(() => {
    console.log("Updated formData:", formData);
  }, [formData]);

  const addHobby = () => {
    setFormData((prev) => ({
      ...prev,
      hobbiesCounter: (prev.hobbiesCounter || 0) + 1,
      hobbies: [
        ...(Array.isArray(prev.hobbies) ? prev.hobbies : []),
        {
          id: Date.now(),
          hobby: "",
        },
      ],
    }));
  };

  const removeHobby = (id) => {
    setFormData((prev) => ({
      ...prev,
      hobbies: prev.hobbies.filter((hobby) => hobby.id !== id),
      hobbiesCounter: prev.hobbiesCounter - 1,
    }));
  };

  const handleHobbyChange = (id, field, value) => {
    setFormData((prev) => ({
      ...prev,
      hobbies: prev.hobbies.map((hobby) =>
        hobby.id === id ? { ...hobby, [field]: value } : hobby
      ),
    }));
  };

  return (
    <section className="pb-5.5 border-b border-gray-200">
      <div className="pt-5.5 flex justify-between items-center">
        <p className="text-xl truncate text-gray-500 font-bold select-none">Hobbies</p>
        <span
          onClick={() => {
            console.log("Saving Data:", formData.hobbies);
            toogleElement.hobbies
              ? collapser(hobbiesWrapper)
              : expander(hobbiesWrapper);
            setToggleElement((prev) => ({
              ...prev,
              hobbies: !prev.hobbies,
            }));
          }}
          className="rounded border border-gray-400 p-0.25"
        >
          {toogleElement.hobbies ? (
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
        animate={hobbiesWrapper}
        className="overflow-hidden"
      >
        {/* Render Hobbies directly */}
        {(formData.hobbies || []).map((hobby) => (
          <div key={hobby.id} className="border p-4 my-5.5 rounded">
            <label className="block text-sm font-medium">Hobby</label>
            <input
              type="text"
              value={hobby.hobby}
              onChange={(e) =>
                handleHobbyChange(hobby.id, "hobby", e.target.value)
              }
              className="border p-2 w-full rounded"
              placeholder="Enter a hobby (e.g., Reading, Photography, Hiking)"
            />

            <button
              onClick={() => removeHobby(hobby.id)}
              className="mt-4 text-red-600 border border-red-600 rounded px-3 py-1 hover:bg-red-50"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Add Hobby Button */}
        <div className="flex justify-between gap-2 mt-4">
          <div
            onClick={addHobby}
            className="border border-gray-400 px-3 py-1 rounded"
          >
            + Add Hobby
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Hobbies;