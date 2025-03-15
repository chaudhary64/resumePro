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

  const steps = [
    {
      id: 1,
      src: "/assets/images/step1.png",
      title: "Pick a CV template.",
      description: "Choose a sleek design and layout to get started.",
    },
    {
      id: 2,
      src: "/assets/images/step2.png",
      title: "Fill in the blanks.",
      description: "You'll fill in the blanks with your information.",
    },
    {
      id: 3,
      src: "/assets/images/step3.png",
      title: "Download your CV.",
      description: "You'll get a downloadable file in your inbox.",
    },
  ];

  return (
    <main>
      <section className="text-center my-28">
        <p className="text-6xl">Create a proffesional Resume</p>
        <div className="my-6 text-lg text-gray-600">
          <p>Fill in the blanks, choose a template and download your</p>
          <p>resume instanly</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition-colors duration-200">
          Get Started
        </button>
      </section>
      <Swipper data={swippeCards} />
      <section className="my-24">
        <p className="text-center text-4xl">
          How ResumePro resume builder works
        </p>
        <div className="my-20 flex justify-evenly">
          {steps.map((step) => (
            <div key={step.id}>
              <img src={step.src} alt={step.title} />
              <p className="text-center font-[500] text-2xl mt-4">
                {step.title}
              </p>
              <p className="mt-1 text-base text-center text-gray-900">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url("/assets/images/changeCV-bg-img.png")`,
          backgroundSize: "cover",
        }}
        className="flex justify-evenly items-center py-28"
      >
        <img src="/assets/images/changeCV-image.webp" alt="" />
        <div className="w-1/2">
          <p className="text-4xl">Transform Your CV. Transform Your Career.</p>
          <p className="my-4 text-lg">
            Elevate your professional profile with ResumePro CV Builder—an
            advanced career development tool designed to help you stand out. If
            your current CV lacks impact, it's time for an upgrade. Explore our
            expertly crafted templates and make a lasting impression.
          </p>
          {/* Checkmarks */}
          <div className="my-6">
            {[
              "Leverage tailored recommendations to create a polished CV in minutes.",
              "Impress recruiters with sophisticated, modern designs.",
              "Let employers see your true self—the best candidate for the job.",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 my-4 text-lg">
                <img src="/assets/images/circle-check.png" alt="" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <button className="bg-[#FBAF38] font-bold py-3 px-8 rounded-full">
            Creat your CV Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
