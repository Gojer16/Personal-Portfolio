import React from 'react';
import { FaCode } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";

// Define Props Interface (even if it's empty for now)
interface CardProps {

}

const Card: React.FC<CardProps> = () => {
  return (
    <>
      <article className="bg-[#9B4AFF] text-white w-[280px] sm:w-[320px] md:w-[350px] rounded-2xl bg-gradient-to-r from-[#9B4AFF] to-[#6F42C1] hover:scale-105 transition-all duration-200 shadow-md">
        <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold p-1 m-2 sm:m-3">Core Skills</h1>
        <div className="pl-3 sm:pl-4 pb-2 sm:pb-3 md:pb-4">
          <h2 className="text-[0.9rem] sm:text-[1rem] pb-1 flex gap-2 font-bold items-center">
            <FaCode className="text-xl sm:text-2xl text-white" />
            Front-End Development
          </h2>
          <h2 className="text-[0.9rem] sm:text-[1rem] pb-1 flex gap-2 font-bold items-center">
            <FaFigma className="text-xl sm:text-2xl text-white" />
            UI/UX Design
          </h2>
          <h2 className="text-[0.9rem] sm:text-[1rem] pb-1 sm:pb-2 flex gap-2 font-bold items-center">
            <AiOutlineCode className="text-xl sm:text-2xl text-white" />
            Back-End Development
          </h2>
        </div>
      </article>
    </>
  );
};

export default Card;
