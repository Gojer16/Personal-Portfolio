import React from 'react';
import CardProjects from './CardProjects';
import { MdOutlineWorkOutline } from "react-icons/md";

interface Projects {
  img: string;
  link: string;
  title: string;
  description: string;
  tech: string;
}

const Projects: React.FC = () => {
  return (
    <>
      <div>
        <div className='pt-20 pl-8'>
          <h2 className='flex gap-2 text-[2rem] font-extralight '>
            <MdOutlineWorkOutline className='text-[2rem] text-secondary hover:text-primary mt-2'/>
            Projects
          </h2>
        </div>
        <div className='pt-4 px-8'>
          <h1 className='text-[2rem] font-bold'>Featured Projects</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 px-4'>
          <CardProjects
            img='/1.png' 
            link='https://portfolio-orlandos-projects-8aa08152.vercel.app/'
            title='Personal Portfolio'
            description='Personal Portfolio built React, Framer Motion and TailwindCSS. Showing off my projects, values as a developer ready for global opportunities.'
            tech={['React, Framer Motion, TailwindCSS']}
          />

          <CardProjects
            img='/2.png'
            link='https://v0-weather-app-pi-three.vercel.app/'
            title='Real-time weather dashboard'
            description='A real-time weather dashboard that auto-detects your location and displays current weather information.'
            tech={['React, TailwindCSS, API']}
          />

          <CardProjects
            img='/3.png'
            link='https://pagina-escuela-seven.vercel.app/'
            title='Full-stack institutional website'
            description='A full-stack institutional website for a technical school, built with React, Framer Motion, TailwindCSS, and FastAPI.'
            tech={['React, Framer Motion, MySQL, FastAPI']}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
