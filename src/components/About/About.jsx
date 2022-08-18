import React from 'react'

import profile from '../../assets/profile.png'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const About = () => {
  return (
    <section className='flex flex-col justify-center items-center mb-5 '>
      <div className='flex flex-col items-center gap-4 max-w-[300px] sm:max-w-[600px]'>
        <h2 className='font-bold text-[60px] sm:text-[100px]'>About</h2>
        <div className='flex justify-evenly gap-5'>
          <a href="https://www.linkedin.com/in/facuperezbri/" target='_blank' rel="noreferrer" className='hover:-translate-y-1 duration-300'>
            <FaLinkedinIn size={40} />
          </a>
          <a href="https://github.com/facuperezbri" target='_blank' rel="noreferrer" className='hover:-translate-y-1 duration-300 '>
            <FaGithub size={40} />
          </a>
        </div>
        <div></div>
        <img src={profile} alt='Facu Pérez Brizuela' className='w-[200px] sm:w-[400px] rounded-full bg-yellow-400' />
        <div className='flex flex-col gap-4'>
          <h3 className='text-[35px] font-bold'>
            I make apps and websites,<br className='hidden sm:block' /> and I do it well.
          </h3>
          <p className='font-light'>
            I have always been passionate about technology. My life led me to train in different areas, specifically those related to business management, giving me an important background in finance.
          </p>
          <p className='font-light'>
            Until one day I decided to go back studying what I was really passionate about and completed an intensive bootcamp of +800 hours in 4 months, graduating with solid knowledge of Javascript, React, Redux, SQL, PostgreSQL, Node.js and Express.
          </p>
          <p className='font-light'>
            In my free time I enjoy playing drums and guitar.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About