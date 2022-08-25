import React from 'react'
import { skills } from '../../constants'

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col justify-center items-center m-auto'>
      <h2 className='font-bold text-[60px] sm:text-[100px] mb-10'>Skills</h2>
      <div className='flex items-center justify-center  flex-wrap max-w-[100%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[45%] gap-10 '>
        {
          skills.map((s, i) => (
            <div className='flex flex-col items-center justify-center gap-10'>
              <img className='w-[100px] h-[100px] object-contain hover:-translate-y-2 duration-200' src={s.icon} alt={s.title} key={i} />
              < p > {s.title}</ p>
            </ div>
          ))
        }
      </div>

    </section >
  )
}

export default Skills