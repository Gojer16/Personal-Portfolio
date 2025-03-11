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
        <h2 className='text-[#9B4AFF]'>{name}</h2>
        <p className='text-[#9B4AFF]'>{porcetage}%</p>
        </div>
        <div className='bg-[#9B4AFF] dark:bg-[#9B4AFF] relative h-2 w-full rounded-2xl'>
          <div className='bg-white dark:bg-white absolute top-0 left-0 h-full rounded-2xl' style={{ width: `${porcetage}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default SkillsCard