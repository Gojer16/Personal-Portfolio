import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

// Define Props Interface (optional, for future extensibility)
interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="h-11/12 bg-[linear-gradient(180deg,#4a227d_0%,#6a44b2_50%,#1a1a1a_100%)]">
      <div className="grid justify-center pt-8">
        <button
          className="bg-[#6f42c1] p-2 rounded-2xl flex items-center gap-2 cursor-pointer
           hover:bg-[#5a32a3] active:bg-[#4a227d] transition-all duration-200 
           shadow-md border-2">
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl text-white" aria-label="Solve Problems"/>
          Let’s Solve Problems
        </button>
      </div>

      <div className="grid justify-center pt-14">
        <h1 className="text-xl md:text-2xl lg:text-[2rem] text-[#9B4AFF] font-bold justify-self-center text-center">
        Bridging Curiosity
        </h1>
        <h1 className="text-[3rem] text-[#e0b0ff] font-bold justify-self-center">
        With Purposeful Code
        </h1>
        <h1 className="text-[2rem] text-[#9B4AFF] font-bold justify-self-center">
        That Empowers People
        </h1>
      </div>

      <div className="grid justify-center pt-8 mx-5">
        <p className="text-[1rem]">
        Developer & perpetual learner crafting solutions where emerging tech meets 
    human needs. Let's automate complexity and amplify potential through
    ethical, future-ready systems.
        </p>
      </div>

      <div className="flex justify-center gap-4 pt-8">
        <button
          aria-label="Explore Innovations" className="bg-[#e0b0ff] text-white flex items-center gap-2 p-2 rounded-2xl cursor-pointer shadow-md hover:bg-[#c89cff] active:bg-[#7a52e6] transition-all duration-200 border-2"
        >
          <FaCode className="text-2xl text-[#9B4AFF]" />
          Explore Innovations
        </button>

        <button
         aria-label="Create Something Meaningful" className="bg-[#6f42c1] p-2 rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-[#5a32a3] active:bg-[#4a227d] transition-all duration-200 shadow-md border-2"
        >
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl text-white" />
          Let’s create something meaningful
        </button>
      </div>
    </section>
  );
};

export default Hero;
