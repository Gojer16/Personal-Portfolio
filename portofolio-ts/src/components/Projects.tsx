import React from 'react';
import CardProjects from './CardProjects';
import { MdOutlineWorkOutline } from "react-icons/md";
import myImage from '../assets/2.jpg';
import myImage2 from '../assets/3.jpg';
import myImage3 from '../assets/4.jpg';

// Define types for the props being passed to CardProjects component
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
            <MdOutlineWorkOutline className='text-[2rem] text-[#e0b0ff] hover:text-white mt-2'/>
            Projects
          </h2>
        </div>
        <div className='pt-4 px-8'>
          <h1 className='text-[2rem] font-bold'>Featured Projects</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 px-4'>
          <CardProjects 
            img={myImage}
            link='orlandoascanio.com'
            title='Next.js Application To-Do-List'
            description='A sleek and responsive task management app built with Next.js, designed to help users organize their tasks efficiently.'
            tech={['React.js, ShadCN, Supabase']}
          />

          <CardProjects 
            img={myImage2}
            link='orlandoascanio.com'
            title='React.js Application To-Do-List'
            description='This app of react.js was actually really cool!'
            tech={['Next.js, TailwindCSS, Firebase']}
          />

          <CardProjects 
            img={myImage3}
            link='orlandoascanio.com'
            title='Full-Stack Application To-Do-List'
            description='A sleek and responsive task management app built with Next.js, designed to help users organize their tasks efficiently.'
            tech={['React.js, TailwindCSS, Firebase']}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
