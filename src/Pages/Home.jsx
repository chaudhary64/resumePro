import React from "react";
import Swipper from "../Components/Swipper";

const Home = () => {
  const swippeCards = [
    {
      id: 1,
      src: "/assets/resume-templates/01.svg",
    },
    {
      id: 2,
      src: "/assets/resume-templates/02.svg",
    },
    {
      id: 3,
      src: "/assets/resume-templates/03.svg",
    },
    {
      id: 4,
      src: "/assets/resume-templates/04.svg",
    },
    {
      id: 5,
      src: "/assets/resume-templates/05.svg",
    },
    {
      id: 6,
      src: "/assets/resume-templates/06.svg",
    },
    {
      id: 7,
      src: "/assets/resume-templates/07.svg",
    },
    {
      id: 8,
      src: "/assets/resume-templates/08.svg",
    },
    {
      id: 9,
      src: "/assets/resume-templates/09.svg",
    },
    {
      id: 10,
      src: "/assets/resume-templates/10.svg",
    },
  ];

  return (
    <main>
      <div className="text-center my-28">
        <p className="text-6xl">Create a proffesional Resume</p>
        <div className="my-6 text-lg text-gray-600">
          <p>Fill in the blanks, choose a template and download your</p>
          <p>resume instanly</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition-colors duration-200">
          Get Started
        </button>
      </div>
      <Swipper data={swippeCards} />
    </main>
  );
};

export default Home;
