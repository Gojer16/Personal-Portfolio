import React from 'react';
import myImage from '../assets/1.jpg';

// Define the types for the props that the CardProjects component will receive
interface CardProjects {
  img?: string;
  link?: string;
  title?: string;
  description?: string;
  tech?: string[];
}

const CardProjects: React.FC<CardProjects> = ({
  img = myImage,
  link = '#',
  title = 'Next.js Application To-Do-List',
  description = 'A sleek and responsive task management app built with Next.js, designed to help users organize their tasks efficiently.',
  tech = ['TailwinCSS, Next.js, Firebase']
}) => {
  return (
    <>
      <div className="px-2 sm:px-4 md:px-6 lg:pl-8 pt-4 hover:scale-105 sm:hover:scale-110 transition-all duration-200">
        {/* Card of the project */}
        <div className="bg-[#9B4AFF] border-2 rounded-2xl w-full h-[400px] sm:h-[425px] md:h-[450px]">
          {/* Link of the project */}
          <a href={link}>
            {/* Image of the project */}
            <img className="rounded-t-2xl h-48 w-full object-cover" src={img} alt="project photo" />
          </a>
          {/* Content of the project */}
          <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)]">
            {/* Link of the project with a title */}
            <a href={link}>
              <h5 className="mb-2 text-[1.25rem] sm:text-[1.35rem] md:text-[1.5rem] font-bold tracking-tighter text-white">{title}</h5>
            </a>
            {/* Description of the project */}
            <p className="mb-3 text-sm sm:text-base text-white">{description}</p>
            {/* Tech used in the project */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <p className="text-sm sm:text-base text-white">Tech used:</p>
              {tech.map((tech, index) => (
                <p key={index} className="text-sm sm:text-base text-white">
                  {tech}
                </p>
              ))}
            </div>
            {/* Button with a link */}
            <a
              href={link}
              className="w-fit inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#4a227d] rounded-2xl hover:bg-[#6a44b2] active:bg-[#3a126d] shadow-md transition-colors duration-200"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProjects;
