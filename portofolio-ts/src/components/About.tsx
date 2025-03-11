import React from 'react';
import Card from './Card';
import { IoPersonOutline } from "react-icons/io5";

// Define Props Interface (if any props were to be passed to About in the future)
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <section className="">
        <div className="pt-20 sm:pt-28 md:pt-40 pl-4 sm:pl-8 md:pl-12 pb-2 sm:pb-4">
          <p className="text-[0.8rem] sm:text-[0.85rem] md:text-[0.9rem] flex gap-1 font-extralight">
            <IoPersonOutline className="text-xl sm:text-2xl text-[#e0b0ff] hover:text-white" />
            About Me
          </p>
        </div>

        <div className="pl-4 sm:pl-8 md:pl-12 pb-4 sm:pb-6 md:pb-8">
          <h1 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold">Crafting Solutions That Empower</h1>
        </div>

        <div className="flex flex-col md:flex-row md:justify-end pr-2 sm:pr-4 md:pr-6">
          <div className="px-4 sm:px-6 md:pl-10 md:pr-2">
            <p className="text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] p-2">
            I'm a developer who thrives on <strong>solving real-world problems</strong> with clean, efficient code. 
            My passion lies in building tools that <strong>simplify lives</strong> and <strong>spark innovation.</strong>
            </p>
            <p className="text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] p-2">
            Whether it's automating workflows or exploring emerging tech, I'm driven by a desire to 
            <strong> make technology accessible</strong> and <strong>impactful</strong>. Let's create something meaningful <strong>together.</strong>
            </p>
            <button  
              aria-label="Buy me a cookie"
              href="/portfolio"
              className="bg-[#9B4AFF] text-white px-3 sm:px-4 py-1.5 sm:py-2 m-2 rounded-2xl mt-3 sm:mt-4 inline-block 
              cursor-pointer hover:bg-[#5a32a3] active:bg-[#4a227d] transition-all duration-200 
              shadow-md border-2 hover:scale-105 text-sm sm:text-base"
            >
              Buy me a 🍪cookie! 
            </button>
          </div>

          {/* Card component with responsive margin */}
          <div className="mx-auto md:mx-0 mt-6 md:mt-0">
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
