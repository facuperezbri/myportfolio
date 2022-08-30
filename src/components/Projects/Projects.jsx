import React from 'react'
import { projects } from '../../constants'
import { FaGithub } from 'react-icons/fa'
import { BsArrowUpRightCircle } from 'react-icons/bs'

const Project = (p) => {

  return (
    <div className='flex flex-col w-[350px] h-fit gap-6 '>
      <div className='flex justify-center w-full bg-[#d7dbe0] pt-2 px-2'>
        <a href={p.deploy || p.github} target='_blank' rel="noreferrer">
          <img className='w-[335px] h-[220px] object-contain' src={p.image} alt={p.title} />
        </a>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <div className='w-full '>
            <p className='text-[18px]'>{p.title}</p>
          </div>
          <div className='flex gap-2'>
            {p.technologies.map((t) => (
              t
            ))}
          </div>
        </div>
        <div className='flex gap-2'>
          {p.github && <a className='hover:-translate-y-1 duration-300' href={p.github} target='_blank' rel="noreferrer">
            <FaGithub size={40} />
          </a>}

          <a className='hover:rotate-45 duration-300' href={p.deploy} target='_blank' rel="noreferrer">
            <BsArrowUpRightCircle size={40} />
          </a>

        </div>
      </div>


    </div >
  )
}

const Projects = () => {
  return (
    <section id='projects' className=' flex flex-col justify-center items-center mb-5 mt-20'>
      <h2 className='font-bold text-[60px] sm:text-[100px] mb-10'>Projects</h2>
      <div className='flex items-center justify-center flex-wrap gap-10'>
        {
          projects.map((p, i) => (
            <Project key={i} {...p} />
          ))
        }
      </div>
    </section >
  )
}

export default Projects