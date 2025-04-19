import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Slides = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full bg-amber-500 border border-gray-400 relative"
    >
      <img src={item.src} alt={item.src} />
      <motion.span
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
        <Link to={`/${item.id}`}> use template</Link>
      </motion.span>
    </div>
  );
};

export default Slides;
