import React, { useState } from "react";
import { HiOutlinePlus, HiOutlineX } from "react-icons/hi";
import Nav from "../Nav/Nav";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

const resumes = [
  {
    id: 1,
    title: "Resume Chirag Chaudhary",
    edited: "3 days ago",
    thumbnail: "/resume-templates/01.svg",
  },
  {
    id: 2,
    title: "Resume Chirag Chaudhary",
    edited: "15 days ago",
    thumbnail: "/resume-templates/03.svg",
  },
  {
    id: 3,
    title: "Resume Chirag Chaudhary",
    edited: "22 days ago",
    thumbnail: "/resume-templates/06.svg",
  },
  {
    id: 4,
    title: "Resume Chirag Chaudhary",
    edited: "22 days ago",
    thumbnail: "/resume-templates/08.svg",
  },
];

const templates = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: `Template ${i + 1}`,
  thumbnail: `/resume-templates/0${i + 1}.svg`, // Update to correct paths
}));

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome back, <span className="text-blue-600">Chirag!</span>
          </h2>
        </div>

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-900">Your Resumes</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105 font-medium cursor-pointer"
          >
            + New Resume
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div
            onClick={() => setShowModal(true)}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="border-2 border-dashed border-gray-300 rounded-lg w-full aspect-[3/4] bg-white hover:border-blue-500 hover:bg-blue-50 flex items-center justify-center transition transform hover:scale-105">
              <HiOutlinePlus className="text-6xl text-gray-400" />
            </div>
            <p className="mt-3 text-center text-gray-700 font-medium">
              Create new resume
            </p>
          </div>

          {resumes.map((resume) => (
            <div key={resume.id} className="flex flex-col items-center">
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
                <img
                  src={resume.thumbnail}
                  alt={resume.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-800">
                {resume.title}
              </h3>
              <p className="text-sm text-gray-500">Edited {resume.edited}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/30 backdrop-blur-xl bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl p-6 w-full max-w-5xl h-[90vh] relative shadow-2xl flex flex-col border border-blue-200"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="p-2 absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl z-50 cursor-pointer"
              >
                <HiOutlineX />
              </button>

              <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center drop-shadow user-select-none">
                Choose a Template
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 overflow-y-auto p-4 rounded-lg flex-1">
                {templates.map((template) => (
                  <Link to={`/${template.id}`} key={template.id}>
                    <div
                      key={template.id}
                      className="w-full h-72 border border-blue-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition transform hover:scale-105 bg-white/90"
                    >
                      <img
                        src={template.thumbnail}
                        alt={template.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Dashboard;
