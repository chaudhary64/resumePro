import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import Footer from "../Components/Footer";
import Nav from "../Nav/Nav";

const topics = [
  "Feedback",
  "Billing",
  "Pricing",
  "Page Errors",
  "Cancel Subscription",
  "Subscription Expired",
  "Email Subscription",
  "Other",
];

const Contact = () => {
  const [selected, setSelected] = useState("Feedback");
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (showModal && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (showModal && timer === 0) {
      navigate("/");
    }
    return () => clearInterval(interval);
  }, [showModal, timer, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setTimer(3);
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header */}
        <div className="py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-blue-700 mb-3 tracking-tight">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg">
              Have comments, questions, or feedback to share? Our team would
              love to hear from you. Please submit a message below.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="flex-grow flex items-start justify-center px-4">
          <div className="w-full max-w-4xl bg-gray-50 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            {/* Topic Selection */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3 text-center">
                Select a topic
              </label>
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelected(topic)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-150 cursor-pointer shadow-sm
                      ${
                        selected === topic
                          ? "bg-blue-600 text-white border-blue-600 scale-105"
                          : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:scale-105"
                      }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 py-2 px-3 transition outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 py-2 px-3 transition outline-none"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  className="w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 py-2 px-3 transition resize-none outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Disclaimer */}
            <p className="text-xs text-gray-400 mt-6 text-center">
              This site is protected by reCAPTCHA and the Google
              <span className="underline ml-1">Privacy Policy</span> and
              <span className="underline ml-1">Terms of Service</span> apply.
            </p>
          </div>
        </div>

        {/* Modal for Success */}
        {showModal && (
          <div className="fixed inset-0 flex items-end justify-center z-50">
            <div className="bg-white rounded-t-2xl shadow-2xl p-8 w-full max-w-md mb-8 mx-2 flex flex-col items-center border border-gray-200">
              <div className="mb-3">
                <svg
                  className="h-12 w-12 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="text-2xl font-bold text-green-600 mb-2">
                Sent successfully!
              </div>
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="animate-spin h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                <span className="text-gray-700 text-base">
                  Redirecting to home in{" "}
                  <span className="font-semibold">{timer}</span>...
                </span>
              </div>
              <Link to="/" className="text-blue-600 underline text-sm mt-1">
                Go to Home Now
              </Link>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Contact;
