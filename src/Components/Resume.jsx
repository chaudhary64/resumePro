import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link, useParams } from "react-router";
import Education from "./Education/Education";
import WorkExperience from "./Employement/WorkExperience";
import Skill from "./Skills/Skill";
import Languages from "./Languages/Languages";
import Hobbies from "./Hobbies/Hobbies";
import Courses from "./Courses/Courses";
import Achievements from "./Achievements/Achievements";
import Footer from "./Footer/Footer";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

// Import all templates statically
import DynamicSVG_01 from "./ResumeTemplates/DynamicSVG_01";
import DynamicSVG_02 from "./ResumeTemplates/DynamicSVG_02";
import DynamicSVG_03 from "./ResumeTemplates/DynamicSVG_03";
import DynamicSVG_04 from "./ResumeTemplates/DynamicSVG_04";
import DynamicSVG_05 from "./ResumeTemplates/DynamicSVG_05";
import DynamicSVG_06 from "./ResumeTemplates/DynamicSVG_06";
import DynamicSVG_07 from "./ResumeTemplates/DynamicSVG_07";
import DynamicSVG_08 from "./ResumeTemplates/DynamicSVG_08";
import DynamicSVG_09 from "./ResumeTemplates/DynamicSVG_09";

import jsPDF from "jspdf";

const Resume = () => {
  let { id } = useParams();
  id = id.toString().padStart(2, "0"); // Ensure id is a string with at least 2 digits

  const handleDownload = async (id) => {
    const svgElement = document.getElementById(id);
    const scale = 6; // high-quality scaling

    // Clone SVG to avoid modifying the original
    const clonedSvg = svgElement.cloneNode(true);

    // Get width/height from attributes or viewBox
    let width = parseFloat(clonedSvg.getAttribute("width"));
    let height = parseFloat(clonedSvg.getAttribute("height"));
    const viewBox = clonedSvg.getAttribute("viewBox");

    if (!width || !height) {
      if (viewBox) {
        const vb = viewBox.split(" ").map(Number);
        width = vb[2];
        height = vb[3];
      } else {
        console.error("SVG must have width/height or viewBox.");
        return;
      }
    }

    // Set scaled width/height
    clonedSvg.setAttribute("width", width * scale);
    clonedSvg.setAttribute("height", height * scale);

    // Serialize to blob and URL
    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      // Draw on canvas
      const canvas = document.createElement("canvas");
      canvas.width = width * scale;
      canvas.height = height * scale;

      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Revoke URL after drawing
      URL.revokeObjectURL(url);

      // Store image data in variable
      const imgData = canvas.toDataURL("image/png");

      // ✅ You now have the image stored
      const storedImage = imgData; // Use this as needed elsewhere

      // Create PDF using jsPDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(storedImage, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("high-quality-svg.pdf");
    };

    img.src = url;
  };

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

  // Map template IDs to components
  const templateMap = {
    "01": DynamicSVG_01,
    "02": DynamicSVG_02,
    "03": DynamicSVG_03,
    "04": DynamicSVG_04,
    "05": DynamicSVG_05,
    "06": DynamicSVG_06,
    "07": DynamicSVG_07,
    "08": DynamicSVG_08,
    "09": DynamicSVG_09,
  };

  const SelectedTemplate =
    templateMap[id] || (() => <div>Template not found</div>);

  return (
    <>
      <nav className="h-[7vh] px-2 flex justify-between items-center text-white text-[15px] bg-[#1D1D20]">
        <Link
          to="/"
          className="px-2 py-1.5 flex items-center gap-2 rounded border border-[#52525A] hover:bg-[#3F3F45] transition-all"
        >
          <IoMdArrowBack />
          Home
        </Link>
        <span>ResumePro</span>
        <button
          onClick={() => handleDownload(id)}
          className="px-2 py-1.5 bg-[#4314B6] flex items-center gap-2 rounded"
        >
          <MdOutlineFileDownload />
          Download
        </button>
      </nav>
      <main className="h-[93vh] flex gap-2">
        {/* Left Part */}
        <section className="h-full w-1/2 overflow-y-scroll ">
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
        <section className="h-full w-1/2 overflow-y-scroll ">
          <SelectedTemplate />
        </section>
      </main>
    </>
  );
};

export default Resume;
