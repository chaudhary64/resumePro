import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";
import { getDynamicSVGComponent } from "../utils/getDynamicSVGComponent";
import { useContext } from "react";
import { Info } from "../Context/Context";

const Templates = ({ resume }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { formData, setFormData } = useContext(Info);
  const mouseClickHandler = () => {
    setFormData(resume.object);
  };

  return (
    <div
      key={resume.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center"
    >
      <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 relative">
        {/* <DynamicSVG_03 data={resume.object} /> */}
        {getDynamicSVGComponent(resume.templateNumber, {
          data: resume.object,
        })}
        <motion.span
          onClick={mouseClickHandler}
          initial={{
            display: "none",
            opacity: 0,
            transform: "translate(-50%,20px)",
          }}
          animate={{
            display: isHovered ? "block" : "none",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translate(-50%,0)" : "translate(-50%,20px)",
          }}
          className="px-4 py-1 rounded text-xs sm:text-sm text-white absolute bottom-[5%] left-1/2 bg-[#4314B6]"
        >
          <Link to={`/${resume.templateNumber}`}>Edit</Link>
        </motion.span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-gray-800">
        {resume.title}
      </h3>
      <p className="text-sm text-gray-500">Last Edited: {resume.date}</p>
    </div>
  );
};

export default Templates;
