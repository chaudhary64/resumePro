import React from "react";
import Swipper from "../Components/Swipper";
import ExpandableText from "../Components/ExpandableText";
import Footer from "../Components/Footer";

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

  const faqs = [
    {
      id: 1,
      question: "What is the definition of a resume?",
      answer:
        "A resume is a formal document that a job applicant creates to itemize his or her qualifications for a position. A resume is usually accompanied by a customized cover letter in which the applicant expresses an interest in a specific job or company and draws attention to the most relevant details in the resume.",
    },
    {
      id: 2,
      question: "What is the difference between a CV and a resume?",
      answer:
        "The primary differences between a resume and a curriculum vitae (CV) are length, what is included, and what each is used for. While both are used in job applications, a resume and a CV are not always interchangeable.",
    },
    {
      id: 3,
      question: "How do I choose the right resume template?",
      answer:
        "To choose the right resume template, consider the job you're applying for and your industry. If you're in a creative field, a more visually appealing template might be best. For traditional industries like finance or law, stick to a clean, professional layout. Ensure the template is easy to read, highlights your strengths, and aligns with your experience level. Avoid overloading it with too many graphics or colors that could distract from your qualifications. Choosing the best resume format for the template is also important: Chronological (or reverse chronological) - Most popular: Lists jobs in reverse order, starting with the most recent. Ideal for those with a consistent career track. Functional (skills-based): Highlights skills over chronological work history, perfect for career changers or those with employment gaps. Combination (hybrid): Merges elements of both chronological and functional formats, listing skills followed by employment history. Great for experienced professionals with varied transferable skills relevant to the job. Review our field-tested resume templates or job-specific resume examples to help pick the ideal template for you or change your template on the fly in the builder. To make your resume the best it can be, that may mean avoiding certain pitfalls like not including any dates or using the same template for every job application.",
    },
    {
      id: 4,
      question: "How far back should a resume go?",
      answer:
        "A resume should go back no more than 10 to 15 years in terms of work experience. If you have a longer work history, you can include it on an addendum that you can submit with your resume. This way, you can focus on your most recent work experience and qualifications.",
    },
    {
      id: 5,
      question: "What does an ATS-friendly resume mean?",
      answer:
        "An ATS-friendly resume is designed to pass through the Applicant Tracking Systems, which employers use to screen resumes, especially for roles with lots of applicants. To make your resume ATS-friendly, use a simple, clean format without complex designs or graphics, include relevant keywords from the job description, and use standard fonts. Avoid tables, images, or unusual file formats, and save your resume as a .docx or PDF to ensure compatibility. Use our specially designed ATS resume templates to create the strictest ATS-friendly resume, approved by resumePro career experts.",
    },
    {
      id: 6,
      question: "Should I make a different resume for every job application?",
      answer:
        "Yes, it's essential to tailor your resume for every job application. Tailored resumes are directly relevant to the job description. This impresses recruiters. Customize your resume by highlighting the skills, experiences, and accomplishments most relevant to the specific job. This increases your chances of standing out and showing employers you're a great fit for their position. However, you don't need to start from scratch; just tweak key sections to match the job description. With our resume builder, you can easily duplicate existing resumes, paste the new job listing link, and receive tailored advice to help you update your resume to match the specific job requirements.",
    },
    {
      id: 7,
      question: "What makes resumePro the best resume builder?",
      answer:
        "resumePro stands out for two reasons. Firstly, we're a market leader. We've been refining the builder for more than 10 years; it's fast, effective, and creates strong resumes that win interviews. Our AI resume builder makes it easy to produce mistake-free resumes that highlight your strengths and align with industry standards. They're exactly what recruiters want to see. Secondly (and this is a big one, your resume is just the start. With every resume, you get free access to more than 18 powerful career tools like job search, interview preparation, and salary analysis.",
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
      <section className="my-24">
        <p className="text-4xl text-center">Frequenly Asked Questions</p>
        <div className="mt-20">
          {faqs.map((faq) => (
            <ExpandableText
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
