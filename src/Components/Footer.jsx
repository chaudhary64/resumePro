import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img
              src="/public/logo/android-chrome-512x512.png"
              alt="ResumePro"
              className="h-10"
            />
            <p className="mt-4 text-sm">
              Providing quality services since 2025.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:flex md:flex-col justify-center md:text-center">
            <p className="text-lg font-semibold text-white mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg md:text-center font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex md:justify-center gap-5 space-x-4 text-xl">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-400 transition-colors"
              >
                <BsTwitterX />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500 transition-colors"
              >
                <i className="fab fa-instagram"></i>
                <AiFillInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-blue-700 transition-colors"
              >
                <GrLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2025 YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
