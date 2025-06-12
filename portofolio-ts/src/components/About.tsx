import React from 'react';
import Card from './Card';
import { IoPersonOutline } from "react-icons/io5";

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36">
      <div className="flex items-center gap-2 text-sm sm:text-base text-secondary font-light mb-2 sm:mb-3">
        <IoPersonOutline className="text-xl sm:text-2xl" />
        <span>About Me</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-10">
        Code With Purpose. Impact With Heart.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 text-[0.95rem] sm:text-base text-gray-200">
          <p>
            I’m not just a developer—I’m a builder of tools that solve problems and elevate people.
            My mission is to turn code into a catalyst for freedom, clarity, and progress.
          </p>
          <p>
            From backend systems to user-focused features, I focus on <strong>simplicity, scalability,</strong> and real-world utility. 
            I'm not here to vibe code—I break down, reflect, and refine until I own the craft.
          </p>
          <p>
            Whether you're building your next product or streamlining internal processes, I bring
            <strong> engineering thinking</strong> and <strong>heart-led execution</strong> to the table.
          </p>

          <a  
            aria-label="Buy me a cookie"
            href='https://www.paypal.com/paypalme/orlandodev'
            className=" text-primary px-4 py-2 inline-block rounded-2xl mt-2 sm:mt-4 
              cursor-pointer hover:bg-[#5a32a3]  transition-all duration-200 
              shadow-md border-2 hover:scale-105 text-sm sm:text-base"
          >
            🍪 Buy me a cookie
          </a>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default About;
