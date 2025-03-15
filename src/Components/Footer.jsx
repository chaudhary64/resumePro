import React from "react";
import { useState, useEffect } from "react";
import { ImFacebook } from "react-icons/im";
import { ImLinkedin2 } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "About Us",
    },
    {
      id: 2,
      title: "Terms & Conditions",
    },
    {
      id: 3,
      title: "Privacy Policy",
    },
    {
      id: 4,
      title: "Contact Us",
    },
    {
      id: 5,
      title: "FAQ",
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="bg-black py-20">
      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } justify-center items-center gap-5 text-white text-sm`}
      >
        {links.map((link, index) => (
          <>
            <a href="#">{link.title}</a>
            {!isMobile && index < links.length - 1 && <span> | </span>}
          </>
        ))}
      </div>
      <div className="text-white lg:text-lg flex justify-center items-center gap-5 mt-10">
        {[ImFacebook, ImLinkedin2, LuInstagram].map((Icon, index) => (
          <div key={index} className="rounded-full p-2 bg-gray-800">
            <Icon />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
