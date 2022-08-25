import React from 'react'
import { projects } from '../../constants'

const Project = (p) => {
  console.log(p.title);
  return (
    <div>{p.title}</div>
  )
}

const Projects = () => {
  return (
    <section id='projects' className=' flex flex-col justify-center items-center mb-5 mt-20'>
      <h2 className='font-bold text-[60px] sm:text-[100px]'>Projects</h2>
      {projects.map((p, i) => (
        <Project key={i} {...p} />
      ))}
    </section>
  )
}

export default Projects