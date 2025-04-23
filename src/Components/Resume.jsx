import React, { useContext, useEffect, useState } from "react";
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
import { IoCloudDoneOutline } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";

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
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "framer-motion";
import LanguageDropdown from "./LanguageDropdown";
import { Info } from "../Context/Context";
import { useUser } from "@clerk/clerk-react";
import { postResumeData } from "../utils/postResumeData";
import { formatDate } from "../utils/formatDate";

const Resume = () => {
  let { id } = useParams();
  const resumeId = id; // Use the id from the URL as resumeId
  id = id.toString().padStart(2, "0"); // Ensure id is a string with at least 2 digits
  const { user } = useUser();

  const [modalOpen, setModalOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [atsResult, setAtsResult] = useState(null);
  const [error, setError] = useState("");

  const {
    languages,
    setLanguages,
    search,
    setSearch,
    selectedLang,
    setSelectedLang,
    modalVisible,
    setModalVisible,
    formData,
  } = useContext(Info);

  async function getAtsScoreFromSvg(svgCode, jobDescription) {
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY,
    });

    const prompt = `
  I am providing SVG code that contains the text of my resume, and a job description for a position I am applying to.
  
  1. Extract all relevant resume text from the SVG code, ignoring SVG tags, formatting, or non-text elements.
  2. Analyze the extracted text as a professional resume.
  3. Score my resume for Applicant Tracking System (ATS) compatibility on a scale from 0 to 100, specifically based on how well it matches the provided job description. Consider keyword relevance, section structure, and readability.
  4. Provide a brief explanation of the score, including strengths and areas for improvement to increase ATS compatibility. Do NOT mention SVG format, graphics, or non-text elements as a reason for a low score.
  5. List any missing keywords or sections that would improve my chances for this specific job.
  Output only a JSON object in the following format (do not include any extra text):
  
  {
    "ats_score": [number],
    "explanation": "[brief explanation]",
    "strengths": ["strength 1", "strength 2", "..."],
    "areas_for_improvement": ["area 1", "area 2", "..."],
    "missing_keywords_or_sections": ["keyword/section 1", "keyword/section 2", "..."]
  }
  
  Here is my SVG code:
  
  ${svgCode}
  
  Here is the job description:
  
  ${jobDescription}
  `;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    const resultText = response.candidates[0].content.parts[0].text;

    // Extract JSON object from the response text
    const jsonStartIndex = resultText.indexOf("{");
    const jsonEndIndex = resultText.lastIndexOf("}");
    let atsResult;

    if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
      const jsonString = resultText.substring(jsonStartIndex, jsonEndIndex + 1);
      try {
        atsResult = JSON.parse(jsonString);
      } catch (e) {
        throw new Error(
          "Failed to parse JSON from sanitized response: " + jsonString
        );
      }
    } else {
      throw new Error(
        "No valid JSON object found in the response: " + resultText
      );
    }

    return atsResult;
  }

  // This function will be called when user submits the job description
  const handleAnalyze = async () => {
    setLoading(true);
    setError("");
    setAtsResult(null);
    try {
      const elem = document.getElementById(id);
      const svgCode = new XMLSerializer().serializeToString(elem);
      const result = await getAtsScoreFromSvg(svgCode, jobDescription);
      setAtsResult(result);
    } catch (e) {
      setError("Failed to analyze resume. Please try again.");
    }
    setLoading(false);
  };

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

  const [menuOpen, setMenuOpen] = useState(false);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
    exit: { opacity: 0, y: 50, scale: 0.95 },
  };

  // This function will send the resume data to the server
  const sendUpload = async (formData, date) => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      // console.log("Email:", email);
      // console.log("Form Data:", formData);
      // console.log("ID:");
      // console.log("Date:", date);
      await postResumeData({
        email,
        dataObject: formData,
        templateNumber: Number(resumeId),
        date,
      });
      // console.log("Resume data saved successfully!");
    } catch (err) {
      console.error("Error saving resume data:", err);
    }
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/umpirsky/language-list/master/data/en/language.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const languageList = Object.entries(data).map(([code, name]) => ({
          code,
          name,
        }));
        setLanguages(languageList);
      })
      .catch((err) => console.error("Failed to fetch languages:", err));
  }, []);

  // Fetch list of languages for language dropdown component
  useEffect(() => {
    const date = formatDate();
    sendUpload(formData, date); // Initial upload

    const interval = setInterval(() => {
      sendUpload(formData, formatDate()); // ✅ pass up-to-date formData
    }, 10000);

    return () => clearInterval(interval);
  }, [formData]); // 👈 Add `formData` to the dependency array if you want the latest value

  return (
    <>
      <nav className="bg-[#1D1D20] text-white px-4 h-[7vh] flex items-center relative">
        <div className="w-full max-w-8xl mx-auto flex items-center justify-between">
          {/* Left: Home Link */}
          <Link
            to="/"
            className="flex items-center gap-2 px-2 py-1 rounded border border-[#52525A] hover:bg-[#3F3F45] transition"
          >
            <IoMdArrowBack />
            <span className="hidden sm:inline">Home</span>
          </Link>

          {/* Center: Brand */}
          <div className="text-[17px] font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-2 leading-none">
            ResumePro
            <span>
              <IoCloudDoneOutline />
            </span>
          </div>

          {/* Right: Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-3 py-1 bg-[#4314B6] flex items-center gap-2 rounded hover:bg-[#5e2ad6] transition duration-300 cursor-pointer"
            >
              Analyse Resume
            </button>
            {/* <button
              onClick={() => handleDownload(id)}
              className="px-3 py-1 bg-[#4314B6] flex items-center gap-2 rounded hover:bg-[#5e2ad6] transition duration-300 cursor-pointer"
            >
              <MdOutlineFileDownload />
              Download
            </button> */}
            <LanguageDropdown />
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex items-center p-2 rounded hover:bg-[#3F3F45] transition cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        {/* Mobile Dropdown  */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute top-[7vh] left-0 w-full bg-[#1D1D20] border-t border-[#52525A] md:hidden z-50"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-2 p-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full px-3 py-2 bg-[#4314B6] rounded hover:bg-[#5e2ad6] transition cursor-pointer"
                >
                  Analyse Resume
                </button>
                {/* <button
                  onClick={() => handleDownload(id)}
                  className="w-full px-3 py-2 bg-[#4314B6] flex justify-center items-center gap-2 rounded hover:bg-[#5e2ad6] transition cursor-pointer"
                >
                  <MdOutlineFileDownload />
                  Download
                </button> */}
                <LanguageDropdown />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <main className="lg:h-[92vh] flex flex-col lg:flex-row gap-3">
        {/* Left Part */}
        <section className="h-full lg:w-1/2 overflow-y-scroll no-scrollbar">
          <form action="post" className="w-[100%] mx-auto pt-5 px-4">
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

            {/* Languages */}
            <Languages
              toogleElement={toogleElement}
              setToggleElement={setToggleElement}
            />

            {/* Experience */}
            <WorkExperience
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

            {/* Skills */}
            <Skill
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
        <section className="h-full lg:w-1/2 max-md:mt-5 overflow-y-scroll no-scrollbar">
          <SelectedTemplate />
        </section>
      </main>
      {/* Modal for job description and ATS result */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm w-screen"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="backdrop"
          >
            <motion.div
              className={
                "relative w-full max-w-lg mx-auto flex flex-col " +
                (atsResult ? "h-screen" : "")
              }
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              key="modal"
            >
              <div
                className={
                  "relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full flex flex-col " +
                  (atsResult ? "h-screen" : "")
                }
              >
                {/* Cross Button */}
                <button
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                  className="absolute top-2.5 lg:top-5 right-3 lg:right-5 text-gray-400 hover:text-red-500 rounded-full p-2 transition z-10 cursor-pointer"
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                {/* Modal Content (scrollable, no scrollbar) */}
                <div
                  className={
                    "flex-1 overflow-y-auto scrollbar-hide px-6 py-12 space-y-8" +
                    (atsResult ? "" : " max-h-[80vh]")
                  }
                >
                  {!atsResult ? (
                    <>
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                        Paste Job Description
                      </h2>
                      <textarea
                        className="w-full h-36 p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none text-gray-800 dark:text-gray-100 text-base"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        placeholder="Paste the job description here..."
                      />
                      <button
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow transition disabled:opacity-60 text-lg cursor-pointer"
                        onClick={handleAnalyze}
                        disabled={loading || !jobDescription}
                      >
                        {loading ? "Analyzing..." : "Analyze"}
                      </button>
                      {error && (
                        <div className="text-red-500 text-sm text-center">
                          {error}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                        ATS Analysis Result
                      </h2>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-extrabold text-indigo-600">
                          {atsResult.ats_score}
                        </span>
                        <span className="text-gray-500 text-lg">/ 100</span>
                      </div>
                      <div className="text-gray-700 dark:text-gray-200 text-center">
                        {atsResult.explanation}
                      </div>
                      <div>
                        <h3 className="font-semibold text-indigo-700 mt-2">
                          Strengths
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200">
                          {atsResult.strengths.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-indigo-700 mt-2">
                          Areas for Improvement
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200">
                          {atsResult.areas_for_improvement.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-indigo-700 mt-2">
                          Missing Keywords/Sections
                        </h3>
                        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200">
                          {atsResult.missing_keywords_or_sections.map(
                            (k, i) => (
                              <li key={i}>{k}</li>
                            )
                          )}
                        </ul>
                      </div>
                      <button
                        className="w-full mt-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold transition text-lg cursor-pointer"
                        onClick={() => {
                          setAtsResult(null);
                          setJobDescription("");
                          setModalOpen(false);
                        }}
                      >
                        Done
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Resume;
