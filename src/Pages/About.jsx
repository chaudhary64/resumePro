import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaChartLine,
  FaLanguage,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import Nav from "../Nav/Nav";
import { Link } from "react-router";

// --- Features Section Data ---
const features = [
  {
    icon: <FaCheckCircle className="text-blue-600 text-3xl mb-3" />,
    title: "ATS-Friendly Templates",
    desc: "Our templates are designed to pass Applicant Tracking Systems, ensuring your resume reaches recruiters.",
  },
  {
    icon: <FaChartLine className="text-green-600 text-3xl mb-3" />,
    title: "ATS Score & Feedback",
    desc: "Instantly see your resume’s ATS score and get actionable feedback to maximize your chances.",
  },
  {
    icon: <FaLanguage className="text-purple-600 text-3xl mb-3" />,
    title: "Multi-Language Support",
    desc: "Easily translate your resume from English to any language with a single click.",
  },
];

// --- Team Section Data ---
const teamMembers = [
  {
    name: "Chirag Chaudhary",
    role: "Frontend Developer & Backend Developer",
    img: "/images/chirag.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Arjun Yadav",
    role: "UI/UX Designer",
    img: "/images/arjun.jpg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Goyal Annayan",
    role: "Frontend Developer & Backend Developer",
    img: "/images/goyal.jpg",
    github: "#",
    linkedin: "#",
  },
];

const About = () => (
  <>
    <Nav />
    <div className="bg-white min-h-screen flex flex-col">
      {/* HERO */}
      <section className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Build a Resume That{" "}
            <span className="text-blue-600">Gets You Noticed</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            Resume Maker empowers you with ATS-friendly templates, instant
            feedback, and effortless language translation—so you can apply
            anywhere, with confidence.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            <Link to="/">Get Started</Link>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10 tracking-tight">
          Powerful Features for Your Success
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-8 flex flex-col items-center text-center"
            >
              {f.icon}
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10 tracking-tight">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-3 border-4 border-blue-100 shadow"
                />
                <div className="font-semibold text-gray-900">{member.name}</div>
                <div className="text-blue-600 text-sm mb-2">{member.role}</div>
                <div className="flex gap-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-gray-400 hover:text-black text-xl transition" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-blue-700 hover:text-blue-900 text-xl transition" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Ready to build your standout resume?
          </h2>
          <p className="text-gray-600 mb-6">
            Join thousands of successful job seekers. Start for free in minutes.
          </p>
          <div className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
            <Link to="/">Create My Resume</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default About;
