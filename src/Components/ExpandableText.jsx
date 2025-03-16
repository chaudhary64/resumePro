import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { GoPlus } from "react-icons/go";

function ExpandableText({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandableTextController = useAnimation();

  const expander = (controller) => {
    controller.start({
      height: "auto",
    });
  };

  const collapser = (controller) => {
    controller.start({
      height: 0,
    });
  };

  return (
    <div className="w-[80%] mx-auto border-b">
      <button
        onClick={() => {
          isExpanded
            ? collapser(expandableTextController)
            : expander(expandableTextController);
          setIsExpanded((prev) => !prev);
        }}
        className="w-full flex items-center justify-between py-5 cursor-pointer"
      >
        <span className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
          {question}
        </span>
        <GoPlus
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ease-in-out ${
            isExpanded ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 0 }}
        className="-mt-2 overflow-hidden"
      >
        <p className="pb-4 text-gray-700 text-sm md:text-base lg:text-lg">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export default ExpandableText;
