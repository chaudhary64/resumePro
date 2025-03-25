import React, { useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link, useParams } from "react-router";
import { motion, useAnimation } from "framer-motion";
import Education from "./Education";
import { collapser, expander } from "../utils/animation";

const Resume = () => {
  const { id } = useParams();
  const personalInfoController = useAnimation();

  const [toogleElement, setToggleElement] = useState({
    personalInfo: false,
    education: false,
    employment: false,
    skills: false,
    languages: false,
    hobbies: false,
    courses: false,
    internships: false,
    extracurricular: false,
    references: false,
    quality: false,
    certifications: false,
    achievements: false,
    signature: false,
    footer: false,
  });

  return (
    <>
      <nav className="h-[7vh] px-2 flex justify-between items-center text-white text-sm bg-[#1D1D20]">
        <Link
          to="/"
          className="px-2 py-1.5 flex items-center gap-2 rounded border border-[#52525A] hover:bg-[#3F3F45] transition-all"
        >
          <IoMdArrowBack />
          Home
        </Link>
        <span>ResumePro</span>
        <button className="px-2 py-1.5 bg-[#4314B6] flex items-center gap-2 rounded">
          <MdOutlineFileDownload />
          Download
        </button>
      </nav>
      <main className="h-[93vh] flex gap-2">
        {/* Left Part */}
        <section className="h-full w-1/2 border-4 border-red-500 overflow-y-scroll">
          <form action="post" className="w-[80%] mx-auto pt-5 px-5">
            {/* Desired Job Position */}
            <div className="pb-3 border-b border-gray-200">
              <p className="text-sm text-gray-600">Desired job position</p>
              <input
                type="text"
                className="w-full p-1 rounded focus-visible:outline outline-blue-500 bg-gray-100"
              />
            </div>

            {/* Personal Information */}
            <section>
              <div className="flex justify-between items-center border-b border-gray-200 py-4">
                <p>Personal Information</p>
                <span
                  onClick={() => {
                    toogleElement.personalInfo
                      ? collapser(personalInfoController)
                      : expander(personalInfoController);
                    setToggleElement((prev) => ({
                      ...prev,
                      personalInfo: !prev.personalInfo,
                    }));
                  }}
                  className="rounded border border-gray-400"
                >
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
                </span>
              </div>
              <motion.div
                initial={{ height: 0 }}
                animate={personalInfoController}
                className="overflow-clip flex flex-wrap"
              >
                {/* Profile Picture */}
                <div className="sm:flex-shrink-0 pe-4">
                  <div className="flex relative flex-col py-2 h-32 sm:h-full w-24 sm:w-32">
                    <div className="flex items-center mb-1">
                      <label className="flex-grow truncate block font-medium text-gray-600 text-sm">
                        Photo
                      </label>
                    </div>
                    <button
                      type="button"
                      className="border border-transparent bg-gray-100 rounded py-2 px-3 text-base transition-colors duration-150 hover:border-brand-500 hover:bg-brand-50 w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
                      style={{ outline: "none" }}
                    >
                      <div className="sr-only">Update</div>
                      <span className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 -960 960 960"
                          className="w-8 text-gray-400"
                        >
                          <path
                            fill="currentColor"
                            d="M132.31-140Q102-140 81-161t-21-51.31v-455.38Q60-698 81-719t51.31-21h122.15l74-80h223.85v60H354.62l-73.39 80H132.31q-5.39 0-8.85 3.46t-3.46 8.85v455.38q0 5.39 3.46 8.85t8.85 3.46h615.38q5.39 0 8.85-3.46t3.46-8.85v-340h60v340Q820-182 799-161t-51.31 21zM760-680v-80h-80v-60h80v-80h60v80h80v60h-80v80zM440-275.39q68.85 0 116.73-47.88T604.61-440t-47.88-116.73T440-604.61t-116.73 47.88T275.39-440t47.88 116.73T440-275.39m0-59.99q-44.31 0-74.46-30.16-30.16-30.15-30.16-74.46t30.16-74.46q30.15-30.16 74.46-30.16t74.46 30.16q30.16 30.15 30.16 74.46t-30.16 74.46q-30.15 30.16-74.46 30.16"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                {/* Name and Headline */}
                <div className="shrink-0 w-full">
                  <div className="flex gap-3">
                    <div className="w-full sm:w-1/2">
                      <div className="py-2">
                        <label
                          htmlFor="givenName"
                          className="block font-medium text-gray-600 text-sm"
                        >
                          Given name
                        </label>
                        <input
                          id="givenName"
                          type="text"
                          className="w-full p-2 rounded border focus:border-blue-500 bg-gray-100"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <div className="py-2">
                        <label
                          htmlFor="familyName"
                          className="block font-medium text-gray-600 text-sm"
                        >
                          Family name
                        </label>
                        <input
                          id="familyName"
                          type="text"
                          className="w-full p-2 rounded border focus:border-blue-500 bg-gray-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="py-2">
                    <label
                      htmlFor="headline"
                      className="block font-medium text-gray-600 text-sm"
                    >
                      Headline
                    </label>
                    <input
                      id="headline"
                      type="text"
                      className="w-full p-2 rounded border focus:border-blue-500 bg-gray-100"
                    />
                  </div>
                </div>
                {/* Email Id and phone number */}
                <div class="w-full flex gap-3">
                  <div class="w-full sm:w-1/2">
                    <div class="py-2">
                      <label
                        for="Email_address"
                        class="block font-medium text-gray-600 text-sm"
                      >
                        Email address
                      </label>
                      <input
                        id="Email_address"
                        class="w-full p-2 rounded border focus:border-blue-500 bg-gray-100"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="w-full sm:w-1/2">
                    <div class="py-2">
                      <label
                        for="Phone_number"
                        class="block font-medium text-gray-600 text-sm"
                      >
                        Phone number
                      </label>
                      <input
                        id="Phone_number"
                        class="w-full p-2 rounded border focus:border-blue-500 bg-gray-100"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                {/* Adress */}
                <div class="w-full">
                  <div class="w-full sm:flex-equal-width">
                    <div class="py-2 ">
                      <div class="">
                        <div class="flex items-center mb-1">
                          <label
                            for="focus-id-address-address"
                            class="flex-grow truncate block font-medium text-gray-600 text-sm"
                          >
                            Address
                          </label>
                        </div>
                      </div>
                      <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                        <input
                          id="focus-id-address-address"
                          data-s="Address"
                          type="text"
                          size="1"
                          autoComplete="street-address"
                          maxLength="1000"
                          class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Post code and city */}
                <div class="w-full flex gap-3">
                  <div class="w-full sm:flex-equal-width">
                    <div class="py-2 ">
                      <div class="">
                        <div class="flex items-center mb-1">
                          <label
                            for="focus-id-address-zipcode"
                            class="flex-grow truncate block font-medium text-gray-600 text-sm"
                          >
                            Post code
                          </label>
                        </div>
                      </div>
                      <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                        <input
                          id="focus-id-address-zipcode"
                          data-s="Post code"
                          type="text"
                          size="1"
                          autoComplete="postal-code"
                          maxLength="1000"
                          class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="w-full sm:flex-equal-width">
                    <div class="py-2 ">
                      <div class="">
                        <div class="flex items-center mb-1">
                          <label
                            for="focus-id-address-city"
                            class="flex-grow truncate block font-medium text-gray-600 text-sm"
                          >
                            City
                          </label>
                        </div>
                      </div>
                      <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                        <input
                          id="focus-id-address-city"
                          data-s="City"
                          type="text"
                          size="1"
                          autoComplete="address-level2"
                          maxLength="1000"
                          class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Date of birth */}
                <div class="w-full py-2">
                  <div class="">
                    <div class="flex items-center mb-1">
                      <label
                        for=":r38:"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        Date of birth
                      </label>
                    </div>
                  </div>
                  <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100 cursor-text ">
                    <input
                      id=":r38:"
                      data-s="Date of birth"
                      type="date"
                      size="1"
                      autoComplete="off"
                      maxLength="1000"
                      class="flex-1 appearance-none outline-none rounded   py-2 ps-3 text-base pe-3 h-[42px] bg-transparent"
                    />
                  </div>
                </div>
                {/* Place of birth */}
                <div class="w-full py-2">
                  <div class="">
                    <div class="flex items-center mb-1">
                      <label
                        for=":r36:"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        Place of birth
                      </label>
                    </div>
                  </div>
                  <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                    <input
                      id=":r36:"
                      data-s="Place of birth"
                      type="text"
                      size="1"
                      autoComplete="off"
                      maxLength="1000"
                      class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
                    />
                  </div>
                </div>
                {/* Driver Licence */}
                <div class="w-full py-2">
                  <div class="">
                    <div class="flex items-center mb-1">
                      <label
                        for=":r34:"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        Driver's license
                      </label>
                    </div>
                  </div>
                  <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                    <input
                      id=":r34:"
                      data-s="Driver's license"
                      type="text"
                      size="1"
                      autoComplete="off"
                      maxLength="1000"
                      class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
                    />
                  </div>
                </div>
                {/* Gender */}
                <div class="w-full py-2">
                  <div class="">
                    <div class="flex items-center mb-1">
                      <label
                        for=":r3c:"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        Gender
                      </label>
                    </div>
                  </div>
                  <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                    <datalist id=":r3d:">
                      <option>Male</option>
                      <option>Female</option>
                    </datalist>
                    <input
                      id=":r3c:"
                      data-s="Gender"
                      type="text"
                      size="1"
                      autoComplete="off"
                      maxLength="1000"
                      class="flex-1 appearance-none outline-none rounded hide-calendar ltr py-2 ps-3 text-base pe-3  bg-transparent"
                      list=":r3d:"
                    />
                  </div>
                </div>
                {/* Nationality */}
                <div class="w-full py-2">
                  <div class="">
                    <div class="flex items-center mb-1">
                      <label
                        for=":r3a:"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        Nationality
                      </label>
                    </div>
                  </div>
                  <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                    <input
                      id=":r3a:"
                      data-s="Nationality"
                      type="text"
                      size="1"
                      autoComplete="off"
                      maxLength="1000"
                      class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
                    />
                  </div>
                </div>
                {/* Civil Status */}
                <div class="w-full py-2">
                  <div class="">
                    <div class="flex items-center mb-1">
                      <label
                        for=":r3e:"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        Civil status
                      </label>
                    </div>
                  </div>
                  <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                    <datalist id=":r3f:">
                      <option>Unmarried</option>
                      <option>Living together</option>
                      <option>Registered partnership</option>
                      <option>Married</option>
                      <option>Divorced</option>
                      <option>Widowed</option>
                    </datalist>
                    <input
                      id=":r3e:"
                      data-s="Civil status"
                      type="text"
                      size="1"
                      autoComplete="off"
                      maxLength="1000"
                      class="flex-1 appearance-none outline-none rounded hide-calendar ltr py-2 ps-3 text-base pe-3  bg-transparent"
                      list=":r3f:"
                    />
                  </div>
                </div>
                {/* Webiste */}
                <div class="w-full py-2">
                  <div class="">
                    <div class="flex items-center mb-1">
                      <label
                        for=":r3g:"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        Website
                      </label>
                    </div>
                  </div>
                  <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                    <input
                      id=":r3g:"
                      data-s="Website"
                      type="text"
                      size="1"
                      autoComplete="off"
                      maxLength="1000"
                      class="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
                    />
                  </div>
                </div>
                {/* Linekdin */}
                <div class="w-full py-2">
                  <div class="">
                    <div class="flex items-center mb-1">
                      <label
                        for=":r3i:"
                        class="flex-grow truncate block font-medium text-gray-600 text-sm"
                      >
                        LinkedIn
                      </label>
                    </div>
                  </div>
                  <div class="relative flex flex-row border focus-within:border-brand-400 focus-within:bg-brand-50 rounded text-gray-800 border-transparent bg-gray-100  ">
                    <input
                      id=":r3i:"
                      data-s="LinkedIn"
                      type="text"
                      size="1"
                      autoComplete="off"
                      maxLength="1000"
                      className="flex-1 appearance-none outline-none rounded  ltr py-2 ps-3 text-base pe-3  bg-transparent"
                    />
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Education */}
            <Education
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />
          </form>
        </section>
        {/* Right Part */}
        <section className="w-1/2 border-4 border-red-500"></section>
      </main>
    </>
  );
};

export default Resume;
