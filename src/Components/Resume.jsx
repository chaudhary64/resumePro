import React, { useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link, useParams } from "react-router";
import { motion, useAnimation } from "framer-motion";
import Education from "./Education/Education";
import { collapser, expander } from "../utils/animation";
import WorkExperience from "./Employement/WorkExperience";
import Skill from "./Skills/Skill";
import Languages from "./Languages/Languages";
import Hobbies from "./Hobbies/Hobbies";
import Courses from "./Courses/Courses";
import Achievements from "./Achievements/Achievements";
import Footer from "./Footer/Footer";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Resume = () => {
  const { id } = useParams();

  const [toogleElement, setToggleElement] = useState({
    personalInfo: false,
    education: false,
    employment: false,
    skills: false,
    languages: false,
    hobbies: false,
    courses: false,
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
        <section className="h-full w-1/2 border-4 border-red-500 overflow-y-scroll no-scrollbar">
          <form action="post" className="w-[80%] mx-auto pt-5 px-5">
            {/* Desired Job Position */}
            {/* <div className="pb-3 border-b border-gray-200">
              <p className="text-sm text-gray-600">Desired job position</p>
              <input
                type="text"
                className="w-full p-1 rounded focus-visible:outline outline-blue-500 bg-gray-100"
              />
            </div> */}

            {/* Personal Information */}
            <PersonalInfo
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />

            {/* Education */}
            <Education
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />

            {/* Employment */}
            <WorkExperience
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />

            {/* Skills */}
            <Skill
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />

            {/* Languages */}
            <Languages
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />

            {/* Hobbies */}
            <Hobbies
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />

            {/* Courses */}
            <Courses
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />

            {/* Achievements */}
            <Achievements
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />

            <Footer
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
