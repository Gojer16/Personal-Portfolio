import React from 'react';
import { FaCode, FaFigma } from "react-icons/fa6";
import { AiOutlineCode } from "react-icons/ai";

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <article className="bg-gradient-to-br from-[#9B4AFF] to-[#6F42C1] text-white rounded-2xl shadow-lg w-[280px] sm:w-[320px] md:w-[360px] p-6 space-y-5 transform hover:scale-105 transition-all duration-300 ease-in-out">
      <h2 className="text-xl sm:text-2xl font-bold border-b border-white/20 pb-2">
        Core Skills
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaCode className="text-2xl text-white" />
          <span className="text-base sm:text-lg font-medium">
            Backend Architecture & API Engineering
          </span>
        </div>
        <div className="flex items-center gap-3">
          <FaFigma className="text-2xl text-white" />
          <span className="text-base sm:text-lg font-medium">
            Front-End Development & Responsive Design
          </span>
        </div>
        <div className="flex items-center gap-3">
          <AiOutlineCode className="text-2xl text-white" />
          <span className="text-base sm:text-lg font-medium">
            Full-Stack Development & Code Optimization
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
