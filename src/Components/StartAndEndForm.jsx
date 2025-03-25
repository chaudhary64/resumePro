import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ToggleSwitch from "./ToggleSwitch";

const StartAndEndForm = ({ isDefault = false }) => {
  const [isPresentJob, setIsPresentJob] = useState(false);
  const expanderController = useAnimation();

  // This will disable the end date inputs when "Present" is selected
  const handlePresentToggle = (value) => {
    setIsPresentJob(value);
  };

  return (
    <motion.div
      {...(isDefault
        ? { initial: { height: "auto", visibility: "visible" } }
        : { initial: { height: 0, visibility: "hidden" } })}
      animate={expanderController}
      className="w-full my-3 px-5 overflow-clip flex flex-col border-2 border-gray-200 rounded-lg"
    >
      {/* Education */}
      <div class="py-2 ">
        <div class="">
          <div class="flex items-center mb-1">
            <label
              for=":r5c:"
              class="flex-grow truncate block font-medium text-gray-600 text-sm"
            >
              Education
            </label>
          </div>
        </div>
        <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100">
          <input
            id=":r5c:"
            data-s="Education"
            type="text"
            size="1"
            autocomplete="off"
            maxlength="1000"
            class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
          />
        </div>
      </div>
      {/* School and City */}
      <div class="flex flex-wrap -mx-2">
        <div class="w-full sm:flex-equal-width px-2">
          <div class="py-2 ">
            <div class="">
              <div class="flex items-center mb-1">
                <label
                  for="focus-id-school-school"
                  class="flex-grow truncate block font-medium text-gray-600 text-sm"
                >
                  School
                </label>
              </div>
            </div>
            <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
              <input
                id="focus-id-school-school"
                data-s="School"
                type="text"
                size="1"
                autocomplete="off"
                maxlength="1000"
                class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
              />
            </div>
          </div>
        </div>
        <div class="w-full sm:flex-equal-width px-2">
          <div class="py-2 ">
            <div class="">
              <div class="flex items-center mb-1">
                <label
                  for="focus-id-school-city"
                  class="flex-grow truncate block font-medium text-gray-600 text-sm"
                >
                  City
                </label>
              </div>
            </div>
            <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
              <input
                id="focus-id-school-city"
                data-s="City"
                type="text"
                size="1"
                autocomplete="off"
                maxlength="1000"
                class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Start Date and End Date */}
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:flex-equal-width px-2">
          <div className="py-2">
            <div className="flex items-center mb-1">
              <label className="flex-grow truncate block font-medium text-gray-600 text-sm">
                Start date
              </label>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 pe-2 -my-2">
                <div className="py-2">
                  <div className="relative">
                    <select
                      data-value=""
                      id="focus-id-period-enddate"
                      className="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base text-gray-400 border-transparent bg-gray-100"
                      style={{ outline: "none" }}
                    >
                      <option value="" className="bg-white text-gray-400">
                        Month
                      </option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                    <div className="absolute flex top-0 end-0 bottom-0 px-2 pointer-events-none transform rotate-180">
                      <span className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          className="w-5 ms-auto text-gray-500 h-full"
                        >
                          <path
                            fill="currentColor"
                            d="M480-542.463 317.076-379.539q-8.307 8.308-20.884 8.5t-21.268-8.5q-8.693-8.692-8.693-21.076t8.693-21.077l179.769-179.769q5.615-5.615 11.846-7.923T480-611.691t13.461 2.307q6.231 2.308 11.846 7.923l179.769 179.769q8.308 8.308 8.5 20.884t-8.5 21.269T664-370.847t-21.076-8.692z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 -my-2">
                <div className="py-2">
                  <div className="relative">
                    <select
                      data-value=""
                      id="focus-id-period-startdate"
                      className="w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base text-gray-400 border-transparent bg-gray-100"
                      style={{ outline: "none" }}
                    >
                      <option value="" className="bg-white text-gray-400">
                        Year
                      </option>
                      {/* Options For years */}
                      {[...Array(100)].map((_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                          <option
                            key={year}
                            value={year}
                            className="bg-white text-gray-800"
                          >
                            {year}
                          </option>
                        );
                      })}

                      {/* Options for years */}
                    </select>
                    <div className="absolute flex top-0 end-0 bottom-0 px-2 pointer-events-none transform rotate-180">
                      <span className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          className="w-5 ms-auto text-gray-500 h-full"
                        >
                          <path
                            fill="currentColor"
                            d="M480-542.463 317.076-379.539q-8.307 8.308-20.884 8.5t-21.268-8.5q-8.693-8.692-8.693-21.076t8.693-21.077l179.769-179.769q5.615-5.615 11.846-7.923T480-611.691t13.461 2.307q6.231 2.308 11.846 7.923l179.769 179.769q8.308 8.308 8.5 20.884t-8.5 21.269T664-370.847t-21.076-8.692z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex-equal-width px-2">
          <div className="py-2">
            <div className="flex items-center mb-1">
              <label className="flex-grow truncate block font-medium text-gray-600 text-sm">
                End date
              </label>
              <ToggleSwitch label="Present" onChange={handlePresentToggle} />
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 pe-2 -my-2">
                <div className="py-2">
                  <div className="relative">
                    <select
                      data-value=""
                      id="focus-id-period-enddate"
                      disabled={isPresentJob}
                      className={`w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base ${
                        isPresentJob
                          ? "opacity-50 cursor-not-allowed"
                          : "text-gray-400"
                      } border-transparent bg-gray-100`}
                      style={{ outline: "none" }}
                    >
                      <option value="" className="bg-white text-gray-400">
                        Month
                      </option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                      {/* Options for months */}
                    </select>
                    <div className="absolute flex top-0 end-0 bottom-0 px-2 pointer-events-none transform rotate-180">
                      <span className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          className="w-5 ms-auto text-gray-500 h-full"
                        >
                          <path
                            fill="currentColor"
                            d="M480-542.463 317.076-379.539q-8.307 8.308-20.884 8.5t-21.268-8.5q-8.693-8.692-8.693-21.076t8.693-21.077l179.769-179.769q5.615-5.615 11.846-7.923T480-611.691t13.461 2.307q6.231 2.308 11.846 7.923l179.769 179.769q8.308 8.308 8.5 20.884t-8.5 21.269T664-370.847t-21.076-8.692z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 -my-2">
                <div className="py-2">
                  <div className="relative">
                    <select
                      data-value=""
                      id="focus-id-period-enddate"
                      disabled={isPresentJob}
                      className={`w-full appearance-none border focus:border-brand-400 focus:bg-brand-50 rounded py-2 px-3 text-base ${
                        isPresentJob
                          ? "opacity-50 cursor-not-allowed"
                          : "text-gray-400"
                      } border-transparent bg-gray-100`}
                      style={{ outline: "none" }}
                    >
                      <option value="" className="bg-white text-gray-400">
                        Year
                      </option>
                      {/* Options for years */}
                      {[...Array(100)].map((_, i) => {
                        const year = new Date().getFullYear() - i;
                        return (
                          <option
                            key={year}
                            value={year}
                            className="bg-white text-gray-800"
                          >
                            {year}
                          </option>
                        );
                      })}
                    </select>
                    <div className="absolute flex top-0 end-0 bottom-0 px-2 pointer-events-none transform rotate-180">
                      <span className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          className="w-5 ms-auto text-gray-500 h-full"
                        >
                          <path
                            fill="currentColor"
                            d="M480-542.463 317.076-379.539q-8.307 8.308-20.884 8.5t-21.268-8.5q-8.693-8.692-8.693-21.076t8.693-21.077l179.769-179.769q5.615-5.615 11.846-7.923T480-611.691t13.461 2.307q6.231 2.308 11.846 7.923l179.769 179.769q8.308 8.308 8.5 20.884t-8.5 21.269T664-370.847t-21.076-8.692z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add and Delete button */}
      <div className="pt-1.5 pb-5 whitespace-nowrap flex justify-end items-center">
        {/* Delete Button */}
        <button
          className="inline-flex border justify-center rounded-brand relative overflow-hidden max-w-full focus-visible:ring-4 ring-brand-200 items-center bg-transparent active:bg-brand-100 can-hover:active:bg-brand-100 text-gray-700 border-gray-400 can-hover:hover:bg-brand-50 can-hover:hover:border-brand-400 font-medium py-1 ps-1 pe-1 text-base rounded"
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
                d="M292.309-140.001q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115V-720h-10q-12.769 0-21.384-8.615t-8.616-21.384 8.616-21.384q8.615-8.616 21.384-8.616H360q0-14.692 10.346-25.038t25.038-10.346h169.232q14.692 0 25.038 10.346T600-779.999h149.999q12.769 0 21.384 8.616t8.616 21.384-8.616 21.384Q762.768-720 749.999-720h-10v507.691q0 29.923-21.193 51.115-21.192 21.193-51.115 21.193zM680-720H280v507.691q0 5.385 3.462 8.847t8.847 3.462h375.382q5.385 0 8.847-3.462t3.462-8.847zM376.155-280h59.999v-360h-59.999zm147.691 0h59.999v-360h-59.999zM280-720v520z"
              ></path>
            </svg>
          </span>
          <span className="sr-only">Delete</span>
        </button>

        {/* Done Button */}
        <div className="ms-2">
          <button
            className="inline-flex border justify-center rounded-brand relative overflow-hidden max-w-full focus-visible:ring-4 ring-brand-200 items-center bg-brand-500 active:bg-brand-300 can-hover:active:bg-brand-300 text-white border-transparent can-hover:hover:bg-brand-400 font-medium py-1 ps-1 pe-3 text-base bg-purple-700 rounded"
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
                  d="m382-339.384 345.539-345.538q8.923-8.923 21.192-9.116t21.576 9.116q9.308 9.307 9.308 21.384t-9.308 21.384l-363 362.999Q396.461-268.309 382-268.309t-25.307-10.846l-167-166.999q-8.923-8.923-8.808-21.192t9.423-21.576 21.384-9.308 21.384 9.308z"
                ></path>
              </svg>
            </span>
            <div className="truncate h-6 ms-0.5">Done</div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default StartAndEndForm;
