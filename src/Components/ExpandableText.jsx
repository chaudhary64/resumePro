import React, { useState } from "react";
import { GoPlus } from "react-icons/go";

function ExpandableText({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-[80%] mx-auto border-b">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-5"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <GoPlus
          className={`w-6 h-6 text-gray-600 transition-transform duration-300 ease-in-out ${
            isExpanded ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
      <div
        className={`-mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "h-fit opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 text-gray-700">{answer}</p>
      </div>
    </div>
  );
}

export default ExpandableText;
