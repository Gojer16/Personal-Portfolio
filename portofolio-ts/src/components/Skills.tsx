import React from 'react'
import { FaTools } from "react-icons/fa";
import SkillsCard from './SkillsCard';

interface Skills {
    name: string;
    porcetage: number;
}


const Skills: React.FC = () => {
  return (
    <>
        <div className='flex justify-center  sm:p-8 md:p-10 lg:p-12 '>
            <p className="text-[0.875rem] pt-14 sm:text-[1rem] flex font-extralight gap-2 ">
                <FaTools className='hover:text-white mt-1 hover:scale-110'/>
                Skills
            </p>
        </div>
        <div className='flex justify-center px-4 sm:px-6'>
            <h2 className='text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] font-bold'>Technical Skills</h2>
        </div>
        <div className='mt-10 sm:mt-14 md:mt-16 lg:mt-20 px-4 sm:px-6 md:px-8 lg:px-10'>
            <SkillsCard 
            name='Back-End Development'
            porcetage={75}
            />
            <SkillsCard 
            name='Front-End Development'
            porcetage={60}
            />

            <SkillsCard 
            name="Database"
            porcetage={50}
            />

            <SkillsCard 
            name="DevOps"
            porcetage={30}
            />
        </div>
    </>
  )
}

export default Skills