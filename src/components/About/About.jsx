import React from 'react'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import wave from '../../assets/wave.png'

const About = () => {
  return (
    <section className='flex flex-col justify-center items-center'>

      <div className='flex flex-col justify-center items-center'>
        <p className='uppercase tracking-widest text-orange-500 text-[12px]'>Let's get to know each other</p>
        <h2 className='font-bold text-[50px] md:text-[70px] xl:text-[100px]'>About</h2>
        <div className='flex gap-10'>
          <a href='https://www.linkedin.com/in/facuperezbri/' target='_blank' className='cursor-pointer' rel="noreferrer"><FaLinkedinIn size={25} /></a>
          <a href="https://github.com/facuperezbri" target='_blank' rel="noreferrer"><FaGithub size={25} /></a>
        </div>
      </div>
      <img src={wave} alt='memoji saying hi' className='h-[100%] w-[100%]' />
    </section>
  )
}

export default About