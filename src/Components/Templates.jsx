import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { getDynamicSVGComponent } from "../utils/getDynamicSVGComponent";
import { Info } from "../Context/Context";
import { useUser } from "@clerk/clerk-react";
import { deleteTemplate } from "../utils/deleteTemplate";

const Templates = ({ resume }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // 👈 visibility state
  const { formData, setFormData } = useContext(Info);

  const mouseClickHandler = () => {
    setFormData(resume.object);
  };

  const { user } = useUser();
  const email = user?.primaryEmailAddress?.emailAddress;

  const deleteHandler = async () => {
    await deleteTemplate(email, resume.templateNumber); // optional: await for confirmation
    setIsVisible(false); // hide after delete
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key={resume.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-col items-center"
        >
          <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 relative">
            {getDynamicSVGComponent(resume.templateNumber, {
              data: resume.object,
            })}

            {/* Action Buttons Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex gap-3"
            >
              {/* Edit Button */}
              <motion.span
                onClick={mouseClickHandler}
                className="px-4 py-1 rounded text-xs sm:text-sm text-white bg-[#4314B6] hover:bg-[#37109b] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={`/${resume.templateNumber}`}>Edit</Link>
              </motion.span>

              {/* Delete Button */}
              <motion.span
                onClick={deleteHandler}
                className="px-4 py-1 rounded text-xs sm:text-sm text-white bg-red-600 border border-red-600 hover:bg-red-500 transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delete
              </motion.span>
            </motion.div>
          </div>

          <h3 className="mt-3 text-lg font-semibold text-gray-800">
            {resume.title}
          </h3>
          <p className="text-sm text-gray-500">Last Edited: {resume.date}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Templates;
