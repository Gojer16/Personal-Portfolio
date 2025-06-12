import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { motion } from 'framer-motion';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.5 }}
>
    <section>
      <div className="grid justify-center pt-36">
        <a
          className="bg-[#6f42c1] px-8 py-3 rounded-2xl flex items-center gap-2 cursor-pointer hover:scale-105
          hover:bg-[#5a32a3] active:bg-[#4a227d] transition-all duration-200 
          shadow-md border-2"
          role="link"
          href="#contact"
        >
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl text-primary items-center text-center" aria-label="Start Solving" />
          Let’s Solve What Matters
        </a>
      </div>
  <div className="grid justify-center pt-14 text-center">
    <h1 className="text-xl md:text-2xl lg:text-[2rem] text-secondary font-bold">
      Relentless Learning. Real Impact.
    </h1>
    <h1 className="text-[3rem] text-primary font-bold">
      Building Beyond Circumstance
    </h1>
    <h1 className="text-[2rem] text-secondary font-bold">
      With Code That Changes Lives
    </h1>
  </div>
  <div className="grid justify-center pt-8 mx-5 text-center">
    <p className="text-[1.1rem] text-primary max-w-2xl leading-normal">
      I’m not here to chase titles. I’m here to earn mastery.
      <br />
      Every project I build chips away at the limits placed on me, my family.
      <br />
      This isn’t just code—it’s a weapon against limitation. A path to freedom. A statement that effort still matters.  </p>
  </div>
  <div className="flex justify-center gap-4 pt-8">
    <a
      aria-label="Explore Projects"
      href="#projects"
      className="bg- text-primary hover:scale-105 flex items-center gap-2 p-3  text-center rounded-2xl cursor-pointer shadow-lg transition-all duration-200 border-2"
    >
      <FaCode className="text-2xl text-[#9B4AFF]" />
      Explore Projects
    </a>

    <a
      href="#contact"
      aria-label="Collaborate with Orlando"
      className="bg-[#6f42c1] p-3 rounded-2xl hover:scale-105 flex items-center text-center gap-2 cursor-pointer hover:bg-[#5a32a3] transition-all duration-200 shadow-lg border-2"
    >
      <MdOutlineKeyboardDoubleArrowRight className="text-2xl text-primary" />
      Collaborate with Me
    </a>
  </div>
</section>
</motion.div>
  );
};

export default Hero;
