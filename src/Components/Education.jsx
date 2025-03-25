import React, { useState } from "react";
import { motion } from "framer-motion";
import { collapser, expander } from "../utils/animation";
import { useAnimation } from "framer-motion";
import StartAndEndForm from "./StartAndEndForm";

const Education = ({ toogleElement, setToggleElement }) => {
  const educationWrapper = useAnimation();

  return (
    <section className="border-b border-gray-200">
      <div className="flex justify-between items-center py-4">
        <p>Education</p>
        <span
          onClick={() => {
            toogleElement.education
              ? collapser(educationWrapper)
              : expander(educationWrapper);
            setToggleElement((prev) => ({
              ...prev,
              education: !prev.education,
            }));
          }}
          className="rounded border border-gray-400"
        >
          {toogleElement.education ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                class="pointer-events-none flex-shrink-0 box-content h-6 w-6 "
              >
                <path
                  fill="currentColor"
                  d="M480-542.463 317.076-379.539q-8.307 8.308-20.884 8.5t-21.268-8.5q-8.693-8.692-8.693-21.076t8.693-21.077l179.769-179.769q5.615-5.615 11.846-7.923T480-611.691t13.461 2.307q6.231 2.308 11.846 7.923l179.769 179.769q8.308 8.308 8.5 20.884t-8.5 21.269T664-370.847t-21.076-8.692z"
                ></path>
              </svg>
            </>
          ) : (
            <>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="pointer-events-none flex-shrink-0 box-content h-6 w-6 text-gray-700"
              >
                <path
                  fill="currentColor"
                  d="M450.001-450.001h-200q-12.75 0-21.375-8.628t-8.625-21.384 8.625-21.371 21.375-8.615h200v-200q0-12.75 8.628-21.375t21.384-8.625 21.371 8.625 8.615 21.375v200h200q12.75 0 21.375 8.628t8.625 21.384-8.625 21.371-21.375 8.615h-200v200q0 12.75-8.628 21.375t-21.384 8.625-21.371-8.625-8.615-21.375z"
                ></path>
              </svg>
            </>
          )}
        </span>
      </div>
      <motion.section
        initial={{ height: 0, visibility: "none" }}
        animate={educationWrapper}
        className="overflow-hidden"
      >
        <StartAndEndForm isDefault={true} />
        {/* Add Education */}
        <div className="flex justify-between gap-2">
          <button
            className="inline-flex border justify-center rounded relative overflow-hidden max-w-full focus-visible:ring-4 ring-brand-200 items-center bg-transparent active:bg-brand-100 can-hover:active:bg-brand-100 text-gray-700 border-gray-400 can-hover:hover:bg-brand-50 can-hover:hover:border-brand-400 font-medium py-1 ps-1 pe-3 text-base"
            type="button"
            style={{ outline: "none" }}
          >
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="pointer-events-none flex-shrink-0 box-content h-6 w-6"
              >
                <path
                  fill="currentColor"
                  d="M450.001-450.001h-200q-12.75 0-21.375-8.628t-8.625-21.384 8.625-21.371 21.375-8.615h200v-200q0-12.75 8.628-21.375t21.384-8.625 21.371 8.625 8.615 21.375v200h200q12.75 0 21.375 8.628t8.625 21.384-8.625 21.371-21.375 8.615h-200v200q0 12.75-8.628 21.375t-21.384 8.625-21.371-8.625-8.615-21.375z"
                />
              </svg>
            </span>
            <div className="truncate h-6 ms-0.5">Add education</div>
          </button>
        </div>
      </motion.section>
    </section>
  );
};

export default Education;
