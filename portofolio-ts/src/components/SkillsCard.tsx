import React from 'react'

interface SkillsCard {
  name?: string;
  porcetage?: number;
}

const SkillsCard: React.FC<SkillsCard> = ({
  name = 'Front-End',
  porcetage = 90,
}) => {
  

  return (
    <div className='w-full max-w-6xl h-auto p-3 sm:p-4 bg-[#e0b0ff] mt-6 sm:mt-10 mx-auto sm:mx-4 md:mx-8 lg:mx-auto rounded-lg'>
      <div className='mb-4'>
        <div className='flex justify-between'>
        <h2 className='text-[#7101fb]'>{name}</h2>
        <p className='text-[#7101fb]'>{porcetage}%</p>
        </div>
        <div className='bg-[#7101fb] dark:bg-[#7101fb] relative h-2 w-full rounded-2xl'>
          <div className='bg-white dark:bg-white absolute top-0 left-0 h-full rounded-2xl' style={{ width: `${porcetage}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default SkillsCard