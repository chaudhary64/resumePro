import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link, useParams } from "react-router";

const Resume = () => {
  const { id } = useParams();
  return (
    <>
      <nav className="h-[7vh] px-2 flex justify-between items-center text-white text-sm bg-[#1D1D20]">
        <Link
          to={"/"}
          className="px-2 py-1.5 flex items-center gap-2 rounded border border-[#52525A] hover:bg-[#3F3F45] transition-all"
        >
          <IoMdArrowBack />
          Home
        </Link>
        <span>ResumePro</span>
        <button className="px-2 py-1.5 bg-[#4314B6] flex items-center gap-2 rounded">
          <MdOutlineFileDownload />
          Download
        </button>
      </nav>
    </>
  );
};

export default Resume;
