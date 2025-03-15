import React from "react";
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

  return (
    <footer className="bg-black py-20">
      <div className="flex justify-center items-center gap-5">
        {links.map((link, index) => (
          <>
            <a href="#" className="text-white text-sm">
              {link.title}
            </a>
            {index < links.length - 1 && (
              <span className="text-white"> | </span>
            )}
          </>
        ))}
      </div>
      <div className="text-white text-lg flex justify-center items-center gap-5 mt-10">
        {[ImFacebook, ImLinkedin2, LuInstagram].map((Icon, index) => (
          <div key={index} className="rounded-full p-2 text-lg bg-gray-800">
            <Icon />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
